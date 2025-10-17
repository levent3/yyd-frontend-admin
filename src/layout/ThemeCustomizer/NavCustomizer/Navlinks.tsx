import { navLinkList } from 'Data/CustomizerData'
import React from 'react'

const Navlinks = () => {
    return (
        <>
            {
                navLinkList && navLinkList.map((item, index) => (
                    <a key={index} className='nav-link' href={`${item.path}`} target='_blank' rel='noopener noreferrer'>
                        <div>
                            <i className={`${item.icon}`}></i>
                        </div>
                        <span>{item.name}</span>
                    </a>
                ))
            }
        </>
    )
}

export default Navlinks