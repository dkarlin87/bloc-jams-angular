 (function() {
     function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};        
        var currentAlbum = Fixtures.getAlbum();
         

     
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
                SongPlayer.SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
                
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                SongPlayer.currentTime = currentBuzzObject.getTime();
         });
     });
            
            
            var getSongIndex = function(song) {
                return currentAlbum.songs.indexOf(song);
            };
        
            /**
            * @desc Active song object from list of songs
            * @type {Object}
            */
    
            SongPlayer.currentSong = song;
        };
         
         /**
         * @function PlaySong
         * @desc Plays selected audio file as currentBuzzObject
         * @param {Object} song
         */    
         
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
       
            var playsong = function(song){
                currentBuzzObject.play();
                song.playing = true;
    };
                 
        }
            
            var stopsong = function(song){
                currentBuzzObject.stop();
                song.playing = false;
    }
                 
        }
     };
       
            /**
            * @function Pause
            * @desc Pauses the currently selected audio file.
            * @param {Object} song
            */    
         
     
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
     };
         
     
        SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;
     }; 
        
     
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
     }; 

        if (currentSongIndex < 0) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
            SongPlayer.currentTime = null;
     }  else {
            var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
     }
        return SongPlayer;
     }
  
        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
            currentBuzzObject.setVolume(volume);
            }
            
        SongPlayer.volume = volume;
 
     
     angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();

        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
            currentBuzzObject.setTime(time);
     }
            
        };