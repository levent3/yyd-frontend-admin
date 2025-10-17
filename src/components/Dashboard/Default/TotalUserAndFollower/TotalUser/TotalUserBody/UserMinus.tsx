import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'

const UserMinus = () => {
    return (
        <li>
            <div className='user-icon success'>
                <div className='user-box'>
                    <FeatherIconCom iconName='UserMinus' className='font-success' />
                </div>
            </div>
            <div>
                <h5 className='mb-1'>178,098</h5>
                <span className='font-danger d-flex align-items-center'>
                    <i className='icon-arrow-down icon-rotate me-1' />
                    <span className='f-w-500'>-08.89</span>
                </span>
            </div>
        </li>
    )
}

export default UserMinus