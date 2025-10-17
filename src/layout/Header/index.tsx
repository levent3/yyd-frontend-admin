import React, { useContext } from 'react'
import Search from './Search'
import { Row } from 'reactstrap'
import Leftbar from './Leftbar';
import Rightbar from './Rightbar.tsx';
import layoutContext from 'helper/Layout';

const Header = () => {
  const { sideBarToggle } = useContext(layoutContext);

    return (
        <div className={`page-header ${sideBarToggle ?"close_icon":""}`}>
            <Row className='header-wrapper m-0'>
                <Search />
                <Leftbar />
                <Rightbar />
            </Row>
        </div>
    )
}

export default Header