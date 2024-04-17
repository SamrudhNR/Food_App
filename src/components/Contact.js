import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-center'>Contact Us Page</h1>
        <div className='text-center p-4 m-2'>
          <input type='text' placeholder='Write your issue here...' 
          className='bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          ></input>
          <button type="submit" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">Submit</button>
        </div>
    </div>
  )
}

export default Contact;