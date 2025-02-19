import React, { useEffect, useState } from 'react'

// useHook
// window kaa child document

function useInternet() {
    // navigator is a buildin object( online toh true , offline toh false
 
    const[online,setOnline] = useState(navigator.onLine);
    
    const setOnlineStatus=()=>{
        setOnline(true);
    }
    
    const setOfflineStatus=()=>{
        setOnline(false);
    }


    useEffect(()=>{

        window.addEventListener("online",setOnlineStatus)
        window.addEventListener("offline",setOfflineStatus)

        return ()=>{
            window.removeEventListener('online',setOnlineStatus)
            window.removeEventListener('offline',setOfflineStatus)

        }


    },[online])

  return online;
}

export default useInternet