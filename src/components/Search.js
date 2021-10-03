import React, { useState } from 'react';

export default function Search(props){
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
        if(e.target.value !== ''){
            props.search(e.target.value.trim());
        }
        else{
            props.search('');
        }
    }

    function handleSubmit(e) {
        if(search !== ''){
            props.search(search.trim());
        }
        else{
            props.search('');
        }
    }
    function handleCancle(e) {
        props.search('');
        setSearch('');
    }
    return(
        <div className="col-md-10 mx-auto">
            <div className="form-group">
                <div className="input-group search shadow">
                    <span className="input-group-prepend">
                        <button className="btn btn-light border-end-0 border cross-btn" type="button" onClick={handleCancle}>
                            <i className="fa fa-times"></i>
                        </button>
                    </span>
                    <input
                        className="form-control border-start-0 border-end-0 border"
                        type="search"
                        name="search"
                        placeholder="Search All Tracks"
                        value={search}
                        onChange={handleSearch}/>
                    <span className="input-group-append">
                        <button className="btn btn-light border-start-0 border search-btn" type="button" onClick={handleSubmit}>
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}