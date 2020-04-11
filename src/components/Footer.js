import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer container">
                    <div className="row">
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://github.com/ajmeyers">Home</a></li>
                                <li><a href="https://github.com/ajmeyers">Blog</a></li>
                                <li><a href="https://github.com/ajmeyers">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-5 text-center">
                            <h5>Social Media</h5>

                            <a href="https://www.facebook.com/">Facebook</a><br />
                            <a href="https://www.instagram.com/">Instagram</a><br />
                            <a href="https://www.twitter.com/">Twitter</a><br />
                            <a href="https://www.youtube.com/">Youtube</a><br />
                        </div>
                        <div className="col-sm-2 text-center">
                            <a role="button" className="btn btn-link" href="tel:+1-555-555-5555"><i className="fa fa-phone"></i>
                        1-555-555-5555</a><br />
                            <a role="button" className="btn btn-link" href="mailto:contact@bowlderdash.com"><i
                                className="fa fa-envelope-o"></i>contact@bowlderdash.com</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;