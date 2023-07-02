import config from '../../store/config'
import { Animated } from "react-animated-css"
import { BsGithub, BsMailbox2 } from 'react-icons/bs'
import { MdOutlineDarkMode, MdSunnySnowing } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react' 

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    
    const router = useRouter()
    function handleRedirect(url) {
        router.push(url)
    }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
    }
    const scrollPosition = useScrollPosition()
    return (
        <>
            {/*<Animated animationIn="slideInUp" animationOut="zoomOutLeft" animationInDuration={4000} animationOutDuration={5000} isVisible={false}>*/}
<div className={classNames(
        scrollPosition > 0 ? "absolute backdrop-blur-md backdrop-brightness-150 bg-gray-800" : "blur-none", "sticky transition-shadow border-b-2 border-gray-500 dark:border-gray-900 bg-white dark:bg-black")}>
   <div className="flex flex-row flex-wrap w-full h-auto justify-between mx-auto p-4 fixed">
    <p className="flex items-center font-bold text-3xl font-[Handlee]">
        {config.user.user_name}
    </p>
    <div className="flex space-x-4 inline-flex items-center">
        {theme === 'dark' ? (
         <>
    <button onClick={() => setTheme("light")} className="h-8 w-8 items-center bg-gray-900 dark:bg-black disable-blue text-sm text-gray-500 rounded-md md:hidden focus:outline-none dark:text-gray-400 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-900">
     <MdSunnySnowing className="w-8 h-7"/>
    </button>
         </>
        ) : (
        <>
    <button onClick={() => setTheme("dark")} className="h-8 w-8 items-center bg-gray-900 dark:bg-black text-sm text-gray-500 rounded-md md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-900">
     <MdOutlineDarkMode className="w-8 h-7"/>
    </button>
        </>
        )} 
    <button onClick={() => handleRedirect('https://github.com/Nicat-dcw')} type="button" className="h-8 bg-gray-900 dark:bg-black disable-blue inline-flex items-center text-sm text-gray-500 rounded-md md:hidden focus:outline-none dark:text-gray-400 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-900" aria-controls="navbar-default" aria-expanded="false">
     <BsGithub className="w-8 h-7"/>
    </button>
    </div>
    </div>
</div>
            {/*</Animated>*/}
        </>
    )
}