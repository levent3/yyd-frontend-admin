import { CardBody } from 'reactstrap'
import UserPlus from './UserPlus';
import UserMinus from './UserMinus';

const TotalUserBody = () => {
    return (
        <CardBody className='pt-0'>
            <ul className='user-list'>
                <UserPlus />
                <UserMinus />
            </ul>
        </CardBody>
    )
}

export default TotalUserBody