import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter()
    function handleRedirect(url) {
        router.push(url)
    }
    return (
        <>
        <footer className="flex w-full bottom-0 max-w-screen-xl mx-auto bg-white shadow m-4 dark:bg-black justify-center w-full h-32">
        <div className="space-x-4">
        <p className="text-md text-gray-700 dark:text-gray-500 pl-2">
        <span className="py-2 px-2 bg-blue-700 rounded text-center text-white dark:text-gray-500">v3.0</span>
            <span className="pl-2">Made By <a onClick={() => handleRedirect('https://github.com/Nicat-dcw')} className="font-extrabold text-blue-600">Nicat-dcw</a>.</span></p>
        </div> 
        </footer>
        </>
    )
}