import React from 'react';
import Autocomplete from 'react-google-autocomplete'
import Config from '../../../../Config';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import classes from './InputLocation.module.scss'
import { connect, useSelector } from 'react-redux';
import { IDataMap } from '../../../../redux/mapDate/types/types';
import { MapDataActions } from '../../../../redux/mapDate/actions/actions';
import { Dispatch } from 'redux';
import { IRootReducer } from '../../../../redux/rootReducer/state';


type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>

const InputLocation:React.FC<ILoginContainerProps> = ({setMap}) => {
    const mapData = useSelector((state:IRootReducer) => state.mapData)
    return (
        <label htmlFor={classes.input} className={classes.label}>
            <div className={classes.div}>Location</div>
            <Autocomplete apiKey={Config.GOOGLE_API_KEY}
                          className={classes.input}
                          placeholder={'Location'}
                          onPlaceSelected = {(place,lat,lng)=>{geocodeByAddress(place.formatted_address).then(results => getLatLng(results[0]))
                              .then(({ lat, lng }) =>
                                  setMap({...mapData, lat, lng})
                              );}}/>
        </label>
    );
};
const mapDispatchToProps = (dispatch:Dispatch) => ({
    setMap:(payload:IDataMap) => dispatch(MapDataActions.setDataMap(payload))
})
export default connect(null, mapDispatchToProps)(InputLocation);