import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import ScrollButtonUp from './ScrollButtonUp';
import {isMobile} from 'react-device-detect';
import NavMobile from './mobile/NavMobile';
import {useSelector} from 'react-redux';

const Layout = () => {
  const { navActive } = useSelector(state => state.navigation);
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
          {isMobile && navActive && <NavMobile/>}
            <ScrollButtonUp/>
            <Navigation scrollTop={scrollTop}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
