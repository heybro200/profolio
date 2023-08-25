import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import bitmoji_waving from './images/bitmoji_waving.png'
import django_logo from "./images/django_logo.png"
import typescript_logo from "./images/typescript_logo.png"
import react_logo from "./images/react_logo.png"
import uw_logo from './images/uw_logo.png'
import coding_dojo_logo from './images/coding_dojo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Tommy Mac Portfolio</title>
      </header>
      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developed By</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-xl'/></li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</li>
            </ul>
          </nav>
          <div>
            <div>
              <h1 className="text-5xl text-teal-600 font-medium">Tommy Mac</h1>
              <h3 className='text-3xl py-2'>Software Engineer</h3>
            </div>
            <div className='flex m-20'>
              <div className='p-10 w-1/4'>
                <h1 className='text-center text-3xl'>About Me:</h1>
                <div>
                  <p className='text-md py-5 leading-8 text-gray-800'>
                    Graduated from University of Washington With a B.S in Biology. Started my career
                    working in wet-lab at LabCorp where I later transition to Invitae and stayed with Invitae
                    for ~ 3 years. I initially came to Invitae working in lab and was graciously offered an opportunity
                    to take another role as Software Engineer where I participated in full development cycle (design/implementations) of 3 successful products. 
                  </p>
                </div>
                <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-7 overflow-hidden'>
                    <img src={bitmoji_waving} layout="fill"/>
                </div>
                <div className='flex text-5xl gap-16 py-3 text-gray-600 ml-7 mt-7'>
                  <AiFillLinkedin />
                  <AiFillYoutube />
                  <AiFillGithub />
                </div>
              </div>
              <div className='w-1/4 text-center'>
                <h1 className='text-center text-3xl p-10'>Education:</h1>
                <p className='text-md py-5 leading-8 text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex justify-center relative mt-20">
                  <img src={uw_logo} className='w-30 h-20 justify-center' layout='fill'/>
                  <img src={coding_dojo_logo} className='w-30 h-20 justify-center' layout='fill'/>
                </div>
                
              </div>
              <div className='w-1/4 ml-10'>
                <h2 className='text-center text-3xl p-10'>Technologies</h2>
                <div>
                  <ul className='ml-10'>
                    <img src={django_logo} className='w-40 h-40' />
                    <img src={react_logo} className='w-40 h-40'/>
                    <img src={typescript_logo} className='w-40 h-40'/>
                  </ul>
                </div>
                
              
                
              </div>
              <div className='w-1/4'>
                <h2 className='text-center text-3xl p-10'>Projects</h2>
              </div>
            </div>
          </div>
          
          
        </section>
        {/* comment */}
        <section>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Graduated from University of Washington With a B.S in Biochemistry. Started my career
              working in wet-lab at LabCorp where I later transition to Invitae and stayed with Invitae
              for ~ 3 years. I initially came to Invitae working in lab and was graciously offered an opportunity
              to take another role as Software Engineer where I participated in full development cycle (design/implementations) of 3 successful products
            </p>
          </div>
          <div>
            <h2 className='text-center text-3xl p-10'>Technologies</h2>
            <div className='flex py-3 gap-16 justify-center mt-20 relative mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden'>
                <img src={django_logo} className='w-40 h-40' />
                <img src={react_logo} className='w-40 h-40'/>
                <img src={typescript_logo} className='w-40 h-40'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
