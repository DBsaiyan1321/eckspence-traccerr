import React from "react"; 
import "../reset.css";
import "./Footer.css";

const Footer = props => { 
    return ( 
        <div className="footer">
            <ul className="footer-list">
                <li className="footer-list-title">Hobbies</li>
                <li className="footer-list-item">Tennis</li>
                <li className="footer-list-item">Programming</li>
                <li className="footer-list-item">Illustration</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Favorite Resources</li>
                <li className="footer-list-item">YouTube</li>
                <li className="footer-list-item">Stack Overflow</li>
                <li className="footer-list-item">React Documentation</li>
                <li className="footer-list-item">Leetcode</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Check Me Out</li>
                <li className="footer-list-item">Github</li>
                <li className="footer-list-item">LinkedIn</li>
                <li className="footer-list-item">Portfolio</li>
                <li className="footer-list-item">AngelList</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-title">Contact Info</li>
                <li className="footer-list-item">devorian143@gmail.com</li>
                <li className="footer-list-item">(707)718-7566</li>
            </ul>
        </div>  
    )
};

export default Footer;