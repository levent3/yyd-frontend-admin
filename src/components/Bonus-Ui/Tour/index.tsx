import React, { Fragment, useEffect } from 'react'
import WilliamProfile from './WillamProfile'
import Profile2 from './Profile2'
import ProfileDetail from './ProfileDetail'
import DetailImg from './DetailImg'
import { useTour } from '@reactour/tour';
import Profile from './Profile'

const TourMain = () => {
    const { setIsOpen,isOpen } = useTour();
    useEffect(() => {
        var timer = setTimeout(() => {
            setIsOpen(true);            
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <Fragment>
            <Profile />
            <WilliamProfile />
            <Profile2 />
            <ProfileDetail />
            <DetailImg />
        </Fragment>
    )
}

export default TourMain