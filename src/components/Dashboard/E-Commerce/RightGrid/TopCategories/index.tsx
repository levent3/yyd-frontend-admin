import { TopCategoriesData } from 'Data/Dashboard/E-commerceData'
import Link from 'next/link'
import React from 'react'
import { ImgPath } from 'utils/Constant'

const TopCategories = () => {
    return (
        <ul className='categories-list d-flex'>
            {TopCategoriesData.map((item, i) => (
                <li key={i} className='d-flex'>
                    <div className='bg-light'>
                        <img className='m-0' src={`${ImgPath}/${item.image}`} alt='vector burger' />
                    </div>
                    <div>
                        <h6 className='mb-0'>
                            <Link href={`/product`}>{item.title}</Link>
                        </h6>
                        <span className='f-light f-12 f-w-500'>({item.subTitle})</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TopCategories