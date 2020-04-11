import React, { Component } from 'react';
import Carousel from './Carousel';
import bowlingHome from '../img/bowling_home.png';


class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row row-content align-items-center">
                        <div className="col">
                            <div className="media">
                                <img className="d-flex mr-3" src={bowlingHome} height="150" width="150" alt="bowling home" />
                                <div className="media-body align-self-center">
                                    <h3>Welcome to BowlderDash Lanes!</h3>
                                    <p className="d-none d-sm-block">
                                        The premier Entertainment Center for Bowling, Arcade Games, and Parties! Come visit us in
                                        Atlanta.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <center><Carousel /></center>
                        <br />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;