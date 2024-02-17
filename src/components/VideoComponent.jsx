import { useRef } from "react";

const VideoComponent = () => {
  const data =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const videoRef = useRef(null);
  function handlePlaybackRate(event) {
    console.log(event.target.value);
    videoRef.current.playbackRate = event.target.value;
  }
  return (
    <div className="relative">
      <video ref={videoRef} src={data} autoPlay={true} controls></video>
      <div className="absolute bottom-[60px] right-[140px] ">
        <select
          className=" border-none outline-none  opacity-60 rounded-md"
          onClick={(e) => handlePlaybackRate(e)}
        >
          <option value={1} selected>
            1x
          </option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
          <option value={2.5}>2.5x</option>
          <option value={3}>3x</option>
        </select>
      </div>
      <button onClick={() => handlePlaybackRate(10)}>10</button>
    </div>
  );
};

export default VideoComponent;
