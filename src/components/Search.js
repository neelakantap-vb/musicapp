import React from 'react';

export default function Header(){
    return(
        <div className="col-md-10 mx-auto">
            <div className="form-group">
                <div className="input-group search shadow">
                    <span className="input-group-prepend">
                        <button className="btn btn-light border-end-0 border cross-btn" type="button">
                            <i className="fa fa-times"></i>
                        </button>
                    </span>
                    <input className="form-control border-start-0 border-end-0 border" type="search" name="search" id="search" placeholder="Search All Tracks"/>
                    <span className="input-group-append">
                        <button className="btn btn-light border-start-0 border search-btn" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}