
import { Link} from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-end gap-6 p-4shadow-md rounded-b-lg">
      <Link 
        to="/" 
        className="text-gray-700 font-semibold hover:text-blue-500 transition-colors"
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="text-gray-700 font-semibold hover:text-blue-500 transition-colors"
      >
        About
      </Link>
    </div>
  )
}

export default Navbar