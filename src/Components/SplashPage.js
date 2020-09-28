import React from "react";
import "./SplashPage.css";
import { ReactComponent as Picture1 } from "./undraw_Savings_re_eq4w.svg";
import { ReactComponent as Picture2 } from "./undraw_online_banking_7jy4.svg";
import { ReactComponent as Picture3 } from "./undraw_online_payments_luau.svg";
import { ReactComponent as Picture4 } from "./undraw_receipt_ecdd.svg";
const SplashPage = () => { 
    return (
        <div>
            <div className="main-banner"> 
                <Picture1 className="main-picture" />
                <div className="text-container">
                    <p className="title-text main-title">Track your expenses down, and save them!</p> 
                    <p className="info-text main-text">Eckspence Traccerr is the best way to keep track of how you spend you money. It was designed by a real genius.</p>
                </div>
            </div>
            <div className="info-container"> 
                <div className="info left">
                    <div className="text-container">
                        <p className="title-text">Create different accounts</p>
                        <p className="info-text">Name your accounts and give them a type as well! A name might be "savings" and the type might be "cash." Make accounts that fit your needs.</p>
                    </div>
                    <Picture2 className="info-picture" />
                </div>
                <div className="spacer"></div>
            </div>
            <div className="info-container"> 
                <div className="spacer"></div>
                <div className="info right">
                    <div className="text-container">
                        <p className="title-text">Categorize you expenses</p>
                        <p className="info-text">Keep your expenses organized by making categories. A category you might have is "groceries." However you spend your money, you can make a category for it!</p>
                    </div>
                    <Picture3 className="info-picture" />
                </div>
            </div>
            <div className="info-container">
                <div className="info left">
                    <div className="text-container">
                        <p className="title-text">View reports of your expenses</p>
                        <p className="info-text">These reports provide a great overview. Get a daily, weekly, and monthly report of your expenses. You can even make your own custom time range!</p>
                    </div>
                    <Picture4 className="info-picture" />
                </div>
                <div className="spacer"></div>
            </div>
        </div>
    )
};

export default SplashPage;