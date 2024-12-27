import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  return (
    <div className='w-full p-4'>
      <div className="flex gap-4">
        <div>
          <GiHamburgerMenu  className="w-6 h-6" />
        </div>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  )
}

export default Nav
