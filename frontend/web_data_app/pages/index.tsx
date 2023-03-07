import Banner from '../components/Banner'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-sky-500' >
      <Banner/>
      <div className='absolute top-20 left-5'>
       <Logo />
      </div>
    </div>
  )
}
