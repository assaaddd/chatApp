import React from 'react'
import { BsSend } from 'react-icons/bs'

function MessageInput() {
  return (
    <form className='px-4 my-3' action="">
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600 text-black' name="" id="" placeholder='Send a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 text-black flex items-center pe-3'>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput;


//starter 
// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// function MessageInput() {
//   return (
//     <form className='px-4 my-3' action="">
//         <div className='w-full'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600 text-white' name="" id="" placeholder='Send a message'/>
//             <button type='submit' className='absolute inset-y-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput

