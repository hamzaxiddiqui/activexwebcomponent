import React, {Component } from 'react';
import './contact-us.css';
import facebook from './logos/FacebookIcon.png'
import twitter from './logos/TwitterIcon.png'
import github from './logos/GithubIcon.png'
import linkedin from './logos/LinkedInIcon.png'
class Contact extends Component{
render(){
    return(
        <div className="main-div">
            <div className="inside-div">
                <h1 className="heading">Contacts</h1>
                <div className="contents-div1">
                    <h2>Getting in Touch is Easy!</h2>
                    <h5><u>Find us here!</u></h5>
                    <a href="#" target="_blank">activexsolutions1@gmail.com</a>
                    <ul className="contact-list">
                        <li><a href="https://www.facebook.com/ActiveXSolutions" target="_blank"><img src={facebook} alt ="FacebookIcon" title="Facebook" width="30" height="30"/></a></li>
                        <li><img src={twitter} alt ="TwitterIcon"  title="Twitter" width="30" height="30"/></li>
                        <li><a href="https://github.com/ActivexSolutions" target="_blank"><img src={github} alt ="GithubIcon"  title="Github" width="30" height="30"/></a></li>
                        <li><img src={linkedin} alt ="LinkedInIcon"  title="LinkedIn" width="30" height="30"/> </li>
                    </ul>
                </div>
                {/* <div className="contents-div2">
                <form onSubmit="">
                <input type="text" className="inputs" name="name" placeholder="Your Name"/>
                <input type="email" className="inputs" name="email" placeholder="Your Email"/>
                <textarea rows="6" cols="46" placeholder="Write us about any project.We'd love to work with you" id="text-area" maxLength="30">

                </textarea>
                <input type="submit" className="send-button" value="Send"/>
                </form>
                </div> */}
            </div>
        </div>
    )
}



}

export default Contact;