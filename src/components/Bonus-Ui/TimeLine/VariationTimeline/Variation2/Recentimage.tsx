import Image from 'next/image'
import React from 'react'
import { ImgPath } from 'utils/Constant'

const Recentimage = () => {
    const Imgs = ['/dashboard-2/product/1.png', '/dashboard-2/product/2.png', '/dashboard-2/product/1.png']
    return (
        <div className="recent-images">
            <ul>
                {
                    Imgs && Imgs.map((item, index) => (
                        <li key={index}>
                            <div className="recent-img-wrap">
                                <Image src={`${ImgPath}${item}`} alt="chair" width={32} height={32} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Recentimage