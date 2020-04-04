import React, { Component } from 'react';

//Assets
import Monogram from '../static/img/monogram.png';
import Profile from '../static/img/profile.jpg';
import Headshot from '../static/img/headshot.jpg';
import LinkedIn from '../static/img/linkedin.png';
import Facebook from '../static/img/facebook.png';
import Instagram from '../static/img/instagram.png';
import Realtor from '../static/img/realtor.png';
import GitHub from '../static/img/github.png';

//Styles
import '../static/css/portfolio_style.css';

import NavBar from './NavBar';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    };

    render() {        
        return (
            <div>
                <div className="content main">
                    <div className="blocks about">
                        <h3 className="featured-work-title" style={{padding:"30px", paddingBottom:"20px"}}>Contact Me</h3>
                        <div style={{margin:"40px", marginTop:"0px", textIndent:"25px"}}>

                            <div style={{width: "225px", margin:"auto", marginTop: "30px"}}>
                                <a href="https://www.linkedin.com/in/jessehoffmann/" target="_blank">
                                    <img src={LinkedIn} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                <a href="https://github.com/jessehoffmann" target="_blank">
                                    <img src={GitHub} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                {/*}
                                <a href="https://www.instagram.com/jessehoffmannrealtor/" target="_blank">
                                    <img src={Instagram} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                
                                <a href="https://www.facebook.com/Jesse-Thomas-Hoffmann-Realtor-103150977970315/?modal=admin_todo_tour" target="_blank">
                                    <img src={Realtor} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;