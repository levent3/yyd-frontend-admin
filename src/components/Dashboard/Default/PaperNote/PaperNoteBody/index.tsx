import { NoteLabels } from 'Data/Dashboard/DefaultData'
import React from 'react'
import { CardBody } from 'reactstrap'
import { BlogMessage, ImgPath, Inprogress } from 'utils/Constant'
import CustomerDetail from './CustomerDetail'

const PaperNoteBody = () => {
    return (
        <CardBody className='pt-0'>
            <img className='banner-img img-fluid' src={`${ImgPath}/dashboard/papernote.jpg`} alt='multicolor background' />
            <div className='note-content mt-sm-4 mt-2'>
                <p>{BlogMessage}</p>
                <div className='note-labels'>
                    <ul>
                        {NoteLabels.map((item, i) => (
                            <li key={i}>
                                <span className={`badge badge-light-${item.color}`}>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                    <div className='last-label'>
                        <span className='badge badge-light-success'>{Inprogress}</span>
                    </div>
                </div>
                <CustomerDetail />
            </div>
        </CardBody>
    )
}

export default PaperNoteBody