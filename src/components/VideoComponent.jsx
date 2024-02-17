import { useRef } from "react";

const VideoComponent = ({ videoId }) => {
  const data = videoId;
  const videoRef = useRef(null);
  console.log(videoId);
  function handlePlaybackRate(event) {
    console.log(event.target.value);
    videoRef.current.playbackRate = event.target.value;
  }
  return (
    <div className="relative">
      <video
        className="w-full"
        ref={videoRef}
        src={data}
        autoPlay={true}
        controls
      ></video>
      <div className="absolute bottom-[30px] right-[220px] ">
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
    </div>
  );
};

export default VideoComponent;
