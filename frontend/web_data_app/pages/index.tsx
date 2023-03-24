import Banner from '../components/Banner'
import ContacButton from '../components/ContacButton'
import Description from '../components/Description'
import Location from '../components/Location'
import Logo from '../components/Logo'
import Name from '../components/Name'
import ProductCard from '../components/ProductCard'
import SwrProve from '../components/SwrProve'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-auto bg-white ' >
        <div>
            <Banner/>
        </div>
      
        <div className=' flex absolute top-10 left-5'>
            <Logo />
        </div>

        <div className='w-full h-full flex flex-col px-2'>
            <div className='w-full h-auto flex flex-row items-center justify-between mt-4 mb-2'>
                <div className='w-45%'>
                    <Name/>   
                    <SwrProve/> 
                </div>
                <div className='w-45%'>
                    <ContacButton/>   
                </div>
            </div>
            <div  className='mr-8' >
                <Description/>
            </div>   

            <div  className=' flex flex-row py-2 ' >
                <Location/>
            </div>
        </div>
        
        <div className='w-full h-auto flex flex-col items-center justify-center px-2'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}
