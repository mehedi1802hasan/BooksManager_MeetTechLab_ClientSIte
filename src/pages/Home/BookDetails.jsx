import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    console.log(books,'books..')
    const{image,name,description,author,date,category}=books;
    return (
        <div>
         <div className='max-w-screen-md mx-auto'>
            <img className='mt-8 rounded-3xl lg:w-7/12 md:w-7/12 mx-auto hover:scale-105 duration-700' src={image} alt="" />
         </div>
         <div><h4 className='text-3xl font-bold my-8 text-center font-serif'><span>Title: </span>{name}</h4></div>
         <h4 className=' w-10/12 text-base mx-auto mb-5'><span className='font-bold'>category:</span> {category} </h4>
         <div><h4 className=' w-10/12 text-base mx-auto mb-5'><span className='font-bold'>Desriction:</span> {description} </h4> </div>
         <div className=' w-10/12 text-base mx-auto mb-10 text-green-700 font-bold  font-serif'>( {date}<span > Published by : {author} </span> )</div>
        </div>
    );
};

export default BookDetails;