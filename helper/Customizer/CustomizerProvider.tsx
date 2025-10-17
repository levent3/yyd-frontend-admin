import React, { ReactNode, useEffect, useState } from 'react';
import CustomizerContext from './index'
import ConfigDB from 'config/ThemeConfig';
import { classes } from 'Data/LayoutData';
import { useRouter } from 'next/router';
interface CustomizerContextType {
    children: ReactNode
}
const CustomizerProvider = ({ children }: CustomizerContextType) => {
    const router = useRouter()
    const [layout, setLayout] = useState('compact-wrapper');
    const [layoutName, setLayoutName] = useState('');
    const [sidebarIconType, setSidebarIconType] = useState('');
    const [mix_background_layout, setMixBackgroundLayout] = useState('');
    const [toggleIcon, setToggleIcon] = useState(false);
    const [mixLayout, setMixLayout] = useState(false);
    const [sidebarResponsive, setSidebarResponsive] = useState(false);
    const [IsOpen, setIsClose] = useState(false);

    useEffect(() => {
        const name = router.asPath.split('=').pop();
        if (name !== '' && !name?.includes('/')) {
            name?.includes('#') ? setLayoutName(name?.replace(/#/, '')) : setLayoutName(name ? name : '');
        }
    }, [])

    useEffect(() => {
        classes.map((item, i) => {
            if (item.name === layoutName) {
                ConfigDB.data.settings.layout_class = item.class;
                setLayout(item.class)
                router.push(router.asPath.split('?').shift() + `?layout=${layoutName}`);
            }
        });
    }, [layoutName]);

    //Set LTR,RTL,BOX Tyoe
    const addLayout = (layout: string) => {
        ConfigDB.data.settings.layout_type = layout;
        setLayout(layout);
    };

    //Toggle sidebar
    const toggleSidebar = (toggle: boolean) => {
        setToggleIcon(toggle);
    };

    //Multiple Sidebar Layouts
    const addSidebarLayouts = (sidebar_layout: string) => {
        ConfigDB.data.settings.layout_class = sidebar_layout;
        setLayout(sidebar_layout);
    };

    //SideBar Icon Sidebar
    const addSidebarIconType = (sidebar_Icon_Type: string) => {
        ConfigDB.data.settings.sidebar.iconType = sidebar_Icon_Type;
        setSidebarIconType(sidebar_Icon_Type);
    };

    //Add Mix layouts like (dark , light ,...)
    const addMixBackgroundLayout = (mix_background_layout: string) => {
        ConfigDB.data.color.mix_background_layout = mix_background_layout;
        if (mix_background_layout !== 'light-only') {
            setMixLayout(false);
        } else {
            setMixLayout(true);
        }
        setMixBackgroundLayout(mix_background_layout);
    };

    // Add Colors
    const addColor = (default_color: string, secondary_color: string) => {
        ConfigDB.data.color.primary_color = default_color;
        ConfigDB.data.color.secondary_color = secondary_color;
    };

    const toggleSidebarResponsive = (toggle: boolean) => {
        setSidebarResponsive(toggle);
    };
    return (
        <CustomizerContext.Provider value={{
            layout,
            setLayout,
            IsOpen,
            mixLayout,
            layoutName,
            toggleIcon,
            setToggleIcon,
            mix_background_layout,
            addLayout,
            toggleSidebar,
            setLayoutName,
            sidebarResponsive,
            sidebarIconType,
            setMixLayout,
            setIsClose,
            addSidebarLayouts,
            setSidebarResponsive,
            addSidebarIconType,
            addMixBackgroundLayout,
            toggleSidebarResponsive,
            addColor
        }}>
            {children}
        </CustomizerContext.Provider >

    )
}

export { CustomizerProvider }