import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/Strategi IQ transparent (2).svg'
const NavBar = () => {
    return (
        <nav className={`w-full h-6 flex justify-center items-center pt-8 pb-8`}>
            <div className={`logoContainer w-fit `}>
                <Image src={Logo} alt="logo image" width={100} height={100}/>
            </div>
            <div className="navLinks w-full flex justify-center items-center space-x-4">
                <Link href="/" className={`link`}>Map</Link>
                <Link href="../../pages/blog" className={`link`}>Blog</Link>
            </div>
        </nav>
    )
}

export default NavBar