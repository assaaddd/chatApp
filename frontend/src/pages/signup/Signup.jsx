import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-green-50 bg-clip-padding '>
                <h1 className='text-3xl font-semibold text-center text-blue-950 '>
                    Sign Up
                    <span className='text-purple-950'> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label htmlFor="fullName" className='label p-2'>
                            <span className='text-base label-text'>Full name</span>
                        </label>
                        <input type="text" id='fullName' placeholder='Enter full name' className='w-full input input-bordered h-10 ' />
                    </div>
                    <div>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" id='username' placeholder='Enter username' className='w-full input input-bordered h-10 ' />
                    </div>
                    <div>
                        <label htmlFor="password" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" id='password' placeholder='Enter password' className='w-full input input-bordered h-10 ' />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input type="password" id='confirmpassword' placeholder='Confirm password' className='w-full input input-bordered h-10 ' />
                    </div>
                    <GenderCheckbox/>

                    <div>
                        <button className='btn btn-block btn-sm '>Sign Up</button>
                    </div>

                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-3 ml-1 inline-block'>Already have an accout?</a>
                </form>
            </div>
        </div>
    )
}

export default SignUp





//starter code
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function SignUp() {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-green-50 bg-clip-padding '>
//                 <h1 className='text-3xl font-semibold text-center text-blue-950 '>
//                     Sign Up
//                     <span className='text-purple-950'> ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label htmlFor="fullName" className='label p-2'>
//                             <span className='text-base label-text'>Full name</span>
//                         </label>
//                         <input type="text" id='fullName' placeholder='Enter full name' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <div>
//                         <label htmlFor="username" className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" id='username' placeholder='Enter username' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" id='password' placeholder='Enter password' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <div>
//                         <label htmlFor="confirmpassword" className='label p-2'>
//                             <span className='text-base label-text'>Confirm password</span>
//                         </label>
//                         <input type="password" id='confirmpassword' placeholder='Confirm password' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <GenderCheckbox/>

//                     <div>
//                         <button className='btn btn-block btn-sm '>Sign Up</button>
//                     </div>

//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-3 ml-1 inline-block'>Already have an accout?</a>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp
