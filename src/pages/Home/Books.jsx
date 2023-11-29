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
    fetch('https://meet-tech-lab-server.vercel.app/books')
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
    fetch(`https://meet-tech-lab-server.vercel.app/books/${searchText}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  
  return (

     <div className='lg:mb-14 md:mb-14'>
      <h3 className='font-bold text-3xl mt-10 text-center mb-2 font-serif'>
        Total Books: {books.length}
      </h3>
      {/*-------Type animation part------*/}
  <div className="md:w-96 lg:w-96 mx-auto mt-6 px-5 text-red-500 font-serif font-semibold">
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
      <div className='grid grid-cols-1 gap-y-3 mb-16 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto'>
        {getBooksForCurrentPage().map((book) => (
          <div key={book._id}>


<div className="card md:w-96 lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={book.image} alt="Bookimage" className="rounded-2xl hover:scale-105 duration-700 h-56 w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title -mt-5 md:h-12 lg:h-12">Title: {book.name}</h2>
    <p>Author: {book.author}</p>
    <div className="card-actions">
    <Link to={`/details/${book._id}`} className='btn btn-outline btn-secondary'>Details</Link>
    </div>
  </div>
</div>

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