import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';

const Navbar = () => {
  
    const {LogOut,user}=useContext(AuthContext)
    const handleLogOut=()=>{
        console.log('clicked')
        LogOut()
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    }
    return (
        <div>
            <div className="navbar bg-base-100 md:px-10 lg:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><Link to='/'>Home</Link></li>
        <li ><Link to='/addbook'>AddBook</Link></li>
        <li ><Link to='/mybooks'>My Books</Link></li>
   
      </ul>
    </div>
    <a className=" text-xl font-bold font-serif">BooksHouse</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/addbook'>AddBook</Link></li>
        <li><Link to='/mybooks'>My Books</Link></li>

    </ul>
  </div>
  <div className="navbar-end font-semibold">
  <ul className='flex justify-center items-center gap-4 mr-4'>
  {
    user ? <Link onClick={handleLogOut} to="/" className="btn">Logout</Link> : <Link to='/login' className="btn">Login</Link>
  }
</ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;