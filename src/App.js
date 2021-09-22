import React, { useState } from "react";
import './index.css';

import Header from "./components/Header";
import Search from "./components/Search";
import Music from "./components/Music";
import AddMusic from "./components/AddMusic";

function App(props) {
  const [musics, setMusics] = useState(props.musics);
  const count = musics.length;

  function addMusic(title, subtitle) {
    const newMusic = {id:count+1, like:0, title: title, subtitle: subtitle, media:''};
    setMusics([...musics, newMusic]);
  }

  const musicList = musics.map(music => (
    <Music 
      id = {music.id}
      like = {music.like}
      title = {music.title}
      subtitle = {music.subtitle}
      media = {music.media}
      key = {music.id}
    />
  ));
  return (
    <div>
      <Header />
      <AddMusic />
      <div class="container body">
        <div class="row">
          <Search />
          {musicList}
        </div>
      </div>
    </div>
  );
}

export default App;
