import Image from 'next/image'

export default function Logo (props:any) {
    const Logo = require ('../public/LogoComida.jpg')
    return(
        <div className="bg-white items-center justify-center p-4 rounded rounded-full shadow-logo" >         
            <Image src={Logo} alt="LogoPrueba" className='rounded-full h-10 w-10 sm:h-40 sm:w-40' />
        </div>
        
    )
}