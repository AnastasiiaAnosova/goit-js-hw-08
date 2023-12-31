import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAY_TIME_KEY = "videoplayer-current-time";
let playTime = 0;
// let serializedState;

player.on('timeupdate', throttle(onTimeUpDate, 1000));

function onTimeUpDate(data) {
    playTime = data.seconds;
    try {
        localStorage.setItem(PLAY_TIME_KEY, JSON.stringify(playTime));
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
}

if (localStorage.getItem(PLAY_TIME_KEY) !== null) {
    playTime = JSON.parse(localStorage.getItem(PLAY_TIME_KEY));
        player.setCurrentTime(playTime).catch(function (error) {
            console.error("Set current time error:", error.message);
        })
}

// try {
//     serializedState = localStorage.getItem(PLAY_TIME_KEY);
//     if (serializedState !== null) {
//         playTime = JSON.parse(serializedState);
//         player.setCurrentTime(playTime).catch(function (error) {
//             console.error("Set current time error:", error.message);
//         })
//     }

// } catch (error) {
//     console.error("Set state error: ", error.message);
// }

// function onTimeUpDate(data) {
//     playTime = data.seconds;
//     try {
//         serializedState = JSON.stringify(playTime);
//         localStorage.setItem(PLAY_TIME_KEY, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// }