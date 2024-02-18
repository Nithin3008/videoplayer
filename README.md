# React + Vite

# Overview
This project is a Video Player application built using React.js and designed to allow users to play videos from a playlist. The application supports essential features such as play/pause toggle, seeking, timer display, autoplay, and playback speed adjustment. Additionally, users can manage the playlist by reordering videos.

# Tech Stack
React.js
React Context API
React Hooks (useContext, useReducer)
Tailwind CSS (for styling)
react-beautiful-dnd (for drag and drop functionality)

# Components
VideoPlayer Component
Implements the video player with play/pause toggle, seek functionality, timer display, autoplay, and speed selector.
The player component is built in-house using React state and context.
Playlist Component
Displays and manages the playlist of videos.
Allows users to reorder videos using react-beautiful-dnd.
Clicking on a video in the playlist loads and plays that video in the VideoPlayer component.

# State Management
Utilizes React state and context to manage video playback, playlist state, and other necessary variables.
Uses useContext and useReducer for efficient state management.

# Hosted link 
https://capable-brioche-4c316a.netlify.app/
