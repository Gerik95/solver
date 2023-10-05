import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import {BrowserRouter, Outlet} from 'react-router-dom';
import InfoSection from './InfoSection';
import {images} from '../constants/images';
import EngineInfo from './info-text/EngineInfo';
import SuspentionInfo from './info-text/SuspentionInfo';
import dieselImg from '../assets/images/dieselImg.png';
import alternatorImg from '../assets/images/alternatorImg.png';
import turboImg from '../assets/images/turboImg.png';
import steringImg from '../assets/images/steringImg.png';
import catalizatorImg from '../assets/images/catalizatorImg.png';
import conditionerImg from '../assets/images/conditionerImg.png';
import ozonImg from '../assets/images/ozonImg.png';
import DieselInfo from './info-text/DieselInfo';
import AlternatorInfo from './info-text/AlternatorInfo';
import TurboInfo from './info-text/TurboInfo';
import SteringInfo from './info-text/SteringInfo';
import CatalizatorInfo from './info-text/CatalizatorInfo';
import ConditionerInfo from './info-text/ConditionerInfo';
import OzonInfo from './info-text/OzonInfo';
import FirstScreen from './FirstScreen';
import ScrollButtonUp from './ScrollButtonUp';

const Layout = () => {

    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrollTop(scrollTop);
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);


    return (
        <div className="main">
            <ScrollButtonUp/>
            <Navigation scrollTop={scrollTop}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
