import config from '../../store/config'
import { Animated } from "react-animated-css"
import { BsGithub, BsMailbox2 } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    function handleRedirect(url) {
        router.push(url)
    }
    return (
        <>
<Animated animationIn="slideInUp" animationOut="zoomOutLeft" animationInDuration={4000} animationOutDuration={5000} isVisible={false}>
<div className="border-b-2 border-gray-500 dark:border-gray-900 bg-white dark:bg-black">
   <div className="flex flex-row flex-wrap w-full h-auto justify-between mx-auto p-4 fixed">
    <p className="flex items-center font-bold text-3xl font-[Handlee]">
        {config.user.user_name}
    </p>
    <div className="flex space-x-4 inline-flex items-center">
    <button onClick={() => handleRedirect('mailto:nicatdcw@mail.az')} type="button" className="h-8 w-8 items-center bg-gray-900 dark:bg-black disable-blue text-sm text-gray-500 rounded-md md:hidden focus:outline-none dark:text-gray-400 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-900" aria-controls="navbar-default" aria-expanded="false">
     <BsMailbox2 className="w-8 h-7"/>
    </button>
    <button onClick={() => handleRedirect('https://github.com/Nicat-dcw')} type="button" className="h-8 bg-gray-900 dark:bg-black disable-blue inline-flex items-center text-sm text-gray-500 rounded-md md:hidden focus:outline-none dark:text-gray-400 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-900" aria-controls="navbar-default" aria-expanded="false">
     <BsGithub className="w-8 h-7"/>
    </button>
    </div>
    </div>
</div>
</Animated>
        </>
    )
}