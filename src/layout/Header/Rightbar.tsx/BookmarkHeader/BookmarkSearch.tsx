import layoutContext from 'helper/Layout';
import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { Back, Href } from 'utils/Constant'

const BookmarkSearch = () => {
  const { bookMarkClass,setBookMarkClass } = useContext(layoutContext);

    return (
        <div className="back">
            <ul>
                <li>
                    <div className="bookmark-dropdown flip-back-content">
                        <Input type="text" placeholder="search..." />
                    </div>
                </li>
                <li>
                    <a  onClick={()=>setBookMarkClass(!bookMarkClass)} className="f-w-700 d-block flip-back" id="flip-back" href={Href}>{Back}</a>
                </li>
            </ul>
        </div>
    )
}

export default BookmarkSearch