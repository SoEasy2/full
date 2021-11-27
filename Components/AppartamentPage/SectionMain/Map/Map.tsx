import React, { useEffect } from 'react';
import * as L from 'leaflet'
import { useRef } from 'react';
import ReactDOM from 'react-dom'
import classes from './Map.module.scss'
interface IProps{
    appartament:any
}
const Map:React.FC<IProps> = ({appartament}) => {
    const map = useRef<L.Map>();
    useEffect(()=>{
        const mapNode = ReactDOM.findDOMNode(document.getElementById('mapId')) as HTMLDivElement | null
        if (!mapNode || map.current){
            return;
        }
        map.current = L.map(mapNode).setZoom(11).setView(L.latLng(appartament.location.lat, appartament.location.lon))
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:14, minZoom:14, maxNativeZoom:14, minNativeZoom:14}).addTo(map.current)
        L.marker(L.latLng(appartament.location.lat, appartament.location.lon), {
            icon: L.icon({
                iconUrl: 'https://png.pngtree.com/png-vector/20190425/ourlarge/pngtree-vector-home-icon-png-image_991177.jpg',
                iconSize: [40, 40],
                iconAnchor: [20, 20],
            }),
        }).addTo(map.current);
    },[])
    return (
        <div className={classes.map} id={'mapId'}>
        </div>
    );
};

export default Map;