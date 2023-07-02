import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

export default function Footer() {
    const { theme, setTheme } = useTheme()
    const router = useRouter()
    function handleRedirect(url) {
        router.push(url)
    }
    return (
        <>
        <div className="bg-white dark:bg-[#121313]">
        <footer className="flex bg-white dark:bg-[#121313] w-full bottom-0 max-w-screen-xl mx-auto m-4 justify-center">
        <div className="space-x-4">
        <p className="text-md text-gray-700 dark:text-gray-500 pl-2">
        <span className="py-2 px-2 bg-blue-700 rounded text-center text-white dark:text-white font-bold">v3.0</span>
            <span className="pl-2">Made By <a onClick={() => handleRedirect('https://github.com/Nicat-dcw')} className="font-extrabold text-blue-600">Nicat-dcw</a>.</span></p>
        </div> 
        </footer>
        </div>
        </>
    )
}