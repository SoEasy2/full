import React, { useEffect, useState } from 'react';
import Advantages from './Advantages/Advantages';
import Buy from './Buy/Buy';
import Info from './Info/Info';
import TopImages from './TopImages/TopImages';
import Header from '../Header/Header'
import classes from './SectionMain.module.scss'
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import Config from '../../../Config';
import dynamic from 'next/dynamic';
import { Dispatch } from 'redux';
import { AuthActions } from '../../../redux/user/actions';
import { connect, useSelector } from 'react-redux';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { useRef } from 'react';
type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const SectionMain:React.FC<ILoginContainerProps> = ({checkUser}) => {
    const Map:any = dynamic(()=>import("./Map/Map") as any, {ssr:false})
    const user = useSelector((state:IRootReducer) => state.user)

    const router = useRouter()
    const [appartament, setAppartament] = useState<any>()
    const {id} = router.query;
    const  getApp = async () =>{
        const {data} = await axios.get(`${Config.BASE_URL}/api/map/${id}`)
        setAppartament(data)
    }
    useEffect(()=>{
            getApp(), checkUser()
    },[])
    return (
        <>
            <Header/>

            <section className={classes.sectionMain}>
                <div className={classes.container}>
                    <div className={classes.mainWrapper}>
                        {appartament ? <TopImages appartament={appartament}/> : null}
                        <div className={classes.mainInfo}>
                            <div className={classes.sectionMainLeft}>
                                {appartament ? <Info appartament={appartament}/> : null}
                                <Advantages/>
                                <h6 className={classes.titleLocation}>Location</h6>
                                <div className={classes.map}>
                                    {appartament ? <Map appartament={appartament}/> : null}
                                </div>
                            </div>
                            <div className={classes.sectionMainRight}>
                                {appartament && user ?<Buy appartament={appartament}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
    checkUser:()=>dispatch(AuthActions.checkUser())
})
export default connect(null,mapDispatchToProps)(SectionMain);


