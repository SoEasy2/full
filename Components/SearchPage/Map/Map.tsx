import React, {FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import * as L from 'leaflet'
import {OpenStreetMapProvider, MapBoxProvider,  GeoSearchControl} from 'leaflet-geosearch'
import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { MapActions } from '../../../redux/map/actions/actions';
import { ICord } from '../../../redux/map/types/types';
import classes from "./Map.module.scss"
import { IRootReducer } from '../../../redux/rootReducer/state';
import 'leaflet.markercluster';
import { useState } from 'react';
import { IDataMap } from '../../../redux/mapDate/types/types';
import { MapDataActions } from '../../../redux/mapDate/actions/actions';
import useGeoLocation from '../../../hooks/useGeoLocation';

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>

const Map:React.FC<ILoginContainerProps> = ({getApp, setMap}) => {
    const mapData = useSelector((state:IRootReducer) => state.mapData)
    const location = useGeoLocation()
    const appartaments = useSelector((state:IRootReducer) => state.map)
    const provider = new OpenStreetMapProvider()
    const searchControl = GeoSearchControl({
        provider: provider, // required
        autoComplete:true
    })
    const onChangeHandler = (event) =>{
        event.preventDefault()
        provider.search({query:event.target.value})
    }
    useEffect(()=>{
        clusterLayer.current?.remove();
        if(!map.current){
            return
        }
        if (clusterLayer && clusterLayer.current){
            map.current.removeLayer(clusterLayer.current)
            clusterLayer.current?.remove();
        }
        clusterLayer.current = L.markerClusterGroup({animate:true,})
        appartaments.forEach((item)=>L.marker(L.latLng(item.location.lat, item.location.lon)).bindTooltip(`${item.listing.name}`).addTo(clusterLayer.current!));
        map.current.addLayer(clusterLayer.current)

    },[appartaments])

    const map = useRef<L.Map>();
    const clusterLayer = useRef<L.MarkerClusterGroup>()
    useEffect(()=>{
        const mapNode = ReactDOM.findDOMNode(document.getElementById('mapId')) as HTMLDivElement | null
        if (!mapNode || map.current){
            return;
        }

        map.current = L.map(mapNode,{zoomAnimation:true, markerZoomAnimation:true}).setZoom(mapData.zoom).setView(L.latLng(mapData.lat, mapData.lng))
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:20, minZoom:12, minNativeZoom:12}).addTo(map.current)
        map.current.on('moveend', (event)=>{
            const mapBoundNorthEast = event.target.getBounds().getNorthEast();
            const mapDistance = mapBoundNorthEast.distanceTo(event.target.getCenter())
            const obj = {...event.target.getCenter(), mapDistance}
            getApp(obj)
            const mapDate = {lat:event.target.getCenter().lat,
                lng:event.target.getCenter().lng,
                zoom:event.target.getZoom(),
                mapDistance}
            setMap(mapDate)
        })

    },[])
    const showMyLocation = () =>{
        console.log('click')
        if(location.loaded && !location.error){
            map.current!.flyTo([+location.coordinates.lat, +location.coordinates.lng], 13, {animate:true})
            setMap({lat: +location.coordinates.lat, lng: +location.coordinates.lng, zoom: 13})
            L.marker(L.latLng(+location.coordinates.lat, +location.coordinates.lng)).bindTooltip(`Your location`).addTo(map.current!)
        } else{
            alert('Geolocation not supported')
        }
    }
    return (<>
        <div className={classes.map} id={'mapId'}>
            <button className={classes.geo} onClick={()=>{showMyLocation()}}>My Location</button>
        </div>
        </>
    );
};
const mapDispatchToProps = (dispatch:Dispatch) => ({
    getApp:(payload:ICord) => dispatch(MapActions.setAppartament(payload)),
    setMap:(payload:IDataMap) => dispatch(MapDataActions.setDataMap(payload))
})

export default connect(null, mapDispatchToProps)(Map);