import { ProfileLikeData } from 'Data/Bonus-Ui/TourData'
import React from 'react'

const ProfileLike = () => {
    return (
        <div className="like-comment mt-4 step7">
            <ul className="list-inline">
                {
                    ProfileLikeData && ProfileLikeData.map((item, index) => (
                        <li className={item.class} key={index}>
                            <label className="m-0">
                                <a href="#">
                                    <i className={item.icon} />
                                </a>{item.text}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProfileLike