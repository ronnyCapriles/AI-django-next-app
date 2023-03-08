import Image from 'next/image'

export default function Logo (props:any) {
    const Logo = require ('../public/LogoComida.jpg')
    return(
        <div className=" block bg-white h-auto items-center justify-center p-4 rounded rounded-full w-2/6 shadow-logo">
            <Image src={Logo} alt="LogoPrueba" className='h-25px w-25px rounded-full' />
        </div>
        
    )
}