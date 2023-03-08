import Image from 'next/image'


export default function Banner (props: any) {
    const LogoBanner = require ('../public/BannerComida.jpg')
    return (
        <div className="w-full h-50 bg-white">
           <Image src={LogoBanner} alt="BannerPrueba" />
        </div>
    )
}