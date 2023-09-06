import './App.css';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { useState } from 'react';
import resume from './images/resume.pdf'
import { Routes, Route } from 'react-router-dom';
import Home from "./FrontPage/Home"
import Experience from './Experience/Experience';
import Calculator from './Calculator/calculator';
import Weather from './Weather/Weather';

export const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
      <div className={darkMode ? "dark" : ""}>
      <header className="App-header">
        <title>Tommy Mac Portfolio</title>
      </header>
      <main className='dark:bg-gray-900 dark:text-white'>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between bg-gray-300 sticky top-0 dark:bg-black">
            <h1 className=" px-10 text-xl"><a href="/">developedbyheybro200:</a></h1>
            <ul className='flex px-10 items-center'>
              <li className=" hover:bg-gray-600"><a href="/exp">my exp</a></li>
              <li className='hover:bg-gray-600 ml-8'><a href="/calculator">calculator app</a></li>
              <li className='hover:bg-gray-600 ml-8'><a href="/weather">weather app</a></li>
              <li className='ml-8 hover:bg-gray-600 rounded-lg'>
                {darkMode ? <BsFillSunFill className="cursor-pointer text-xl" onClick={()=> setDarkMode(!darkMode)}/> : <BsFillMoonStarsFill className="cursor-pointer text-xl" onClick={()=> setDarkMode(!darkMode)}/>}
              </li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#"><a href={resume} download="resume" target="_blank">resume</a></li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/exp" element={<Experience />}/>
            <Route path="/calculator" element={<Calculator dark={darkMode}/>} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
