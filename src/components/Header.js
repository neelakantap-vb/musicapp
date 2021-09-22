import React from 'react';

export default function Header(){
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg header fixed-top">
                <a className="navbar-brand mr-auto" href="./"><i className="fas fa-music"></i> MUSIC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link user" href="./"><i className="far fa-user"></i> NBPatil</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link signout" href="./">SIGNOUT <i className="fa fa-sign-out" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}