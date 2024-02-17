import { createContext, useReducer } from "react";
import { playlist1, playlist2 } from "../videoData";

const initialData = [playlist1, playlist2];
export const PlaylistContext = createContext();
const PlaylistReducer = ({ children }) => {
  function dispatchFunction(state, action) {
    switch (action.type) {
      case 1: {
        const { playlistId, newPlaylist } = action.payload;
        console.log(newPlaylist);
        // Find the playlist with the specified ID
        const updatedState = state.map((playlist) =>
          playlist.id === playlistId
            ? { ...playlist, playlist: newPlaylist }
            : playlist
        );
        console.log(updatedState);
        return [...updatedState];
      }
      case 2: {
        const { playlistId, newPlaylist } = action.payload;
        console.log(newPlaylist);
        // Find the playlist with the specified ID
        const updatedState = state.map((playlist) =>
          playlist.id === playlistId
            ? { ...playlist, playlist: newPlaylist }
            : playlist
        );
        console.log(updatedState);
        return [...updatedState];
      }
      default:
        return state;
    }
  }
  const [state, dispatcher] = useReducer(dispatchFunction, initialData);
  console.log(state);
  return (
    <PlaylistContext.Provider value={{ state, dispatcher }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistReducer;
