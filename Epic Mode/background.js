chrome.runtime.onMessage.addListener((msg,sender,response)=>{
    if(msg.name=="playTrack"){
        var trackName = msg.track;
        document.querySelector('.audio-element').src = "track-"+trackName+".mp3";
        document.querySelector('.audio-element').play();
    }

    if(msg.name=="pauseTrack"){
        document.querySelector('.audio-element').pause();
    }
})