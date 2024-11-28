import Card from './Components/Card';
import './App.css'
import Profile from './assets/profile.jpeg';
import SocialMediaLinks from './Components/SocialMediaLinks';
import Header from './Components/Header';
import Blob from './Components/Blob';
import Skills from './Components/Skills';

function App() {

  return (
    <>
      <Header />
      <div className='flex justify-center pt-20'>
        <Card className='w-5/12 p-10 content-center'>
          <div className='text-left'>
            <p className='text-6xl font-bold font-body leading-normal'>
              <span className='text-8xl'>Hi! </span> I am
            </p>
            <div className='flex items-end'>
              <p className='text-6xl font-bold font-body leading-1'>Shreyas</p>
              <div className='border border-purple-400 rounded-full ml-5 px-4 py-1 mb-1'>UI/UX</div>
              <div className='border border-purple-400 rounded-full ml-5 px-2 py-1 mb-1'>&#128062;</div>
            </div>
            <p className='text-sm font-body leading-1 pt-10 pb-3'>building stunning user interfaces for over 7 years</p>
            <p className='text-sm font-body leading-1'>as frontend engineer.</p>
          </div>
          <SocialMediaLinks />
        </Card>
        <Card className='w-7/12 '>
          <div className='relative h-full w-full place-content-center flex'>
            <img className=' filter grayscale size-60 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 object-cover object-bottom' src={Profile} alt="" />
            <Blob />
          </div>
        </Card>
      </div>
      <Skills />
    </>
  )
}

export default App