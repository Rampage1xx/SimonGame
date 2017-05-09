declare const require;
const sound1 = require('../Assets/simonSound1.mp3');
const sound2 = require('../Assets/simonSound2.mp3');
const sound3 = require('../Assets/simonSound3.mp3');
const sound4 = require( '../Assets/simonSound4.mp3');
const audio1 = new Audio(sound1);
const audio2 = new Audio(sound2);
const audio3 = new Audio(sound3);
const audio4 = new Audio(sound4);

const audioArray: HTMLAudioElement[] = [audio1, audio1, audio2, audio3, audio4];

export const soundPlayBack = (color: number) => {

    audioArray[color].play();
};

