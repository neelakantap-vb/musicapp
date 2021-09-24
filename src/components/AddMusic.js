import React, { useState } from 'react';

export default function AddMusic(props){
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [link, setLink] = useState('');
    const [add, setAdd] = useState(false);

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleSubtitle(e) {
        setSubtitle(e.target.value);
    }
    function handleLink(e) {
        setLink(e.target.value);
    }

    function handleAdd() {
        if (title !== '' && subtitle !== '') {
          props.addMusic(title, subtitle);
          setLink('');
          setSubtitle('');
          setTitle('');
          setAdd(false);
        }
    }

    const form = (
        <div className="add-form">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header ml-2 mr-2">
                        <h5 className="modal-title">New Music</h5>
                        <button type="button" className="close" onClick={() => setAdd(false)}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-around">
                            <div className="form-group col-sm-3">
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="form-group col-sm-7">
                                <input 
                                    type="text"
                                    className="form-control form-control-sm"
                                    id="title"
                                    placeholder="Enter title"
                                    required
                                    value={title}
                                    onChange={handleTitle}/>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="form-group col-sm-3">
                                <label htmlFor="subtitle">Subtitle</label>
                            </div>
                            <div className="form-group col-sm-7">
                                <input 
                                    type="text"
                                    className="form-control form-control-sm"
                                    id="subtitle"
                                    placeholder="Enter subtitle"
                                    required
                                    value={subtitle}
                                    onChange={handleSubtitle}/>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="form-group col-sm-3">
                                <label htmlFor="musicLink">Music link</label>
                            </div>
                            <div className="form-group col-sm-7">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    id="musicLink"
                                    placeholder="Enter music link"
                                    value={link}
                                    onChange={handleLink}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer mr-4">
                        <button type="button" className="btn btn-secondary" onClick={() => setAdd(false)}>Cancle</button>
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>Add Music</button>
                    </div>
                </div>
            </div>
        </div>
    );
    return(
        <div>
            {add ? form : <div></div>}
            <div className="position-fixed bottom-0 end-0 m-4 add-btn">
                <button type="button" className="btn btn-warning rounded-pill" onClick={() => setAdd(true)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
      </div>
    );
}