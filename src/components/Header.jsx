
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/KS.png'
import List from './List';

export default function Header() {

  const navigate=useNavigate();
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
         <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img 
                   src={logo} 
                   alt='logo' 
                   className='h-12 cursor-pointer'
                   onClick={()=>navigate("/")}/>

            </div>
            <div>
              <ul className='flex space-x-10'>
                <List text="Home" route="/"/>
                <List text="Offers" route="/offers"/>
                <List text="Sign In" route="/sign-in"/>
              </ul>
            </div>
         </header>
    </div>
  )
}
