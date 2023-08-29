import {TbSchool} from 'react-icons/tb'
import {CiLocationOn} from 'react-icons/ci'
import django_logo from "./images/django_logo.png"
import typescript_logo from "./images/typescript_logo.png"
import react_logo from "./images/react_logo.png"
import javascript_logo from './images/javascript_logo.png'
import python_logo from './images/python_logo.png'
import aws_logo from './images/aws_logo.png'
import docker_logo from './images/docker_logo.png'
import kubernetes_logo from './images/kubernetes_logo.png'
import DigitalClock from './digitClock';
import ProfilePic from './profile_pic'

export const Home = () => {
    return (
        <div className='px-10 border-solid border-spacing-2'>
            <div>
              <h1 className="text-5xl text-teal-600 font-medium">Tommy Mac</h1>
              <h3 className='text-3xl py-2'>Software Engineer</h3>
              <div className="flex align-top">
                <CiLocationOn className="h-12 mr-2"/>
                <h4 className='text-xl py-2'>Seattle, WA</h4>
              </div>
              <div className="flex align-top">
                <TbSchool className="h-12 mr-2"/>
                <h4 className='text-xl py-2'>University of Washingon</h4>
              </div>
              <DigitalClock />
            </div>
            <div className='flex m-20'>
              <div className='p-10 w-1/2'>
                <h1 className='text-center text-3xl'>About Me:</h1>
                <div>
                  <p className='text-md py-5 leading-8 '>
                    Hi my name is Thanh, but I go by Tommy and I welcome you to my porfolio page.
                    Here you will find everything you need about me including hobbies, life, interests and engineering skills.
                    I wanted to create this page to share not only my skills that I have acquired either through
                    professional experience but also my eagerness to learn more and my strides to become a software
                    engineer. I hope you enjoy as you scroll through.
                  </p>
                </div>
                <ProfilePic />
              </div>
              <div className='w-1/2 ml-10'>
                <h2 className='text-center text-3xl p-10'>Technologies:</h2>
                <p className='text-md leading-8'>
                Below are some of the technologies I have expirence with
                during my professional experience working in biotech and
                coding bootcamp. There are many more different technologies
                listed on my resume. Review my resume to find out!
                </p>
                <div className='flex relative justify-center py-6 m-4'>
                  <img src={python_logo} className='w-30 h-20'/>
                  <img src={javascript_logo} className='w-20 h-20'/>
                  <img src={django_logo} className='w-20 h-20' />
                  <img src={react_logo} className='w-20 h-20'/>
                  <img src={typescript_logo} className='w-20 h-20' />
                  <img src={aws_logo} className='w-25 h-20' />
                  <img src={kubernetes_logo} className='w-25 h-20'/>
                  <img src={docker_logo} className='w-30 h-20'/>
                </div>
              </div>
            </div>
        </div>
        
    )

}

export default Home;