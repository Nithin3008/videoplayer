import { PlaylistContext } from "./PlaylistReducer";
import { useContext } from "react";
const DisplayPlaylist = ({ setPlaylist }) => {
  const { state } = useContext(PlaylistContext);
  const playData = [...state];
  return (
    <ul className="w-80">
      {playData?.map((val) => (
        <li
          key={val.id}
          className="flex items-center"
          onClick={() => setPlaylist(val.id)}
        >
          <img
            src={val.playlist[0].thumb}
            alt="thumbnail"
            className="w-28"
          ></img>
          <div>
            <p>{val.playlist[0].description.substring(0, 30)}....</p>
            <p>{val.playlist.length} videos</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayPlaylist;
