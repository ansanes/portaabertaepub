var playerFunctions = {};
var currentPage = 0;
playerFunctions.voiceOverStatusChanged = function (enabled) {
    if (enabled) {
        highlightElement();
    }
};




var currentStep = 0;
var stepsData = [];

function checkExtraHintsApply(stepInformation) {
    return (currentPage === 6 && (!stepInformation.audioElementId.includes('what_animal_is') || ((currentStep === 1 || isExtraHintsEnabled())))) ||
            (currentPage === 7 && (!stepInformation.audioElementId.includes('answer_correct') || isExtraHintsEnabled())) ||
            (currentPage === 8 && ((!stepInformation.audioElementId.includes('ans_correct') && !stepInformation.audioElementId.includes('ans_wrong')) || isExtraHintsEnabled())) ||
            (currentPage !== 6 && currentPage !== 7);
}

function highlightElement() {
    var stepInformation = stepsData[currentStep];
    if ((inUnicefPlayer() && UnicefPlayer.isVoiceOverEnabled()) || !inUnicefPlayer()) {
        var play = function () {
            var timeout = 0;
            if (stepInformation.secondElementId) {
                if (checkExtraHintsApply(stepInformation))
                {
                    play_audio_h1(stepInformation.audioElementId, stepInformation.highlightedElementId, stepInformation.secondElementId);
                } else {
                    play_audio(stepInformation.secondElementId);
                }
                timeout = 2000;
            } else {
                if (checkExtraHintsApply(stepInformation))
                {
                    play_audio_h(stepInformation.audioElementId, stepInformation.highlightedElementId);
                }
            }
            if (inUnicefPlayer()) {
                setTimeout(function () {
                    console.log("playing video:" + stepInformation.signlanguageVideoName + " in:" + timeout);
                    UnicefPlayer.playSignLanguageVideo(stepInformation.signlanguageVideoName);
                }, timeout);
            }
        };
        play();
    }else if (!isVoiceOverEnabled() && stepInformation.secondElementId){
        play_audio(stepInformation.secondElementId);
    }
    if (stepInformation.highlightTimeout) {
        setTimeout(function () {
            $(stepInformation.highlightedElementId).removeClass('highlight');
        }, stepInformation.highlightTimeout);
    }
}

function play_audio(audio) {
    var aud = document.getElementById(audio);
    if (aud.paused) {
        aud.play();
    } else {
        aud.play();
    }
}

function play_audio_file(fileName) {
    var audio = new Audio("audio/"+fileName);
    audio.play();    
}

function play_audio_file_highlight_element(fileName,elementId) {
    var audio = document.getElementById(fileName);

    audio.playbackRate = getPlayBackRate();
    audio.play();    
    $('.'+elementId).addClass('highlight');
    audio.addEventListener("ended", function(){
        $('.'+elementId).removeClass('highlight');
    });
    audio.addEventListener("paused", function(){
        $('.'+elementId).removeClass('highlight');
    });
}

function getPlayBackRate(){
    if (inUnicefPlayer()) {
        return UnicefPlayer.getMediaOverlayRate();
    }else{
        return 2.0;
    }
}



function pause_all() {
    $('audio').each(function () {
        if (!this.paused) {
            console.log("currentSrc:"+this.currentSrc);
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        }
    });
}

function stopAllTimeouts() {
    for (var i = setTimeout(function () {}, 0); i > 0; i--) {
        window.clearInterval(i);
    }
}


function play_audio_h(audio, high) {
    /* var sounds = document.getElementsByTagName('audio');
     for (i = 0; i < sounds.length; i++) {
     sounds[i].pause();
     sounds[i].currentTime = 0.1;
     }*/
    $('.highlight').removeClass('highlight');
    //stopAllTimeouts();
    var aud = document.getElementById(audio);
    if (aud.paused) {
        if ((inUnicefPlayer() && UnicefPlayer.isVoiceOverEnabled()) || !inUnicefPlayer()) {
            aud.play();
        }
        $('.' + high + ' span').addClass('highlight');
        $('.' + high + ' span span').removeClass('highlight');
        setTimeout(function () {
            $('.' + high + ' span').removeClass('highlight');
        }, aud.duration * 1000);
    } else {
        aud.pause(); // Stop playing
        aud.currentTime = 0; // Reset time
    }
}

function inUnicefPlayer() {
    return "UnicefPlayer" in window;
}

function disableVoiceOver() {
    if (inUnicefPlayer()) {
        UnicefPlayer.disableVoiceOver();
    }
}

function hideOptionsBar() {
    if (inUnicefPlayer()) {
        UnicefPlayer.hideOptionsBar();
    }
}

function stopCurrentSignLanguageVideo() {
    if (inUnicefPlayer()) {
        UnicefPlayer.stopCurrentSignLanguageVideo();
    }
}


function showOptionsBar() {
    if (inUnicefPlayer()) {
        UnicefPlayer.showOptionsBar();
    }
}



function isVoiceOverEnabled() {
    if (inUnicefPlayer()) {
        return UnicefPlayer.isVoiceOverEnabled();
    }
    return true;
}

function isExtraHintsEnabled() {
    if (inUnicefPlayer()) {
        return UnicefPlayer.isExtraHintsEnabled();
    }
    return false;

}

function playSignLanguageVideo(name) {
    if (inUnicefPlayer()) {
        UnicefPlayer.playSignLanguageVideo(name);
    }
}

function play_audio_h1(audio, high, audio1) {
    /* var sounds = document.getElementsByTagName('audio');
     for (i = 0; i < sounds.length; i++) {
     sounds[i].pause();
     sounds[i].currentTime = 0.1;
     }*/
    $('.highlight').removeClass('highlight');
    //stopAllTimeouts();
    var aud = document.getElementById(audio);
    var aud1 = document.getElementById(audio1);
    if (aud.paused) {
        if ((inUnicefPlayer() && UnicefPlayer.isVoiceOverEnabled()) || !inUnicefPlayer()) {
            aud1.play();
            setTimeout(function () {
                aud.play();
            }, 600);
        }
        $('.' + high + ' span').addClass('highlight');
        $('.' + high + ' span span').removeClass('highlight');
        setTimeout(function () {
            $('.' + high + ' span').removeClass('highlight');
        }, aud.duration * 1000);
    } else {
        aud.pause(); // Stop playing
        aud.currentTime = 0; // Reset time
    }
}


