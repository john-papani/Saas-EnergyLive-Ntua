import React from "react";
import "../css/home_page.css"
const Footer_home =() =>{
    return (
        <div className="footer_home">
            <ol className="footer_links">
                <li className="f_link"> <a href="/about">About</a></li>
                <li className="f_link"><a href="/plans">Plans</a></li>
                <li className="f_link"><a href="/legal">Legal</a></li>
            </ol>
        </div>
    )
}
export default Footer_home
