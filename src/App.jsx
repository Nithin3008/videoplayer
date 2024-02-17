import { useState } from "react";
import "./App.css";
import DisplayPlaylist from "./components/DisplayPlaylist";
import PlaylistComponent from "./components/PlaylistComponent";
import PlaylistReducer from "./components/PlaylistReducer";
import VideoComponent from "./components/VideoComponent";

function App() {
  const [selectedPlaylist, setSelectPlaylist] = useState("");
  const [videoId, setVideoId] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  function setPlaylist(id) {
    setSelectPlaylist(id);
  }
  function setVideo(source) {
    setVideoId(source);
  }
  return (
    <>
      <div className="flex justify-center h-3/4 gap-5 mb-10">
        <VideoComponent videoId={videoId}></VideoComponent>
        <PlaylistReducer>
          <DisplayPlaylist setPlaylist={setPlaylist}></DisplayPlaylist>
        </PlaylistReducer>
      </div>
      <hr></hr>
      <PlaylistReducer>
        <PlaylistComponent
          selectedPlaylist={selectedPlaylist}
          setVideo={setVideo}
        ></PlaylistComponent>
      </PlaylistReducer>
    </>
  );
}

export default App;
