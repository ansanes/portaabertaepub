$(document).ready(function () {
    currentPage = 7;
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
            signlanguageVideoName: 's13_15' // try again
        },
        {//4 answer incorrect
            audioElementId: 'answer_incorrect',
            highlightedElementId: 'head_3',
            secondElementId: 'ans_wrong',
            signlanguageVideoName: 's13_14' // well done
        },
        {//5 answer incorrect
            audioElementId: 'you_sorted_animal_people_plants',
            highlightedElementId: 'you_sorted',
            signlanguageVideoName: 'act_05_03' // you sorted the animals....
        }//play_audio_h('you_sorted_animal_people_plants', 'you_sorted');


    ];

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 1;
        disableVoiceOver();
        hideOptionsBar();
        play_audio('activity_start');
        highlightElement();
        $('.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
        $('#screen1,#screen3').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        count = 0;
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 2;
        pause_all();
        play_audio('menu_continue');
        $('#screen1,#screen2').css('display', 'none');
        $('#screen3').css('display', 'block');
        $('.head_3').html('<span>Sort the picture into the<br/>correct category!</span>');
        highlightElement();
        count = 0;
    });

    $('.exit,.done').bind('click', function (e) {
        pause_all();
        currentStep = 0;
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').removeClass('r1_ani r2_ani r3_ani r4_ani r5_ani r6_ani r7_ani r8_ani r9_ani');
        $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
        $('#screen1').css('display', 'block');
        $('#screen2,#screen3').css('display', 'none');
        $('#animal,#plant,#person').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.icon').removeClass('d_none active');
        $('.r1').addClass('active');
        $('.r1').attr('aria-hidden', 'false');
        $('.disable').addClass('d_block').removeClass('d_none');
        $('.disable_b1').removeClass('d_block').addClass('d_none');
        $('.done,.you_sorted').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block');
        count = 0;
    });

    $('#cont3').bind('touchstart click', function (e) {
        $('#animal,#person,#plant').removeClass('trans right wrong');
        $('.disable_b,.disable_b1').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio('menu_exit');
        count_num();
        $(this).removeClass('cont_g').addClass('cont');
        $('.disable').addClass('d_block').removeClass('d_none');
    });

    $('#restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        currentStep = 1;
        highlightElement();
        count = 0;
        $('.you_sorted').removeClass('d_block').addClass('d_none');
    });

    $('#restart1').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').removeClass('r1_ani r2_ani r3_ani r4_ani r5_ani r6_ani r7_ani r8_ani r9_ani');
        $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
        $('#animal,#plant,#person').removeClass('wrong right trans');
        $('.right_ans').removeClass('d_block').addClass('d_none');
        $('.icon').removeClass('d_none active');
        $('.r1').addClass('active');
        $('.r1').attr('aria-hidden', 'false');
        $('.disable').addClass('d_block').removeClass('d_none');
        $('.disable_b1').removeClass('d_block').addClass('d_none');
        $('.done').removeClass('d_block').addClass('d_none');
        $('.right_sign').removeClass('d_block');
        $('.you_sorted').removeClass('d_block').addClass('d_none');
        $('.head_3').html('<span>Sort the picture into the<br/>correct category!</span>');
        currentStep = 2;
        highlightElement();
        count = 0;
    });

    $('#animal').bind('touchstart click', function (e) {
        e.preventDefault();
        if ($('.r2').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            currentStep = 3;
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_dog').removeClass('d_none').addClass('d_block');
                $('.r2').removeClass('active').addClass('d_none');
            }, 700);
            $('.r2').addClass('r2_ani');
            $('.disable_b').addClass('d_block');
            $('#animal').addClass('right');
            $('#plant,#person').removeClass('wrong').addClass('trans');
            $('.r3').addClass('active');
            $('.r3').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r3').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            currentStep = 3
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);
            
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_duck').removeClass('d_none').addClass('d_block');
                $('.r3').removeClass('active').addClass('d_none');
            }, 700);
            $('.r3').addClass('r3_ani');
            $('.disable_b').addClass('d_block');
            $('#animal').addClass('right');
            $('#plant,#person').removeClass('wrong').addClass('trans');
            $('.r4').addClass('active');
            $('.r4').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r6').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            currentStep = 3
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_cat').removeClass('d_none').addClass('d_block');
                $('.r6').removeClass('active').addClass('d_none');
            }, 700);
            $('.r6').addClass('r6_ani');
            $('.disable_b').addClass('d_block');
            $('#animal').addClass('right');
            $('#plant,#person').removeClass('wrong').addClass('trans');
            $('.r7').addClass('active');
            $('.r7').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else {
            $('.head_3').html('<span>That\'s not the right category.<br/>Try again!</span>');
            pause_all();
            currentStep = 4
            if (isExtraHintsEnabled()) {
                highlightElement();
                play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
                playSignLanguageVideo("s13_14");
            }else{
                play_audio('ans_wrong');
            }
            $(this).removeClass('right trans').addClass('wrong');
            $('#plant,#person').removeClass('trans right wrong').addClass('trans');
        }
        count_num();
    });

    $('#person').bind('touchstart click', function (e) {
        e.preventDefault();
        if ($('.r1').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            $('.disable_b').addClass('d_block');
            setTimeout(function () {
                $('.r1').removeClass('active').addClass('d_none');
                $('#square_boy').removeClass('d_none').addClass('d_block');
            }, 700);
            $('.r1').addClass('r1_ani');
            $('#person').addClass('right');
            $('#plant,#animal').removeClass('wrong').addClass('trans');
            $('.r2').addClass('active');
            $('.r2').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r4').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);            
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            $('.disable_b').addClass('d_block');
            setTimeout(function () {
                $('.r4').removeClass('active').addClass('d_none');
                $('#square_man').removeClass('d_none').addClass('d_block');
            }, 700);
            $('.r4').addClass('r4_ani');
            $('#person').addClass('right');
            $('#plant,#animal').removeClass('wrong').addClass('trans');
            $('.r5').addClass('active');
            $('.r5').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r8').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);           
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('.r8').removeClass('active').addClass('d_none');
                $('#square_woman').removeClass('d_none').addClass('d_block');
            }, 700);
            $('.r8').addClass('r8_ani');
            $('.disable_b').addClass('d_block');
            $('#person').addClass('right');
            $('#plant,#animal').removeClass('wrong').addClass('trans');
            $('.r9').addClass('active');
            $('.r9').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else {
            $('.head_3').html('<span>That\'s not the right category.<br/>Try again!</span>');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
                playSignLanguageVideo("s13_14");
            }else{
                play_audio('ans_wrong');
            }
            $(this).removeClass('right trans').addClass('wrong');
            $('#plant,#animal').removeClass('trans right wrong').addClass('trans');
        }
        count_num();
    });

    $('#plant').bind('touchstart click', function (e) {
        e.preventDefault();
        if ($('.r5').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);          
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_hangingplant').removeClass('d_none').addClass('d_block');
                $('.r5').removeClass('active').addClass('d_none');
            }, 700);
            $('.r5').addClass('r5_ani');
            $('.disable_b').addClass('d_block');
            $('#plant').addClass('right');
            $('#animal,#person').removeClass('wrong').addClass('trans');
            $('.r6').addClass('active');
            $('.r6').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r7').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);           
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_pottedplant').removeClass('d_none').addClass('d_block');
                $('.r7').removeClass('active').addClass('d_none');
            }, 700);
            $('.r7').addClass('r7_ani');
            $('.disable_b').addClass('d_block');
            $('#plant').addClass('right');
            $('#animal,#person').removeClass('wrong').addClass('trans');
            $('.r8').addClass('active');
            $('.r8').attr('aria-hidden', 'false');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else if ($('.r9').hasClass('active')) {
            $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
            $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                playSignLanguageVideo('s13_15');
            }else{
                play_audio('ans_correct');
            }
            $('.disable_b1').removeClass('d_none').addClass('d_block');
            setTimeout(function () {
                $('.disable_b1').removeClass('d_block').addClass('d_none');
            }, 700);            
            count = count + 1;
            $('#animal,#person,#plant').removeClass('trans right wrong').addClass('trans');
            setTimeout(function () {
                $('#square_trees').removeClass('d_none').addClass('d_block');
                $('.r9').removeClass('active').addClass('d_none');
            }, 700);
            $('.r9').addClass('r9_ani');
            $('.disable_b').addClass('d_block');
            $('#plant').addClass('right');
            $('#animal,#person').removeClass('wrong').addClass('trans');
            $('#cont3').removeClass('cont').addClass('cont_g');
            $('.disable').addClass('d_none').removeClass('d_block');
        } else {
            $('.head_3').html('<span>That\'s not the right category.<br/>Try again!</span>');
            pause_all();
            if (isExtraHintsEnabled()) {
                play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
                playSignLanguageVideo("s13_14");
            }else{
                play_audio('ans_wrong');
            }
            $(this).removeClass('right trans').addClass('wrong');
            $('#animal,#person').removeClass('trans right wrong').addClass('trans');
        }
        count_num();
    });

});

function count_num() {
    if (count == 9) {
        $('.head_3').html('<span>Well done</span>');
        pause_all();
        currentStep = 5;
        highlightElement();
        play_audio('activity_done');
        $('.you_sorted').removeClass('d_none').addClass('d_block');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.done').addClass('d_block');
        $('#animal,#person,#plant').addClass('right');
        $('.right_sign').addClass('d_block');
        $('.right_ans').removeClass('d_none').addClass('d_block');
        $('.disable_b1').addClass('d_block');
        $('.icon').removeClass('d_block').addClass('d_none');
        count = 0;
    }
}

var count = 0;

function clickonce(id2) {
    $("#" + id2).siblings().removeClass('wrong');
    $("#" + id2).addClass('wrong');
}
