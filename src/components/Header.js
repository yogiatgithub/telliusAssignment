import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header' >
            <div className='title'></div>
            <Link  to="/" className="title">Notes</Link>
            <Link to="/checklist" className="title">Checklist</Link>
            <Link to="/reminder" className="title">Reminder</Link>
        </div>
    );
}

export default Header;
