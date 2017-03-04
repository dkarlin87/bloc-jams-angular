 (function() {
     function SongPlayer() {
          var SongPlayer = {};
         
    var currentSong = null;
     
          /**
 * @desc Buzz object audio file
 * @type {Object}
 */
         var currentBuzzObject = null;
      /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */    
    var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };
         /**
 * @function PlaySong
 * @desc Plays selected audio file as currentBuzzObject
 * @param {Object} song
 */    
         
        SongPlayer.play = function(song) {
     if (currentSong !== song) {
       
       var playsong = function(song){
currentBuzzObject.play();
         song.playing = true;
};
                 
        }
     };
       
              /**
 * @function Pause
 * @desc Pauses the currently selected audio file.
 * @param {Object} song
 */    
         
      SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
 };
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();

