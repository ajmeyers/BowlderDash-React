import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import logo from '../img/logo.png';
import bowlingNavbar from '../img/bowling_navbar.png';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="headerJumbotron">
                        <div className="container">
                            <div className="row">
                                <div class="col-4 col-sm-3 col-md-2 align-self-center">
                                    <img src={logo} alt="Logo" width="250px" height="250px" />
                                </div>
                                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                </div>
                                <div className="col-6">
                                    <h1 className="title display-4"><b>BowlderDash Lanes</b></h1>
                                    <center><p><b>Entertainment for all ages!</b></p></center>
                                </div>
                            </div>
                        </div>
                        <div>
                            <nav id="homeNavBar" class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                                <a class="navbar-brand" href="https://github.com/ajmeyers"><img src={bowlingNavbar} alt="bowling navbar" height="64" width="64" /></a>
                                <a class="navbar-brand" href="https://github.com/ajmeyers"><img src={bowlingNavbar} alt="bowling navbar" height="64" width="64" /></a>
                                <a class="navbar-brand" href="https://github.com/ajmeyers"><img src={bowlingNavbar} alt="bowling navbar" height="64" width="64" /></a>
                                <div class="container">
                                    <div id="bowlderDashNavBar">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://github.com/ajmeyers">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Blog</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Book Event</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Rerserve a Lane</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Daily Newsletter</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Locations</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">BowlderDash Rewards!</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="https://www.bowlero.com/">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;