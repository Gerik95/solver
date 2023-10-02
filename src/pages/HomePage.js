import React from 'react';
import FirstScreen from '../components/FirstScreen';
import InfoSection from '../components/InfoSection';
import {images} from '../constants/images';
import EngineInfo from '../components/info-text/EngineInfo';
import SuspentionInfo from '../components/info-text/SuspentionInfo';
import DieselInfo from '../components/info-text/DieselInfo';
import AlternatorInfo from '../components/info-text/AlternatorInfo';
import TurboInfo from '../components/info-text/TurboInfo';
import SteringInfo from '../components/info-text/SteringInfo';
import CatalizatorInfo from '../components/info-text/CatalizatorInfo';
import ConditionerInfo from '../components/info-text/ConditionerInfo';
import OzonInfo from '../components/info-text/OzonInfo';
import {Helmet} from 'react-helmet';
import NavMobile from "../components/mobile/NavMobile";
import { useSelector } from "react-redux";
import {isMobile} from "react-device-detect";

const HomePage = () => {
    const { navActive } = useSelector(state => state.navigation);
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);
    const ref5 = React.useRef(null);
    const ref6 = React.useRef(null);
    const ref7 = React.useRef(null);
    const ref8 = React.useRef(null);
    const ref9 = React.useRef(null);

    const reference = {
        ref1: ref1,
        ref2: ref2,
        ref3: ref3,
        ref4: ref4,
        ref5: ref5,
        ref6: ref6,
        ref7: ref7,
        ref8: ref8,
        ref9: ref9,
    }

    return (
        <>
            <Helmet>
                <title>СТО "Solver" - Головна</title>
                <meta name="description"
                      content="Ремонт двигунів, ремонт ходової частини, ремонт дизельної паливної апаратури, ремонт навісних агрегатів, ремонт турбокомпресорів,
                      ремонт рульових рейок, сажеві фільтри та каталізатори, заправка конциціонеру, озонування, регламентне обслуговування вашого автомобіля"/>
            </Helmet>
            {isMobile && navActive && <NavMobile/>}
            <FirstScreen itemScrollToggle componentsRef={reference}/>
            {/*<InfoSection*/}
            {/*    title="Ремонт ДВЗ"*/}
            {/*    description="Здійснюємо діагностику та ремонт дизельних та бензинових двигунів."*/}
            {/*    image={images.engineImg}*/}
            {/*    bgImage={`url(${images.leftLogoBg})`}*/}
            {/*    componentRef={ref1}*/}
            {/*>*/}
            {/*    <EngineInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Ходова частина"*/}
            {/*    image={images.suspentionImg}*/}
            {/*    bgImage={`url(${images.rightLogoBg})`}*/}
            {/*    reverse*/}
            {/*    componentRef={ref2}*/}
            {/*>*/}
            {/*    <SuspentionInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Дизельна паливна апаратура"*/}
            {/*    image={images.dieselImg}*/}
            {/*    bgImage={`url(${images.leftLogoBg})`}*/}
            {/*    componentRef={ref3}*/}
            {/*>*/}
            {/*    <DieselInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Ремонт навісних агрегатів"*/}
            {/*    image={images.alternatorImg}*/}
            {/*    bgImage={`url(${images.rightLogoBg})`}*/}
            {/*    reverse*/}
            {/*    componentRef={ref4}*/}
            {/*>*/}
            {/*    <AlternatorInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Ремонт турбокомпресорів"*/}
            {/*    image={images.turboImg}*/}
            {/*    bgImage={`url(${images.leftLogoBg})`}*/}
            {/*    componentRef={ref5}*/}
            {/*>*/}
            {/*    <TurboInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Ремонт кермових рейок"*/}
            {/*    image={images.steringImg}*/}
            {/*    bgImage={`url(${images.rightLogoBg})`}*/}
            {/*    reverse*/}
            {/*    componentRef={ref6}*/}
            {/*>*/}
            {/*    <SteringInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Сажові фільтри та каталізатори"*/}
            {/*    image={images.catalizatorImg}*/}
            {/*    bgImage={`url(${images.leftLogoBg})`}*/}
            {/*    componentRef={ref7}*/}
            {/*>*/}
            {/*    <CatalizatorInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Системи кондиціонування"*/}
            {/*    image={images.conditionerImg}*/}
            {/*    bgImage={`url(${images.rightLogoBg})`}*/}
            {/*    reverse*/}
            {/*    componentRef={ref8}*/}
            {/*>*/}
            {/*    <ConditionerInfo/>*/}
            {/*</InfoSection>*/}
            {/*<InfoSection*/}
            {/*    title="Озонування"*/}
            {/*    image={images.ozonImg}*/}
            {/*    bgImage={`url(${images.leftLogoBg})`}*/}
            {/*    componentRef={ref9}*/}
            {/*>*/}
            {/*    <OzonInfo/>*/}
            {/*</InfoSection>*/}
        </>
    );
};

export default HomePage;