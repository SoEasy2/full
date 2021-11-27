import { useEffect } from "react";
import { useState } from "react";
import { ILocation } from "./types";


const useGeoLocation = () =>{
    const [location, setLocation] = useState<ILocation>({
        loaded:false,
        coordinates:{ lat:'', lng:''},
        error:null
    })

    const onSucces = (location) => {
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude
            },
            error:null
        })
    }

    const onError = (error) =>{
        setLocation({
            loaded:true,
            coordinates:{lat:'', lng:''},
            error
        })
    }

    useEffect(()=>{
        if(!('geolocation' in navigator)){
            onError({
                code:0,
                message:'Geolocation not supported'
            })
        }
        navigator.geolocation.getCurrentPosition(onSucces, onError)
    }, [])
    return location
}
export default useGeoLocation;