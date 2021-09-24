import React, { useState } from "react";
import './index.css';

import Header from "./components/Header";
import Search from "./components/Search";
import Music from "./components/Music";
import AddMusic from "./components/AddMusic";

function App(props) {
  const [musics, setMusics] = useState(props.musics);
  const [filMusics, setFilMusics] = useState(musics);
  const count = filMusics.length;
  
  function search(search){
    if (search === ''){
      setFilMusics(musics);
    }
    else{
      const keywords = search.split(" ");

      function checker(music){
        for(var i = 0; i < keywords.length; i++){
          if(music.title.toLowerCase().includes(keywords[i].toLowerCase()) || 
             music.subtitle.toLowerCase().includes(keywords[i].toLowerCase())){
            return true;
          }
        }
        return false;
      }
      const filteredMusics = musics.filter(checker);
      setFilMusics(filteredMusics);
    }
  }

  function addMusic(title, subtitle) {
    const newMusic = {id:count+1, like:0, title: title, subtitle: subtitle, media:'', liked: false};
    setMusics([...musics, newMusic]);
    setFilMusics([...filMusics, newMusic]);
  }

  function deleteMusic(id) {
    const remainingMusics = filMusics.filter(music => id !== music.id);
    setMusics(remainingMusics);
    setFilMusics(remainingMusics);
  }

  function onLiked(id){
    const likedMusic = filMusics.map(music => {
      if(id === music.id){
        return  music.liked ? {...filMusics, id:music.id, like:music.like-1, title: music.title, subtitle: music.subtitle, media:'', liked: false} :
                              {...filMusics, id:music.id, like:music.like+1, title: music.title, subtitle: music.subtitle, media:'', liked: true};
      }
      return music;
    });
    console.log(filMusics);
    setMusics(likedMusic);
    setFilMusics(likedMusic);
  }

  const musicList = filMusics.map(music => (
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
