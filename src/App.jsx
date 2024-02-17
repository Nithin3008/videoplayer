import { useState } from "react";
import "./App.css";
import DisplayPlaylist from "./components/DisplayPlaylist";
import PlaylistComponent from "./components/PlaylistComponent";
import PlaylistReducer from "./components/PlaylistReducer";
import VideoComponent from "./components/VideoComponent";

function App() {
  const [selectedPlaylist, setSelectPlaylist] = useState("");
  function setPlaylist(id) {
    setSelectPlaylist(id);
  }
  return (
    <>
      {/* <VideoComponent></VideoComponent> */}
      <PlaylistReducer>
        <PlaylistComponent
          selectedPlaylist={selectedPlaylist}
        ></PlaylistComponent>
      </PlaylistReducer>
      <PlaylistReducer>
        <DisplayPlaylist setPlaylist={setPlaylist}></DisplayPlaylist>
      </PlaylistReducer>
    </>
  );
}

export default App;
