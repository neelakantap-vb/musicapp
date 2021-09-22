import React from 'react';
import music from '../assets/music.mp3';

export default function Header(props){
    return(
        <div className="col-md-10 mx-auto shadow p-0">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 pt-3 text-center like">
                            <a><h4 className="card-title">{props.like} <i className="fas fa-thumbs-up"></i></h4></a>
                        </div>
                        <div className="col-md-4">
                            <h4 className="card-title">{props.title}</h4>
                            <h6 className="card-subtitle text-muted">{props.subtitle}</h6>
                        </div>
                        <div className="col-md-5">
                            <audio controls>
                                <source src={music} type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="col-md-1 pt-3 text-center">
                            <a><i className="fas fa-chevron-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}