import bitmoji_waving from './images/bitmoji_waving.png'
import {AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai'


export const ProfilePic = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative bg-gradient-to-b object-scale-down from-teal-500 rounded-full w-80 h-80 mt-7 overflow-hidden'>
                <img src={bitmoji_waving} layout="fill"/>
            </div>
            <div className='justify-evenly text-5xl gap-16 py-3 text-gray-600 m-10'>
                <a target="blank" href="https://github.com/heybro200"><AiFillGithub className='cursor-pointer'/></a>
                <a target="blank"><AiFillYoutube className='cursor-pointer'/></a>
                <a target="blank" href="https://www.linkedin.com/in/tommy-mac-4a5087122/"><AiFillLinkedin className='cursor-pointer'/></a>
            </div>
        </div>
        
    )

}

export default ProfilePic;