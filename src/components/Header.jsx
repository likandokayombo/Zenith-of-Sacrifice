import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-black text-white p-4 h-auto'>
      <div className='logo'>
        <Link to="/"><h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>Zenith Of Sacrifice</h2></Link>
      </div>
      
      <nav>
        <ul className='flex'>
          <li className='mr-5 lg:text-lg'><Link to="/"><button>Home</button></Link></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header