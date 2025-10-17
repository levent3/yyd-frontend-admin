import React, { useContext, useEffect } from 'react'
import { Mix_Layout } from 'utils/Constant'
import CommonUL from '../CommonUL'
import CustomizerContext from 'helper/Customizer';
import ConfigDB from 'config/ThemeConfig';
import BgDark from './BgDark';
import DarkSidebar from './DarkSidebar';
import BgLight from './BgLight';

const MixLayoutComponent = () => {
    const { addMixBackgroundLayout, setMixLayout } = useContext(CustomizerContext);
    // const mixLayout = localStorage.getItem('mix_background_layout') || ConfigDB.data.color.mix_background_layout;
    const mixLayout = ConfigDB.data.color.mix_background_layout;

    useEffect(() => {
        if (mixLayout !== 'light-only') {
            setMixLayout(false);
        } else {
            setMixLayout(true);
        }
        ConfigDB.data.color.mix_background_layout = mixLayout;
        document.body.classList.add(mixLayout);
    }, [mixLayout, setMixLayout]);

    const handleCustomizerMix_Background = (value: string) => {
        addMixBackgroundLayout(value);
        if (value === 'light-only') {
            document.body.classList.add('light-only');
            document.body.classList.remove('dark-sidebar');
            document.body.classList.remove('dark-only');
        } else if (value === 'dark-sidebar') {
            document.body.classList.remove('light-only');
            document.body.classList.add('dark-sidebar');
            document.body.classList.remove('dark-only');
        } else if (value === 'dark-only') {
            document.body.classList.remove('light-only');
            document.body.classList.remove('dark-sidebar');
            document.body.classList.add('dark-only');
        }
    };
    return (
        <>
            <h6>{Mix_Layout}</h6>
            <ul className='layout-grid customizer-mix flex-row'>
                <BgLight mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background} />
                <DarkSidebar mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background} />
                <BgDark handleCustomizerMix_Background={handleCustomizerMix_Background} mixLayout={mixLayout} />
            </ul >
        </>
    )
}

export default MixLayoutComponent