import React from 'react'
import {Link} from 'react-router' 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-150 text-center">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-700">Page not found</p>
      <Link
        to="/"
        className="!mt-6 !px-6 !py-3 bg-blue-600 !text-white font-medium rounded-lg shadow hover:!bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>

  )
}

export default NotFoundPage