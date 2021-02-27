import React from 'react';
import {Link, withRouter} from 'react-router-dom';
class SelfIntro extends React.Component{
    state ={
        filtercontnets:'filter'
    };
    handleMouseEnter = ()=>{
        this.setState({
            filtercontnets: 'filter d-block'
        })
     }
     handleMouseLeave = ()=>{
        this.setState({
            filtercontnets: 'filter'
        })
     }
    render(){
        return (
            <div className="container self-intro">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center pt-4 pb-5">
                        <div
                            className="img"
                            onMouseOver={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        >
                            <img className="img-fluid w-100"  src="/images/pro.jpg" />
                            <div className={this.state.filtercontnets}>
                                <Link to = "/"><i class="fas fa-pen"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 text-center offset-2">
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(SelfIntro)
