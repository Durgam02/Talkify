import React from 'react'

const Login = () => {
  return(<div className= 'flex flex-col items-center justify-center min-w-96 mx-auto ' >

    {/*to change below div- tailwindcss-glassmorphism*/}
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
    bg-clip-paddinfg backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <h1 className= 'text-3x1 font-semibold text-center text-gray-300'>
        Login
        <span className='text-gray-300'> ChatApp</span>
      </h1>

      <from>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' 
          placeholder='Enter username' 
          className='w-full input input-bordered h-10' />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='text' 
          placeholder='Enter Password' 
          className='w-full input input-bordered h-10' />
        </div>
        <a href='#' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block'>
          {"Don't"} have an account?
        </a>

        <div>
          <button className='btn btn-block btn-sm mt-2'>Login</button>
        </div>
 
      </from>
      </div>  
  </div>
);
};
export default Login; 

// STARTER CODE FOR THIS FILE:
// const Login = () => {
//   return(<div className= 'flex flex-col items-center justify-center min-w-96 mx-auto ' >

//     {/*to change below div- tailwindcss-glassmorphism*/}
// //     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
//     bg-clip-paddinfg backdrop-filter backdrop-blur-lg bg-opacity-0'>

//       <h1 className= 'text-3x1 font-semibold text-center text-gray-300'>
//         Login
//         <span className='text-gray-300'> ChatApp</span>
//       </h1>

//       <from>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' 
//           placeholder='Enter username' 
//           className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='text' 
//           placeholder='Enter Password' 
//           className='w-full input input-bordered h-10' />
//         </div>
//         <a href='#' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block'>
//           {"Don't"} have an account?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </div>
 
//       </from>
//       </div>  
//   </div>
// );
// };
// export default Login; 