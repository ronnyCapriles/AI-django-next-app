import Banner from '../components/Banner'
import Description from '../components/Description'
import Logo from '../components/Logo'
import Name from '../components/Name'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white relative  ' >
        <div>
            <Banner/>
        </div>
      
        <div className='absolute top-7 left-5'>
            <Logo />
        </div>

        <div className=' relative py-4'>
            <div className='absolute top-5 left-4'>
                <Name/>
                
            </div>
            <div  className='absolute top-10 left-4 py-2' >
                <Description/>
            </div>
            
        </div>
    </div>
  )
}
