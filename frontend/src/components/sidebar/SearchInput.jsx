import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form action="" className=' flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full bg-sky-950' name="" id="" />
        <button type='submit' className='btn btn-circle bg-sky-950 '>
            <FaSearch className='outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput



// starter
// import React from 'react';
// import { FaSearch } from "react-icons/fa";

// function SearchInput() {
//   return (
//     <form action="" className=' flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full bg-blue-950' name="" id="" />
//         <button type='submit' className='btn btn-circle bg-blue-950 '>
//             <FaSearch className='outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput
