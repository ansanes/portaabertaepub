$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn 
            audioElementId: 'here_are_nine_pictures',
            highlightedElementId: 'head_2',
            signlanguageVideoName: 'act_05_01',
        },
        {//2 cont2
            audioElementId: 'sort_the_picture',
            highlightedElementId: 'head_3',
            signlanguageVideoName: 'act_05_02'
        },
        {//3 answer correct
            audioElementId: 'answer_correct',
            highlightedElementId: 'head_3',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_03_09'
        },
        {//4 answer incorrect
            audioElementId: 'answer_incorrect',
            highlightedElementId: 'head_3',
            secondElementId: 'ans_wrong',
            signlanguageVideoName: 'act_03_09'
        }

    ];
    var items = activityData.items;
    for (var i = 0; i < items.length; i++) {
        var value = items[i];
        var correctBtnClass = value.correct?".yes_btn":"no_btn";
        $('#screen'+(i+2)+' '+correctBtnClass).bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>'+value.description+'</span>');
    });
    }
    
    $('.exit,.done').bind('click', function (e) {
//   	e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('#screen1,#screen2,#screen3,#screen4,#screen5').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.w1').removeClass('worng trans').addClass('trans');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Does the hat go on boy\'s <span class="underline">HEAD?</span></span>');
    });

    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('#screen1,#screen3,#screen4,#screen5').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.w1').removeClass('worng trans wrong').addClass('trans');
        $('.r1').removeClass('right trans wrong').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Does the hat go on boy\'s <span class="underline">HEAD?</span></span>');
        play_audio_h('hat_question', 'b_text_w');
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        disableVoiceOver();
        play_audio('activity_start');
        hideOptionsBar();
        $('#screen1,#screen3,#screen4,#screen5').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>Does the hat go on boy\'s <span class="underline">HEAD?</span></span>');
        play_audio_h('hat_question', 'b_text_w');
    });

    $('.w1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.w1').removeClass('worng trans').addClass('wrong');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Are you sure? Try Again!</span>');
        pause_all();
        play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('.r1').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.r1').removeClass('right trans').addClass('right');
        $('.w1').removeClass('wrong trans').addClass('trans');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        if ($('#screen2').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen3').css('display') == 'block') {
            play_audio_h1('socks_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen4').css('display') == 'block') {
            play_audio_h1('hoodie_correct', 'b_text_w', 'ans_correct');
        }
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.w1').removeClass('worng trans').addClass('trans');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b').removeClass('d_block').addClass('d_none');
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5').css('display', 'none');
        $('#screen3').css('display', 'block');
        $('.b_text_w').html('<span>Do the socks go on boy\'s <span class="underline">HANDS</span>?</span>');
        pause_all();
        play_audio_h('socks_question', 'b_text_w');
    });
    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen5').css('display', 'none');
        $('#screen4').css('display', 'block');
        $('.b_text_w').html('<span>Do you put the hoodie on the boy\'s<br/><span class="underline">TORSO</span>, <span class="underline">ARMS</span> and <span class="underline">HEAD</span>?</span>');
        pause_all();
        play_audio_h('hoodie_question', 'b_text_w');
    });
    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen5').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h('well_done_all_clothes', 'b_text_w3');
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
 
 function play_audio_h(audio,high) {
 clearTimeout(x1);
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 $('.disable_b1').addClass('d_block');
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 var x1 = setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 $('.disable_b1').removeClass('d_block').addClass('d_none');
 }, aud.duration*1000);
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