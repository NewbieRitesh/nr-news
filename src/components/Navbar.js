import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="sticky-top" style={{ height: "50px" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>NR News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link`} aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/business" >business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment" >entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/" >general</Link></li>
                                    <li><Link className="dropdown-item" to="/health" >health</Link></li>
                                    <li><Link className="dropdown-item" to="/science" >science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports" >sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology" >technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};