import React from 'react';
import Swal from 'sweetalert2';
import { FaRegEdit } from 'react-icons/fa';

const UpdateModal = ({ item,refetch }) => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = e.target;
    const bookName = form.name.value;
    const author = form.author.value;
    const description = form.description.value;
    const image = form.image.value;
    console.log(name, price, quantity, image);
    const addbook={
        bookName,author,quantity,image
        }
    fetch(`http://localhost:3000/books/${item._id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addbook)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      if(data.modifiedCount>0){
        refetch();
        Swal.fire({
            title: 'Well-done!!',
            text: 'Updated  successfully ',
            icon: 'success',
            confirmButtonText: 'Okay'
          }) 
      }
    })


  };

  const closeModal = () => {
    const modal = document.getElementById(`my_modal_4-${item._id}`);
    modal.close(); // Close the dialog
  };

  return (
    <div>
       <button
        className=" text-lg text-green-500"
        onClick={() => document.getElementById(`my_modal_4-${item._id}`).showModal()}
      >
       <FaRegEdit/>
      </button>
      <dialog id={`my_modal_4-${item._id}`} className="modal">
        <div className="modal-box">
        <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
             X
            </button>
          <form onSubmit={handleSubmit} method="dialog">
           
           <div className='md:flex lg:flex gap-4'>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your book name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">author</span>
              </label>
              <input
                type="text"
                name="author"
                placeholder="Enter your author name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.author}
              />
            </div>
           </div>
           <div className='md:flex lg:flex gap-4 '>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter the book description"
                className="input input-bordered rounded-2xl"
                defaultValue={item.description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter your book name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.image}
              />
            </div>
           </div>
            <div className="form-control hidden">
              <label className="label">
                <span className="label-text">Id</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="Enter your id name"
                className="input input-bordered rounded-2xl"
                defaultValue={item._id}
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-outline btn-secondary my-4">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;