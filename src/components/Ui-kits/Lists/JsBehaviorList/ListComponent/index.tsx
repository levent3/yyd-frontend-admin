import React from 'react'
import { ContactUs, Home, Profile, Settings } from 'utils/Constant'

type propsType = {
    activeList: string,
    setActiveList: (data: string) => void;
}

const ListComponent = ({ activeList, setActiveList }: propsType) => {
    return (
        <ul className="list-group">
            <li className={`list-group-item list-group-item-action bg-primary ${activeList === '1' && 'active'}`} onClick={() => { setActiveList('1') }}>{Home}</li>
            <li className={`list-group-item list-group-item-action list-hover-primary ${activeList === '2' && 'active'}`} onClick={() => { setActiveList('2') }}>{Profile}</li>
            <li className={`list-group-item list-group-item-action list-hover-primary ${activeList === '3' && 'active'}`} onClick={() => { setActiveList('3') }}>{ContactUs}</li>
            <li className={`list-group-item list-group-item-action list-hover-primary ${activeList === '4' && 'active'}`} onClick={() => { setActiveList('4') }}>{Settings}</li>
        </ul>

    )
}

export default ListComponent