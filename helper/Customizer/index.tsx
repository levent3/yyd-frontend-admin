    import { Dispatch, SetStateAction, createContext } from "react";

type GlobalType = {
    layout: string | undefined,
    sidebarIconType: string,
    layoutName: string,
    mixLayout: boolean,
    toggleIcon: boolean,
    mix_background_layout: string,
    setLayout: Dispatch<SetStateAction<string>>,
    setMixLayout: Dispatch<SetStateAction<boolean>>,
    setToggleIcon: Dispatch<SetStateAction<boolean>>,
    setSidebarResponsive: Dispatch<SetStateAction<boolean>>,
    setLayoutName: Dispatch<SetStateAction<string>>,
    sidebarResponsive: boolean,
    IsOpen: boolean,
    toggleSidebarResponsive: (item: boolean) => void,
    setIsClose: (item: boolean) => void,
    addLayout: (item: string) => void,
    addSidebarLayouts: (item: string) => void,
    toggleSidebar: (item: boolean) => void,
    addSidebarIconType: (item: string) => void,
    addColor: (data: string, item: string) => void,
    addMixBackgroundLayout: (item: string) => void
};

const CustomizerContext = createContext<GlobalType>({
    layout: '',
    sidebarIconType: '',
    layoutName: '',
    mixLayout: false,
    toggleIcon: false,
    mix_background_layout: '',
    sidebarResponsive: false,
    IsOpen: false,
    setIsClose: () => { },
    setLayoutName: () => { },
    toggleSidebar: () => { },
    addLayout: () => { },
    setLayout: () => { },
    setMixLayout: () => { },
    toggleSidebarResponsive: () => { },
    setToggleIcon: () => { },
    addSidebarLayouts: () => { },
    addSidebarIconType: () => { },
    setSidebarResponsive: () => { },
    addColor: () => { },
    addMixBackgroundLayout: () => { }
});

export default CustomizerContext; 