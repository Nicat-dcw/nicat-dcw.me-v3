import { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import store from '../../store/config.js'
import PullToRefresh from 'react-simple-pull-to-refresh';
import Image from 'next/image'

export default function Hero() {
    const [user, setUser] = useState({})
    const handleRefresh = () => {
       window.location.reload(false);     
    }
    useEffect(() => {

        const websocket = new WebSocket("wss://api.lanyard.rest/socket")
        
        websocket.onmessage = data => {
            var message = JSON.parse(data.data)
            if (message.op) { 
                if (message.op == 1) {
                    setInterval(() => {
                        websocket.send(JSON.stringify({ op: 3 }))
                    }, message.d.heartbeat_interval)
                    websocket.send(JSON.stringify({ op: 2,  d: {subscribe_to_ids: [store.user.id]} }))
                }
            }
            if (message.t && (message.t == "INIT_STATE" || message.t == "PRESENCE_UPDATE")) {
                console.log(message.d[store.user.id])
                setTimeout(() => { setUser((message.t == "PRESENCE_UPDATE") ? message.d : message.d[store.user.id])},2000)
                console.log(JSON.stringify(user))
            }
        }

    }, [user])
    const ProfileCard = () => {
        return (
            <>
                {/*{isScrollingUp && <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>}*/}
   <PullToRefresh onRefresh={handleRefresh} canFetchMore={true}>         
    <div className={"!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-navy-800 dark:text-white dark:shadow-none items-center w-full  p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-72 md:w-96 justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${store.banner ? store.banner : "https://www.shutterstock.com/image-vector/stock-vector-illustration-technology-futuristic-260nw-1496394446.jpg"})` }}
      >
          <div className="absolute -bottom-12 -ml-44 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-navy-700 bg-blue-800 dark:!border-navy-700">
          <img layout="fill" className="h-full w-full rounded-full" src={`https://cdn.discordapp.com/avatars/${store.user.id}/${user.discord_user ? user.discord_user.avatar : ""}.png?size=4096`} alt="" />
        </div>
        <div className="absolute -bottom-10 flex -ml-32 items-center justify-center">{(user.discord_status === "idle") ? (<span className="absolute ml-2 w-4 h-4 rounded-full bg-amber-600 animate-ping opacity-75"><span className="relative bg-amber-500 "></span></span>) : (<span className="ml-2 w-4 h-4 rounded-full bg-gray-700 animate-ping"></span>)}</div>
          
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl -ml-40 font-bold text-black dark:text-black">
            {(user.discord_user) ? user.discord_user.username : (<Skeleton height={2} />)}     
        </h4> {/* {(user.discord_user.discord_status === "idle") ? (<div className="ml-2 w-32 h-12 rounded-full bg-amber-500 animate-ping"></div>) : (<div className="ml-2 w-32 h-12 rounded-full bg-gray-700 animate-ping"></div>)} */}
        <p className="text-base font-normal text-black dark:text-gray-600">{(store.role) ? store.role : (<Skeleton height={4} duration={4000}/>)}</p>
      </div>

      {/* Activity Section*/}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          {(user.listening_to_spotify === false) ? (
        <div className="linear mt-4 flex justify-center items-center justify-center rounded-xl bg-cyan-500 px-2 py-1 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        <button
          onClick={handleRefresh}
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8 pb-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        </button>
            
        </div>
                ) : (
<>
</>
                )}
       <ActivityCard/>
      </div>
  </div>
</PullToRefresh>             
            </>
        )
    }
    const General = () => {
  return (
   <>
   
   </>
  );
};
    const ActivityCard = () => {
  return (
      <>
      {(user.listening_to_spotify == true) ? (
          
    <div className={"spotify-card !z-5 relative flex flex-col rounded-[20px] bg-white justify-center shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full"}>
          {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={user.spotify.album_art_url} alt="Album Image" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-black dark:text-black">
                {user.spotify.song}
            </p>
            <p className="mt-2 text-sm text-gray-600">
                {user.spotify.artist}
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-[#121313]"
                href={`htts://open.spotify.com/track/${user.spotify.track_id}`}
              >
                  {user.spotify.album}
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          
        </div>
      </div>
     </div>
          ) : (
          <>
          
          </>
          )}
      </>
  );
};

   return (
       <>
       <div className="flex justify-center top-0 ">
       <div className="rounded">
       <ProfileCard/>
       </div>
       </div>
       </>
   )
       }