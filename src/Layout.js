import React,{Fragment} from 'react';
import Header from './components/Header'
import {Container, Row, Col } from 'react-bootstrap'
class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
