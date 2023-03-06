import Image from 'next/image'


export default function Banner (props: any) {
    const LogoBanner = require ('../public/BannerFut.jpg')
    return (
        <div className="w-full h-50 bg-sky-300">
           <Image src={LogoBanner} alt="BannerPrueba" sizes='10vw'
        />
        </div>
    )
}