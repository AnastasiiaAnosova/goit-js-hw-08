
import Player from '@vimeo/player';

const inframe = document.querySelector('inframe');
const player = new Vimeo.Player(inframe);

const onPlay = function (data) {
    console.log(data.timeupdate);
};

player.on('play', onPlay);



player.getVideoTitle().then(onTitle);

function onTitle(title) {
    console.log('title:', title);
}