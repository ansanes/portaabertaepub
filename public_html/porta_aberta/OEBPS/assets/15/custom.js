$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn  play_audio_h('here_are_some_pictures', 'b_text_w');
            audioElementId: 'here_are_nine_pictures',
            highlightedElementId: 'b_text_w',
            signlanguageVideoName: 'act_05_01', 
        },
        {//2 cont2  play_audio_h('pick_which_part_body', 'b_text_w');
            audioElementId: 'pick_which_part_body',
            highlightedElementId: 'b_text_w',
            signlanguageVideoName: 'act_05_02'
        },
        {//3         //play_audio_h('well_done_parts_body', 'b_text_w');
            audioElementId: 'well_done_parts_body',
            highlightedElementId: 'b_text_w',            
            signlanguageVideoName: 'act_03_09'
        },
        {//4 play_audio_h('which_sports_you_know', 'b_text_w');
            audioElementId: 'which_sports_you_know',
            highlightedElementId: 'b_text_w',
            signlanguageVideoName: 'act_03_09'
        },
        {// 5    play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
            audioElementId: 'answer_incorrect',
            highlightedElementId: 'b_text_w',
            secondElementId: 'ans_wrong',
            signlanguageVideoName: 'act_03_09'
        },
        {//6 play_audio_h1('skateboard_correct', 'b_text_w', 'ans_correct');
            audioElementId: 'skateboard_correct',
            highlightedElementId: 'b_text_w',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_03_09'
        },
        {//7 play_audio_h1('soccer_correct', 'b_text_w', 'ans_correct');
            audioElementId: 'soccer_correct',
            highlightedElementId: 'b_text_w',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_03_09'
        },
        {// 8play_audio_h1('basketball_correct', 'b_text_w', 'ans_correct');
            audioElementId: 'basketball_correct',
            highlightedElementId: 'b_text_w',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_03_09'
        }
        
        

    ];
    $('.d_audio').bind('touchstart click', function (e) {
        e.preventDefault();
        turnOffMediaOverlay(e);
    });

    $('.a_audio').bind('touchstart click', function (e) {
        e.preventDefault();
        turnOnMediaOverlay(e);
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        disableVoiceOver();
        hideOptionsBar();
        play_audio('activity_start');
        $('#here_are_some_pictures').muted = 'false';
        $('.d_audio').removeClass('d_none').addClass('d_block');
        $('#screen2').css('display', 'block');
        $('#screen1,#screen3,#screen4,#screen5,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('.r3,.r4,.r5').removeClass('r1_ani r2_ani r3_ani').addClass('d_none');
        $('.r3').addClass('d_block');
        $('.cont').removeClass('cont cont_g').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b1').addClass('d_none').removeClass('d_block');
        $('.arms,.legs,.torso').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.done').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>Here are some pictures of children<br/>playing different sports!</span>');
        $('.pic_1, .btn_1, .pic_2, .btn_2, .pic_3, .btn_3').removeClass('right').addClass('trans');
        currentStep = 1;
        highlightElement();
        //play_audio_h('here_are_some_pictures', 'b_text_w');
    });

    $('.exit').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('.d_audio,.a_audio').removeClass('d_block d_none').addClass('d_none');
        $('.r3,.r4,.r5').removeClass('r1_ani r2_ani r3_ani').addClass('d_none');
        $('.r3').removeClass('d_none').addClass('d_block');
        $('#screen1').css('display', 'block');
        $('#screen2,#screen3,#screen4,#screen5,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('.arms,.legs,.torso').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.icon').removeClass('d_none active');
        $('.cont').removeClass('cont cont_g').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b1').addClass('d_none').removeClass('d_block');
        $('.done').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>Here are some pictures of children<br/>playing different sports!</span>');
        $('.pic_1, .btn_1, .pic_2, .btn_2, .pic_3, .btn_3').removeClass('right').addClass('trans');
    });

    $('.done').bind('click', function (e) {
        pause_all();
        play_audio('menu_exit');
        $('.d_audio,.a_audio').removeClass('d_block d_none').addClass('d_none');
        $('.r3,.r4,.r5').removeClass('r1_ani r2_ani r3_ani').addClass('d_none');
        $('.r3').removeClass('d_none').addClass('d_block');
        $('#screen1').css('display', 'block');
        $('#screen2,#screen3,#screen4,#screen5,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('.arms,.legs,.torso').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.icon').removeClass('d_none active');
        $('.cont').removeClass('cont cont_g').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b1').addClass('d_none').removeClass('d_block');
        $('.done').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>Here are some pictures of children<br/>playing different sports!</span>');
        $('.pic_1, .btn_1, .pic_2, .btn_2, .pic_3, .btn_3').removeClass('right').addClass('trans');
    });

    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('.r3,.r4,.r5').removeClass('r1_ani r2_ani r3_ani').addClass('d_none');
        $('.r3').addClass('d_block');
        $('.icon').removeClass('d_none active d_block');
        $('.screen3 r3').addClass('d_block');
        $('#screen2').css('display', 'block');
        $('#screen1,#screen3,#screen4,#screen5,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('.arms,.legs,.torso').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont cont_g').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b1').addClass('d_none').removeClass('d_block');
        $('.done').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>Here are some pictures of children<br/>playing different sports!</span>');
        $('.pic_1, .btn_1, .pic_2, .btn_2, .pic_3, .btn_3').removeClass('right').addClass('trans');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        currentStep = 1;
        highlightElement();
        play_audio_h('here_are_some_pictures', 'b_text_w');
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.arms,.torso,.legs').removeClass('trans right wrong');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable').addClass('d_block').removeClass('d_none');
        $('.r3,.r4,.r5').removeClass('r1_ani r2_ani r3_ani').addClass('d_none');
        $('.r3').addClass('d_block');
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen3').css('display', 'block');
        $('.b_text_w').html('<span>Pick which part of the body moves the<br/>most in each sport!</span>');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        pause_all();
        currentStep = 2;
        highlightElement();
       // play_audio_h('pick_which_part_body', 'b_text_w');
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen4').css('display', 'block');
        $('#square_legs4').removeClass('d_none').addClass('d_block');
        $('#screen4 .legs .right_sign').removeClass('d_block d_none').addClass('d_none');
        $('.r3,.r4,.r5').removeClass('d_block');
        $('.r4').addClass('d_block');
        $('.b_text_w').html('<span>Pick which part of the body moves the<br/>most in each sport!</span>');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        pause_all();
        currentStep = 2;
        highlightElement();
     //   play_audio_h('pick_which_part_body', 'b_text_w');
    });

    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen5').css('display', 'block');
        $('#square_legs5').removeClass('d_none').addClass('d_block');
        $('#square_torso5').removeClass('d_none').addClass('d_block');
        $('#screen5 .torso .right_sign').removeClass('d_block d_none').addClass('d_none');
        $('.r3,.r4,.r5').removeClass('d_block');
        $('.r5').addClass('d_block');
        $('.b_text_w').html('<span>Pick which part of the body moves the<br/>most in each sport!</span>');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        pause_all();
        currentStep = 2;
        highlightElement();
      //  play_audio_h('pick_which_part_body', 'b_text_w');
    });

    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen5a').css('display', 'block');
        $('.b_text_w').html('<span>Well done! You correctly picked the parts of<br/>the body that move the most!</span>');
        $('.done').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('right');
        ;
        pause_all();
        currentStep = 3;
        highlightElement();
        //play_audio_h('well_done_parts_body', 'b_text_w');
        $('.right_sign,.right_ans').removeClass('d_none').addClass('block');
    });

    $('#cont5a').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen5a,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen6').css('display', 'block');
        $('.b_text_w').html('<span>Which sports do you know?</span>');
        $('.done').removeClass('d_none').addClass('d_block');
        pause_all();
        currentStep = 4;
        highlightElement();
        //play_audio_h('which_sports_you_know', 'b_text_w');
    });

    /*
     $('#cont6').bind('touchstart click',function(e){
     e.preventDefault();
     $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen5a,#screen6,#screen8').css('display','none');
     $('#screen7').css('display','block');
     });
     */

    $('#screen3 .legs').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.b_text_w').html('<span>Well done! Your legs move the most<br/>when you play soccer!</span>');
        currentStep = 7;
        highlightElement();
        //play_audio_h1('soccer_correct', 'b_text_w', 'ans_correct');
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $('.legs').removeClass('trans right wrong').addClass('right');
        $('#screen3 .legs .right_sign').removeClass('d_none').addClass('d_block');
        $('.r3').addClass('r1_ani');
        $('.arms,.torso').removeClass('wrong').addClass('trans');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        setTimeout(function () {
            $('.r3').removeClass('d_block').addClass('d_none');
            $('#square_legs3').removeClass('d_block d_none').addClass('d_block');
        }, 700);
    });
    $('#screen3 .arms').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen3 .arms .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
    //    play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });
    $('#screen3 .torso').bind('touchstart click', function (e) {
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen3 .torso .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
        play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('#screen4 .torso').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.b_text_w').html('<span>Well done! Your move your torso the most<br/> when balancing on a skateboard!</span>');
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $('.torso').removeClass('trans right wrong').addClass('right');
        $('#screen4 .torso .right_sign').removeClass('d_none').addClass('d_block');
        currentStep = 6;
        highlightElement();
        //play_audio_h1('skateboard_correct', 'b_text_w', 'ans_correct');
        $('.r4').addClass('r2_ani');
        $('.torso').addClass('right');
        $('.arms,.legs').removeClass('wrong').addClass('trans');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        setTimeout(function () {
            $('.r4').removeClass('d_block').addClass('d_none');
            $('#square_torso4').removeClass('d_none d_block').addClass('d_block');
        }, 700);
    });
    $('#screen4 .arms').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen4 .arms .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
        //play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });
    $('#screen4 .legs').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen4 .legs .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
       // play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('#screen5 .arms').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.b_text_w').html('<span>Well done! The children playing basketball<br/>in a wheelchair are moving their arms the most!</span>');
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $('.arms').removeClass('trans right wrong').addClass('right');
        $('#screen5 .arms .right_sign').removeClass('d_none').addClass('d_block');
        currentStep = 8;
        highlightElement();
        //play_audio_h1('basketball_correct', 'b_text_w', 'ans_correct');
        $('.r5').addClass('r3_ani');
        $('.arms').addClass('right');
        $('.torso,.legs').removeClass('wrong').addClass('trans');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        setTimeout(function () {
            $('#square_arms5').removeClass('d_none').addClass('d_block');
            $('.r5').removeClass('d_none d_block active').addClass('d_none');
        }, 700);
    });
    $('#screen5 .torso').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen5 .torso .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
        //play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });
    $('#screen5 .legs').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.arms,.torso,.legs').removeClass('trans right wrong').addClass('trans');
        $(this).removeClass('trans right wrong').addClass('wrong');
        $('.wrong_sign').removeClass('d_block').addClass('d_none');
        $('#screen5 .legs .wrong_sign').removeClass('d_none').addClass('d_block');
        $('.b_text_w').html('<span>That\'s not the part of the body that<br/>moves the most! Try again!</span>');
        currentStep = 5;
        highlightElement();
        //play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('.pic_1, .btn_1').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.highlight').removeClass('highlight');
        $('.pic_1, .btn_1').addClass('right');
        play_audio_h('basketball');
    });

    $('.pic_2, .btn_2').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.b_text_w').removeClass('highlight');
        $('.pic_2, .btn_2').addClass('right');
        play_audio_h('soccer');
        $('.highlight').removeClass('highlight');
    });

    $('.pic_3, .btn_3').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        $('.highlight').removeClass('highlight');
        $('.pic_3, .btn_3').addClass('right');
        play_audio_h('skateboarding');
    });


});

