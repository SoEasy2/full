import axios from "axios";
import { ContentTypes } from "../../../user/sagas/api";
import { mapGetApp } from "../../constants/map";

export function getMap(data){
    return axios({
        url:mapGetApp,
        method:'POST',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
        data
    })
}