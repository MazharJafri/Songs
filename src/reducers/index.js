import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Reminder', duration: '3:39' },
        { title: 'Too Late', duration: '4:00' },
        { title: 'Faith', duration: '4:45' },
        { title: 'After Hours', duration: '6:02' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
