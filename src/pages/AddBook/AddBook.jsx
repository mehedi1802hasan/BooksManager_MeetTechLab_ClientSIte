import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/Provider';
import { Slide } from "react-awesome-reveal";

const AddBook = () => {
  const { user } = useContext(AuthContext)
  // const {user}=useContext(AuthContext)
  const handleAddBook = event => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.name.value;
    const image = form.imgUrl.value;
    const author = form.author.value;
    const date = form.date.value;
    const category = form.category.value;
    const description = form.description.value;
    const PublisherEmail = form.PublisherEmail.value;
    const addbook = {
      name: bookName, image, author, date, category, description, PublisherEmail
    }
    console.log(addbook)
    fetch('http://localhost:2000/books', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addbook)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Great!',
            text: 'book Item Successfully Posted ',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      })

  }
  return (
    <div className=''>
      <Slide><h4 className='text-center font-serif text-4xl mt-12'>Add-Book </h4>
      </Slide>
      <form onSubmit={handleAddBook} className=" card-body">
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-36 px-1 md:px-36'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book-Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter your Product name" className="input input-bordered  p-8 rounded-2xl" required />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">ImageURL</span>
            </label>
            <input type="text" name="imgUrl" placeholder="Enter product image url" className="input input-bordered  p-8 rounded-2xl" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input type="text" name='author' placeholder="enter product price" className="input input-bordered  p-8 rounded-2xl" defaultValue="" required />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication-Date</span>
            </label>
            <input type="date" placeholder='enter product quantity' name='date' className="input input-bordered  p-8 rounded-2xl" required />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Genre/Category</span>
            </label>
            <select name='category' className=' border-gray-300 border p-5 rounded-2xl '>
              <option value="novel">Novel</option>
              <option value="poem">Poem</option>
              <option value="history">History</option>
              <option value="religion">Religion</option>
              <option value="sonet">Sonet</option>
              <option value="other">other</option>


            </select>

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" name="description" placeholder="Enter product description" className="input input-bordered  p-8 rounded-2xl" />
          </div>
          {/**  hide this email field  */}
          <div className="form-control hidden">
            <label className="label">
              <span className="label-text">Publisher-Email</span>
            </label>
            <input type="text" name='PublisherEmail' placeholder="enter product price" className="input input-bordered  p-8 rounded-2xl" defaultValue={user?.email} required />
          </div>
          {/**  --------------------  */}

        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary hover:bg-red-500 bg-yellow-500 w-60 mx-auto text-black">Add Book</button>
        </div>
      </form>
    </div>

  );
};


export default AddBook;