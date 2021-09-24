import React, {useState} from 'react';

export default function Header(){
    const [toggle, setToggle] = useState(false);
    const nav = (
        <div className="row">
            <div className="col">
            <a className="nav-link user" href="./"><i className="far fa-user"></i> NBPatil</a>
            <a className="nav-link signout" href="./">SIGNOUT <i className="fa fa-sign-out"></i></a>
            </div>
        </div>
    );
    return(
        <div className="container">
            <nav className="navbar navbar-expand-md header fixed-top">
                <a className="navbar-brand mr-auto" href="./"><i className="fas fa-music"></i> MUSIC</a>
                <button className="navbar-toggler" type="button" onClick={() => setToggle(!toggle)}> 
                    <span className="fa fa-bars"></span>
                </button>
            
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link user" href="./"><i className="far fa-user"></i> NBPatil</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link signout" href="./">SIGNOUT <i className="fa fa-sign-out"></i></a>
                        </li>
                    </ul>
                </div>
                {toggle ? nav : <div></div>}
            </nav>
        </div>
    );
}