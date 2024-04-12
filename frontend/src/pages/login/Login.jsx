import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function Login() {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const {loading , login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username , password);
    }


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-green-50 bg-clip-padding backdrop-filter backdrop-blur-lg  hover:bg-blue-50'>
                <h1 className='text-3xl font-semibold text-center text-blue-950 '>
                    Login
                    <span className='text-purple-950'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" id='username' placeholder='Enter username' className='w-full input input-bordered h-10' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-5' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                            </button>
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-3 ml-1 inline-block'>{"Don't"} have an accout?</Link>
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