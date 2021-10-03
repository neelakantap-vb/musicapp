import React, { useState } from "react";
import './index.css';

import Header from "./components/Header";
import Search from "./components/Search";
import Music from "./components/Music";
import AddMusic from "./components/AddMusic";

function App(props) {
  const [musics, setMusics] = useState(props.musics);
  const [filtered, setFiltered] = useState('');
  const count = musics[musics.length-1].id;
  
  function search(search){
    setFiltered(search);
  }

  function addMusic(title, subtitle) {
    const newMusic = {id:count+1, like:0, title: title, subtitle: subtitle, media:'', liked: false};
    setMusics([...musics, newMusic]);
  }

  function deleteMusic(id) {
    const remainingMusics = musics.filter(music => id !== music.id);
    setMusics(remainingMusics);
  }

  function onLiked(id){
    const likedMusic = musics.map(music => {
      if(id === music.id){
        return  music.liked ? {...musics, id:music.id, like:music.like-1, title: music.title, subtitle: music.subtitle, media:'', liked: false} :
                              {...musics, id:music.id, like:music.like+1, title: music.title, subtitle: music.subtitle, media:'', liked: true};
      }
      return music;
    });
    setMusics(likedMusic);
  }

  const musicList = musics.filter((data)=>{
    if(filtered === ''){
      return data;
    }
    else{
      const keywords = filtered.split(" ");

      for(var i = 0; i < keywords.length; i++){
        if(data.title.toLowerCase().includes(keywords[i].toLowerCase()) || 
            data.subtitle.toLowerCase().includes(keywords[i].toLowerCase())){
          return data;
        }
      }
    }
  }).map(music => (
    <Music 
      id = {music.id}
      like = {music.like}
      title = {music.title}
      subtitle = {music.subtitle}
      media = {music.media}
      liked = {music.liked}
      key = {music.id}
      deleteMusic = {deleteMusic}
      onLiked = {onLiked}
    />
  ));
  return (
    <div>
      <Header />
      <div className="container body">
        <Search search = {search} />
        {musicList}
      </div>
      <AddMusic addMusic={addMusic} />
    </div>
  );
}

export default App;
