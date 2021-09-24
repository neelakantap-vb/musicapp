import React, {useState} from 'react';
import music from '../assets/music.mp3';

export default function Music(props){
    var likeColor = 'col-md-2 pt-3 text-center like';
    if(props.liked){
        likeColor = 'col-md-2 pt-3 text-center liked';
    }
    const [isDel, setDel] = useState(false);
    const del = (
        <div className="row pt-4">
            <div className="col-md-2 offset-md-9 offset-4">
                <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteMusic(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    );

    return(
        <div className="row">
            <div className="col-md-10 mx-auto shadow p-0">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className={likeColor}>
                                <h4 className="card-title">{props.like} <i onClick={() => props.onLiked(props.id)} className="fas fa-thumbs-up"></i></h4>
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
                                <i onClick={() => setDel(!isDel)} className="fas fa-chevron-down"></i>
                            </div>
                        </div>    
                        {isDel ? del : <div></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}