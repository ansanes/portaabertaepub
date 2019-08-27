$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn //play_audio_h('select_a_part', 'popup_text1');
            audioElementId: 'select_a_part',
            highlightedElementId: 'popup_text1',
            signlanguageVideoName: 's_07_02',
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
    var count = 0;

    $('.d_audio').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.highlight').removeClass('highlight').css({'background-color': 'transparent'});
        var audios = document.getElementsByTagName('audio');
        $(this).removeClass('d_block').addClass('d_none');
        $('.a_audio').removeClass('d_none').addClass('d_block');
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
                audios[i].pause();
                audios[i].muted = true;
                audios[i].currentTime = 0;
            }
        }
        for (var i = setTimeout(function () {}, 0); i > 0; i--) {
            window.clearInterval(i);
        }
    });

    $('.a_audio').bind('touchstart click', function (e) {
        e.preventDefault();
        var audios = document.getElementsByTagName('audio');
        $(this).removeClass('d_block').addClass('d_none');
        $('.d_audio').removeClass('d_none').addClass('d_block');
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
                audios[i].muted = false;
                audios[i].currentTime = 0;
            }
        }
        for (var i = setTimeout(function () {}, 0); i > 0; i--) {
            window.clearInterval(i);
        }
    });


    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('.cont_g,.cont').removeClass('cont_g').addClass('cont');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.right_wrong').removeClass('d_block').addClass('d_none');
        $('.w1').removeClass('wrong trans');
        $('.d1,.d2,.d3,.d4,.d5,.d6,.d7').removeClass('d_block').addClass('d_none');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.s3_a').removeClass('trans dotted right wrong');
        $('.cir').removeClass('d_none');
        count = 0;
        $('.head_3').html('<span>Try to name each part of the body!</span>');
        play_audio_h('try_to_name_each_part', 'head_3');
        setTimeout(function () {
            pause_all();
            play_audio_h('select_a_part', 'popup_text1');
        }, 2500);
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        disableVoiceOver();      
        currentStep = 1;
        play_audio('activity_start');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.right_wrong').removeClass('d_block').addClass('d_none');
        $('.w1').removeClass('wrong trans');
        $('.d1,.d2,.d3,.d4,.d5,.d6,.d7').removeClass('d_block').addClass('d_none');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.s3_a').removeClass('trans dotted right wrong');
        $('.cir').removeClass('d_none');
        count = 0;
        play_audio_h('try_to_name_each_part', 'head_3');
        playSignLanguageVideo("s07_01");
        setTimeout(function () {
            pause_all();
            highlightElement();
            //play_audio_h('select_a_part', 'popup_text1');
        }, 2500);
    });

    $('.done').bind('click', function (e) {
        pause_all();
        play_audio('menu_exit');
        stopCurrentSignLanguageVideo();
        hideOptionsBar();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.right_wrong').removeClass('d_block').addClass('d_none');
        $('.w1').removeClass('wrong trans');
        $('.d1,.d2,.d3,.d4,.d5,.d6,.d7').removeClass('d_block').addClass('d_none');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.s3_a').removeClass('trans dotted right wrong');
        $('.cir').removeClass('d_none');
        count = 0;
    });

    $('.exit').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        disableVoiceOver();
        stopCurrentSignLanguageVideo();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.disable_b,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.right_wrong').removeClass('d_block').addClass('d_none');
        $('.w1').removeClass('wrong trans');
        $('.d1,.d2,.d3,.d4,.d5,.d6,.d7').removeClass('d_block').addClass('d_none');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.s3_a').removeClass('trans dotted right wrong');
        $('.cir').removeClass('d_none');
        count = 0;
    });

    var c_1 = 0;
    $('.cir,.cont_g').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        c_1 = c_1 + 1;
    });

    $('.dotted').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('button_unavailable');
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d1').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos1,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.HEAD').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d2').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos4,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.NECK').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d3').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos3,.cir_pos6,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.ARMS').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont6').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d4').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos2,.cir_pos7,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.HANDS').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont7').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d5').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos5,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.TORSO').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont8').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d6').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos8,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.LEGS').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });
    $('#cont9').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.popup_text').html('<span>Select a part of<br/>the body, read<br/>the clue and choose<br/>an answer.</span>');
        $('.d7').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_none').addClass('d_block');
        $('.cir_pos9,.icon_pic').removeClass('d_block').addClass('d_none');
        $('.FEET').removeClass('r1 w1').addClass('dotted');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        count = count + 1;
        count_num();
    });

    function count_num() {
        if (count == 7) {
            $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
            $('#screen10').css('display', 'block');
            count = 0;
        }
    }

    $('.cir_pos1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen3,#screen2').css('display', 'block');
        $('.popup_text').html('<span>What part of the girl\'s body has eyes, a nose, and a mouth?</span>');
        $('.d_con,.sc_3_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_head', 'popup_text');
    });
    $('.cir_pos4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen5,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen4,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What connects the girl\'s head to her body and lets her move her head?</span>');
        $('.d_con,.sc_5_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_neck', 'popup_text');
    });
    $('.cir_pos3,.cir_pos6').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen6,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen5,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What pair of limbs hang down from the girl\'s shoulders?</span>');
        $('.d_con,.sc_4_icon,.sc_4a_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_arms', 'popup_text');
    });
    $('.cir_pos2,.cir_pos7').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen5,#screen4,#screen7,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen6,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What part of the girl\'s body has fingers and holds the skipping rope?</span>');
        $('.d_con,.sc_6_icon,.sc_6a_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_hands', 'popup_text');
    });
    $('.cir_pos5').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen8,#screen9,#screen10').css('display', 'none');
        $('#screen7,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What part of the girl\'s body is covered in a yellow and white striped shirt and is connected to her arms and legs?</span>');
        $('.d_con,.sc_7_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_torso', 'popup_text');
    });
    $('.cir_pos8').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen9,#screen10').css('display', 'none');
        $('#screen8,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What part of the body is the girl wearing blue jeans on and jumping off the ground with?</span>');
        $('.d_con,.sc_8_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_legs', 'popup_text');
    });
    $('.cir_pos9').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen10').css('display', 'none');
        $('#screen9,#screen2').css('display', 'block');
        $('.popup_text').removeClass('d_none').addClass('d_block');
        $('.popup_text').html('<span>What part of the body has toes and is covered by white shoes?</span>');
        $('.d_con,.sc_9_icon').removeClass('d_none').addClass('d_block');
        $('.circle').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        pause_all();
        play_audio_h('question_feet', 'popup_text');
    });

    $('.w1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.head_3').html('<span>That\'s not the right part of the body.<br/>Try Again!</span>');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('wrong');
        $('.right_wrong').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
        pause_all();
        play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
    });

    $('.r1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.head_3').html('<span>You picked the correct part of<br/>the body! Well Done!</span>');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('right');
        $('.right_wrong').removeClass('d_none').addClass('d_block');
        $('.right_wrong').attr('src', 'images/right_sign.png');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h1('answer_correct', 'head_3', 'ans_correct');
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        if (c_1 === 7) {
            pause_all();
            play_audio('well_done_all_parts');
            $('.head_3a span').addClass('highlight');
            setTimeout(function () {
                $('.head_3a span').removeClass('highlight');
            }, 3500);
            c_1 = 0;
        } else {
            pause_all();
            play_audio('menu_continue');
            $('.right_wrong').removeClass('d_block').addClass('d_none');
            $('.right_wrong').attr('src', 'images/wrong_sign.png');
            $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
            $('.disable_b').removeClass('d_block').addClass('d_none');
            $('.disable').removeClass('d_none').addClass('d_block');
            $('.cont_g').removeClass('cont_g').addClass('cont');
            $('.cont').removeClass('cont_g').addClass('cont');
            $('.head_3').html('<span>Try to name each part of the body!</span>');
            /*	$('.head_3').html('<span>Try to name each part of the body!</span>');
             play_audio_h('try_to_name_each_part','head_3');
             play_audio_h('select_a_part','popup_text1'); */
        }
    });

});