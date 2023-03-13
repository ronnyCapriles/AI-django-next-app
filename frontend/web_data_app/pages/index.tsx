import Banner from '../components/Banner'
import ContacButton from '../components/ContacButton'
import Description from '../components/Description'
import Logo from '../components/Logo'
import Name from '../components/Name'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-auto bg-white ' >
        <div>
            <Banner/>
        </div>
      
        <div className=' flex absolute top-7 left-5'>
            <Logo />
        </div>

        <div className='w-full h-full flex flex-col px-2'>
            <div className='w-full h-auto flex flex-row items-center justify-between my-1'>
                <div className='w-45%'>
                    <Name/>    
                </div>
                <div className='w-45%'>
                    <ContacButton/>   
                </div>
            </div>
            <div  className='' >
                <Description/>
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
