import React from 'react'

function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-green-50 bg-clip-padding backdrop-filter backdrop-blur-lg  hover:bg-blue-50'>
                <h1 className='text-3xl font-semibold text-center text-blue-950 '>
                    Login
                    <span className='text-purple-950'> ChatApp</span>
                </h1>
                <form >
                    <div>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" id='username' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-5'>Login</button>
                    </div>
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-3 ml-1 inline-block'>{"Don't"} have an accout?</a>
                </form>
            </div>
        </div>
    )
}

export default Login;


//starter code 
// import React from 'react'

// function Login() {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-green-50 bg-clip-padding backdrop-filter backdrop-blur-lg  hover:bg-blue-50'>
//                 <h1 className='text-3xl font-semibold text-center text-blue-950 '>
//                     Login
//                     <span className='text-purple-950'> ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label htmlFor="username" className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" id='username' placeholder='Enter username' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-5 ml-1 inline-block'>{"Don't"} have an accout?</a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login