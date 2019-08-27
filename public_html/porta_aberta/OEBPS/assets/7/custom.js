$(document).ready(function () {
    currentPage = 8;
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn 
            audioElementId: 'here_are_all_animals',
            highlightedElementId: 'head_text1',
            signlanguageVideoName: 's06_01',            
        },
        {//2 ans_wrong
            audioElementId: 'ans_wrong',
            highlightedElementId: 'head',            
            signlanguageVideoName: 'act_04_04',
        },// play_audio('ans_wrong');
        {//3 ans_correct
            audioElementId: 'ans_correct',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        
        
    ];
    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        disableVoiceOver();
        hideOptionsBar();
        pause_all();
        play_audio('activity_start');
        $('.head_text1').removeClass('d_none').addClass('d_block');
        $('#screen1,#screen3,#screen4').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        currentStep = 1;
        highlightElement();
        playSignLanguageVideo("s06_02");
        //play_audio_h('here_are_all_animals', 'head_text1');
        $('.s3_w1,.s3_r1').css('border', '15px solid transparent');
        $('.pic_img2').css('display', 'block');
    });

    $('.card-inner').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('card_flip');
    });

    $('.s3_w1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.s3_w1').css('background-color', 'white');
        $(this).css('border', '15px solid red');
        pause_all();
        currentStep = 2;
        highlightElement();
       // play_audio('ans_wrong');
        $('.head_text1').html('<span>Are you sure? Try counting the pairs again!</span>');
        play_audio_h('are_you_sure', 'head_text1');
    });

    $('.s3_r1').bind('touchstart click', function (e) {
        e.preventDefault();
        $(this).css('border', '15px solid #80E015');
        $('.s3_w1').css('background-color', 'white');
        pause_all();
        currentStep = 3;
        highlightElement();
        play_audio('ans_correct');
        $('.head_text1').html('');        
        $('#cont3').removeClass('cont').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
    });

    $('.done').bind('click', function (e) {
        pause_all();
        play_audio('menu_exit');
        stopCurrentSignLanguageVideo();
        $('.head_text1').removeClass('d_none').addClass('d_block');
        $('#screen1').css('display', 'block');
        $('#screen2,#screen3,#screen4').css('display', 'none');
    });

    $('.exit').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('.head_text1').removeClass('d_none').addClass('d_block');
        $('#screen1').css('display', 'block');
        $('#screen2,#screen3,#screen4').css('display', 'none');
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('#cont2').removeClass('cont_g').addClass('cont');
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.head_text1').html('<span>Well Done! You found SIX pairs of Animals!</span>');
        play_audio_h('well_done_six_pairs', 'head_text1');
        $('#screen1,#screen2,#screen3').css('display', 'none');
        $('#screen4').css('display', 'block');
    });

});
 
function clickonce(id2) {
    $("#" + id2).siblings().removeClass('wrong');
    $("#" + id2).addClass('wrong');
}




