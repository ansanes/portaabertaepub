$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn  //        play_audio_h('here_are_the_names', 'head_2');
            audioElementId: 'here_are_the_names',
            highlightedElementId: 'head_2',
            signlanguageVideoName: 's_08_01',
        },
        {//2 cont2   /
            audioElementId: 'select_the_vowel',
            highlightedElementId: 'head_3',
            signlanguageVideoName: 's_08_02'
        },
        {//3 answer correct 
            audioElementId: 'hint_hair',
            highlightedElementId: 'popup_text',            
            signlanguageVideoName: 'popup_text'
        },
        {//4 answer incorrect
            audioElementId: 'hint_nose',
            highlightedElementId: 'popup_text',            
            signlanguageVideoName: 'act_03_09'
        },
        {//5 answer correct 
            audioElementId: 'hint_mouth',
            highlightedElementId: 'popup_text',            
            signlanguageVideoName: 'popup_text'
        },
        {//6 answer correct 
            audioElementId: 'hint_eyes',
            highlightedElementId: 'popup_text',            
            signlanguageVideoName: 'popup_text'
        },
        {//7 answer correct 
            audioElementId: 'hint_ears',
            highlightedElementId: 'popup_text',            
            signlanguageVideoName: 'popup_text'
        }

    ];
    var letter01 = $('.letter01').text();

    $('.w1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.head_3').html('<span>That\'s not the correct vowel!<br/>Try Again!</span>');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('wrong');
        $('.popup').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
        $('.disable').removeClass('d_none').addClass('d_block');
        var text_01 = $(this).text();
        $('.letter01').html(text_01);
        $('.letter01').css('color', 'red');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
        if ($('#screen3').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 3;
                highlightElement();
                play_audio_h('hint_hair', 'popup_text');
            }, 3000);
        } else if ($('#screen4').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 4;
                highlightElement();
                play_audio_h('hint_nose', 'popup_text');
            }, 3000);
        } else if ($('#screen5').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 5;
                highlightElement();
                play_audio_h('hint_mouth', 'popup_text');
            }, 3000);
        } else if ($('#screen6').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 6;
                highlightElement();
                play_audio_h('hint_eyes', 'popup_text');
            }, 3000);
        } else if ($('#screen7').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 7;
                highlightElement();
                play_audio_h('hint_ears', 'popup_text');
            }, 3000);
        }
    });

    $('.r1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.head_3').html('<span>You filled in the missing vowel!<br/>Well Done!</span>');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('right');
        $('.popup').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        pause_all();
        play_audio_h1('answer_correct', 'head_3', 'ans_correct');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        var text_01 = $(this).text();
        $('.letter01').html(text_01);
        $('.letter01').css('color', '#80E015');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.popup').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.cont').removeClass('cont_g').addClass('cont');
    });

    
    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        play_audio_h('here_are_the_names', 'head_2');
        a1 = setTimeout(function () {
            pause_all();
            play_audio_h('can_you_fill_missing_vowels', 'head_2a');
        }, 3000);
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        a1 = setTimeout(function () {
            $('.disable').removeClass('d_block').addClass('d_none');
            $('.cont').removeClass('cont').addClass('cont_g');
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5000);
    });

    $('.exit').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
    });

    $('.done').bind('click', function (e) {
        pause_all();
        play_audio('menu_exit');
        stopCurrentSignLanguageVideo();
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        disableVoiceOver();
        pause_all();
        play_audio('activity_start');
        hideOptionsBar();
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.disable_b1').removeClass('d_block').addClass('d_none');
//        play_audio_h('here_are_the_names', 'head_2');
        currentStep = 1;
        highlightElement();
        a1 = setTimeout(function () {
    //        currentStep = 2;
  //          highlightElement();
            play_audio_h('can_you_fill_missing_vowels', 'head_2a');
        }, 3000);
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen3').css('display', 'block');
        pause_all();
        play_audio('menu_continue');
        currentStep = 2;
        //play_audio_h('select_the_vowel', 'head_3');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen4').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen5').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen7,#screen8').css('display', 'none');
        $('#screen6').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont6').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen4,#screen6,#screen8').css('display', 'none');
        $('#screen7').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont7').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen4,#screen7,#screen6').css('display', 'none');
        $('#screen8').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h('well_done_all_vowels', 'head_4');
    });


});

/*function play_audio(audio) {
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 } else {
 aud.play();
 }
 }
 
 function pause_all() {
 var sounds = document.getElementsByTagName('audio');
 for(i=0; i<sounds.length; i++) {
 sounds[i].pause();
 sounds[i].currentTime = 0;
 }
 }
 
 function play_audio_h(audio, high) {
 
 $('.highlight').removeClass('highlight');
 stopAllTimeouts();
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 }, aud.duration*1000);
 } else {
 aud.pause(); // Stop playing
 aud.currentTime = 0; // Reset time
 }
 }
 
 
 function play_audio_h1(audio, high, audio1) {
 $('.highlight').removeClass('highlight');
 stopAllTimeouts();
 var aud = document.getElementById(audio);
 var aud1 = document.getElementById(audio1);
 if(aud.paused) {
 aud1.play();
 setTimeout(function () {
 aud.play();
 }, 200);
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 }, aud.duration*1000);
 } else {
 aud.pause(); // Stop playing
 aud.currentTime = 0; // Reset time
 }
 }
 
 function stopAllTimeouts() {
 for (var i = setTimeout(function() {}, 0); i > 0; i--) {
 window.clearInterval(i);
 }
 }*/

var a1;