function count_num() {
    if (count == 9) {
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.done').addClass('d_block');
        $('.arms,.torso,.legs').addClass('right');
        $('.right_sign').addClass('d_block');
        pause_all();
        play_audio('activity_done');
        $('.disable_b1').addClass('d_block');
        count = 0;
    }
}

/*function play_audio(audio) {
    var aud = document.getElementById(audio);
    aud.muted = false;
    if (aud.paused) {
        aud.play();
    } else {
        aud.play();
    }
}

function play_audio_h(audio, high) {
    clearTimeout(x1);
    var aud = document.getElementById(audio);
    if (aud.paused) {
        aud.play();
        $('.disable_b1').addClass('d_block');
        $('.' + high + ' span').addClass('highlight');
        $('.' + high + ' span span').removeClass('highlight');
        var x1 = setTimeout(function () {
            $('.' + high + ' span').removeClass('highlight');
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, aud.duration * 1000);
    }
}

function pause_all() {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}

function play_audio_h(audio, high) {
    var aud = document.getElementById(audio);
    if (aud.muted == false) {
        $('.highlight').removeClass('highlight');
        stopAllTimeouts();
        if (aud.paused) {
            aud.play();
            $('.' + high + ' span').addClass('highlight');
            $('.' + high + ' span span').removeClass('highlight');
            setTimeout(function () {
                $('.' + high + ' span').removeClass('highlight');
            }, aud.duration * 1000);
        } else {
            aud.pause(); // Stop playing
            aud.currentTime = 0; // Reset time
        }
    } else {
        $('.' + high + ' span').removeClass('highlight');
    }
}

function play_audio_h1(audio, high, audio1) {
    $('.highlight').removeClass('highlight');
    stopAllTimeouts();
    var aud = document.getElementById(audio);
    var aud1 = document.getElementById(audio1);
    if (aud.paused) {
        aud1.play();
        setTimeout(function () {
            aud.play();
        }, 200);
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

function stopAllTimeouts() {
    for (var i = setTimeout(function () {}, 0); i > 0; i--) {
        window.clearInterval(i);
    }
    
}*/

function clickonce(id2) {
    $("#" + id2).siblings().removeClass('wrong');
    $("#" + id2).addClass('wrong');
}

var count = 0;

function turnOffMediaOverlay(e) {
    e.preventDefault();
    $('.highlight').removeClass('highlight').css({'background-color': 'transparent'});
    var audios = document.getElementsByTagName('audio');
    $('.d_audio').removeClass('d_block').addClass('d_none');
    $('.a_audio').removeClass('d_none').addClass('d_block');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
            audios[i].muted = true;
//			audios[i].currentTime = 0;
        }
    }
    for (var i = setTimeout(function () {}, 0); i > 0; i--) {
        window.clearInterval(i);
    }
}

function turnOnMediaOverlay(e) {
    e.preventDefault();
    var audios = document.getElementsByTagName('audio');
    $('.a_audio').removeClass('d_block').addClass('d_none');
    $('.d_audio').removeClass('d_none').addClass('d_block');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].muted = false;
        }
    }
    for (var i = setTimeout(function () {}, 0); i > 0; i--) {
        window.clearInterval(i);
    }
}