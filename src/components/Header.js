import React from 'react';
import {Link, withRouter} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Link to="/">My Blog</Link>
                <Link to="/login"><i className="fas fa-user"></i></Link>
            </div>
        )
    }
}

export default withRouter(Header);
