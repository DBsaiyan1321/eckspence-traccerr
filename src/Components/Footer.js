import React from "react"; 
import "../reset.css";
import "./Footer.css";

const Footer = props => { 
    return ( 
        <div className="footer">
            <ul className="footer-list">
                <li className="footer-list-title">Hobbies</li>
                <li className="footer-list-item-not-link">Tennis</li>
                <li className="footer-list-item-not-link">Programming</li>
                <li className="footer-list-item-not-link">Illustration</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Favorite Resources</li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/" className="footer-list-item">YouTube</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/" className="footer-list-item">Stack Overflow</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/" className="footer-list-item">React Documentation</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/" className="footer-list-item">Leetcode</a></li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Check Me Out</li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/DBsaiyan1321" className="footer-list-item">Github</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dorian-izaiah-brown-1430b3193/" className="footer-list-item">LinkedIn</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://dbsaiyan1321.github.io/portfolio-site/" className="footer-list-item">Portfolio</a></li>
                <li className="footer-list-item"><a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/dorian-izaiah-brown" className="footer-list-item">AngelList</a></li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Contact Info</li>
                <li className="footer-list-item-not-link">devorian143@gmail.com</li>
                <li className="footer-list-item-not-link">(707)718-7566</li>
            </ul>
        </div>  
    )
};

export default Footer;