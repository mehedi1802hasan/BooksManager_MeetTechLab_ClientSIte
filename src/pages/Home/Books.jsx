import React, { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetch('http://localhost:2000/books')
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
    fetch(`http://localhost:2000/books/${searchText}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  
  return (

     <div>
      <h3 className='font-bold text-3xl mt-10 text-center mb-8 font-serif'>
        Total Books: {books.length}
      </h3>
      {/*-------Type animation part------*/}
  <div className="md:w-96 mx-auto mt-6 px-5 text-red-500 font-serif font-semibold">
  <TypeAnimation
    sequence={[
      'Search with Title 🔍',
      1000,
      'Title with AuthorName 👨‍🏭',
      1000,
      'Search with Author-Name 👨‍🏭',
      () => {
        console.log('Sequence completed');
      },
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{
      fontFamily: 'serif', // Replace with your desired font family
      fontSize: '20px',
      fontWeight: '600', // Set the font weight to "semibold"
      display: 'inline-block',
    }}
  />
</div>


      {/**---Search Field Here ----- */}
      <div className=" text-center mb-8">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder='search by Title or Author Name'
          className="input input-bordered input-md md:w-[500px] p-6 lg:rounded-3xl md:rounded-3xl h-[58px]"
        />
        <button  className='btn btn-md text-white hover-bg-blue-500 lg:rounded-3xl md:rounded-3xl hover:bg-blue-500 bg-[#645BC8] md:w-[110px] lg:w-[110px] lg:-ml-[120px] md:-ml-[120px] -ml-[4px]' onClick={handleSearch}>Search</button>
      </div>
      <div className='grid grid-cols-1 mb-16 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto'>
        {getBooksForCurrentPage().map((book) => (
          <div key={book._id}>
            <img
              className='h-36 w-40 rounded-3xl'
              src={book.image}
              alt={book.name}
            />
            <h3 className='text-xl font-semibold text-green-500'>{book.name}</h3>
            <h3 className='text-lg font-semibold'>{book.writer}</h3>
            <h3 className='text-lg font-semibold'>{book.category}</h3>
            <Link to={`/details/${book._id}`} className=' btn-sm btn btn-outline w-1/3 mx-auto'>Details</Link>
          </div>
        ))}
      </div>

      {/**------Pagination------- */}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  
  );
};

export default Books;