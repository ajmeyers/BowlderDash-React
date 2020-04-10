import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import logo from '../img/logo.png';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="headerJumbotron">
                        <div className="container">
                            <div className="row">
                                <div class="col-4 col-sm-3 col-md-2 align-self-center">
                                        <img src={logo} alt="Logo" width="250px" height="250px"/>
                                </div>
                                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                </div>
                                <div className="col-6">
                                    <h1 className="display-4"><b>BowlderDash Lanes</b></h1>
                                    <p><b>Entertainment for all ages!</b></p>
                                </div>
                                <div className="col align-self-right">
                                    <p><b>Created by Andrew Meyers</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;