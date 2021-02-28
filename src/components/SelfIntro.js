import React from 'react';
import {Link, withRouter} from 'react-router-dom';
class SelfIntro extends React.Component{
    render(){
        return (
            <div className="container self-intro">
                <div className="row article">
                    <div className="col-12 d-flex justify-content-center pt-4 pb-5">
                        <div
                            className="img"
                        >
                            <img className="img-fluid w-100" src="/images/pro.jpg" />
                            <div className="filter">
                                <Link to = "/"><i class="fas fa-pen" title="修改圖片"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 text-center mx-auto">
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae excepturi harum corrupti fugit recusandae non nisi officiis ducimus, sapiente corporis voluptas est pariatur maxime quas ipsam, laborum perspiciatis amet!</p>
                    </div>
                </div>
                <div className="row porfortlio">
                    <div className="col-8 mx-auto">
                        <div className="row">
                            <div
                                className="col-5 d-flex justify-content-around text-center mx-auto porfortlio-card"
                                style={{
                                    background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/images/work1.png') no-repeat 0% 20%/ cover`
                                }}
                            >
                                <h2>Zony官網</h2>
                                <div className="filter">
                                    <Link to = "/"> <i class='fas fa-pen' title="修改圖片"></i></Link>
                                    <Link to = "/"><i class='fas fa-arrow-right' title="作品詳細"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(SelfIntro)
