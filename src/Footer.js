import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ currentPage, nextPage, skipButton }) => {
    console.log(currentPage);
    return (
        <>
            <div className="breadcrumbs">
                <Link to="/">
                    <div className={`breadcrumbs-item breadcrumbs-visited`}>Home</div>
                </Link>
                <span className="breadcrumbs-spacer"></span>
                <Link to="/genre">
                    <div className={`breadcrumbs-item ${currentPage !== "genre" && "breadcrumbs-visited"}`}>Genre</div>
                </Link>
                <span className="breadcrumbs-spacer"></span>
                <Link to="/parental-guide">
                    <div className={`breadcrumbs-item ${currentPage !== "rating" && "breadcrumbs-visited"}`}>Rating</div>
                </Link>
                <span className="breadcrumbs-spacer"></span>
                <Link to="/production">
                    <div className={`breadcrumbs-item ${currentPage !== "production" && "breadcrumbs-visited" }`}>Studio</div>
                </Link>
                <span className="breadcrumbs-spacer"></span>
                <Link to="/stars">
                    <div className={`breadcrumbs-item ${currentPage !== "stars" && "breadcrumbs-visited"}`}>Stars</div>
                </Link>
            </div>
            <div className="actions">
                {skipButton &&
                    <Link to={nextPage}>
                        <div className="actions-item">Skip</div>
                    </Link>
                }
                <Link to={nextPage}>
                    <div className="actions-item">Next</div>
                </Link>
            </div>
        </>
    )
}

export default Footer;