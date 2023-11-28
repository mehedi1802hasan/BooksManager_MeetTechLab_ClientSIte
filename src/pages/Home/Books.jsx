import React, { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const getBooksForCurrentPage = () => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return books.slice(startIndex, endIndex);
  };
  const handleSearch = () => {
    fetch(`http://localhost:3000/books/${searchText}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };
  return (

     <div>
      <h3 className='font-bold text-3xl mt-10 text-center mb-10'>
        Total Books: {books.length}
      </h3>
      <div className="mb-14 text-center  ">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-2 border border-gray-400 "
        />
        <button className='ml-1 btn btn-outline ' onClick={handleSearch}>Search</button>
      </div>
      <div className='grid grid-cols-1 mb-16 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto'>
        {getBooksForCurrentPage().map((book) => (
          <div key={book.name}>
            <img
              className='h-36 w-40 rounded-3xl'
              src={book.image}
              alt={book.name}
            />
            <h3 className='text-xl font-semibold text-green-500'>{book.name}</h3>
            <h3 className='text-lg font-semibold'>{book.writer}</h3>
            <h3 className='text-lg font-semibold'>{book.category}</h3>
          </div>
        ))}
      </div>
      {/**Pagination------- */}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  
  );
};

export default Books;
