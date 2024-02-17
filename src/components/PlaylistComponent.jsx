import { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { mediaJSON } from "../videoData";
import { PlaylistContext } from "./PlaylistReducer";

const PlaylistComponent = ({ selectedPlaylist }) => {
  const { state, dispatcher } = useContext(PlaylistContext);
  console.log(selectedPlaylist);
  // ...mediaJSON.categories[0].videos
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (selectedPlaylist > 0) {
      const getPlaylist = [...state]?.find((val) => val.id == selectedPlaylist);
      setItems([...getPlaylist.playlist]);
    } else {
      setItems([]);
    }
  }, [selectedPlaylist, state]);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    dispatcher({
      type: selectedPlaylist,
      payload: { playlistId: selectedPlaylist, newPlaylist: newItems },
    });
    setItems(newItems);
  }
  return (
    <>
      {items?.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {items.map((val, index) => (
                  <Draggable key={val.id} draggableId={val.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className="bg-blue-500"
                      >
                        <h1>{val.description}</h1>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h1>Select Playlist</h1>
      )}
    </>
  );
};

export default PlaylistComponent;
