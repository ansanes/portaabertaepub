window.playerFunctions = {};
$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn 
            audioElementId: 'tap01',
            highlightedElementId: 'head_txt',
            signlanguageVideoName: 'act_03_01',
        },
        {//2 cont2
            audioElementId: 'did01',
            highlightedElementId: 'head_txt',
            signlanguageVideoName: 'act_03_09'
        }
    ];

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        disableVoiceOver();
        hideOptionsBar();
        $('#screen1,#screen3').removeClass('d_block').addClass('d_none');
        $('#screen2').removeClass('d_none').addClass('d_block');
        play_audio_file_highlight_element("tap.m4a","head_txt");
    });

    var reset = function () {
        $('.SCPageObject.SCImage').hide();
        $('.SCPageObject.SCText').hide();
        $('#obj45').removeClass('d_node').addClass('d_block');
        reset1();
        reset2();
    };

    $('.exit,.done').bind('click', function (e) {
        pause_all();
        stopCurrentSignLanguageVideo();
        showOptionsBar();
        play_audio('menu_exit');
        reset();
        $('#screen2,#screen3').removeClass('d_block').addClass('d_none');
        $('#screen1').removeClass('d_none').addClass('d_block');
    });

    $('#cont2').bind('click', function (e) {
        pause_all();
        play_audio('menu_continue');
        $('#screen1,#screen2').removeClass('d_block').addClass('d_none');
        $('#screen3').removeClass('d_none').addClass('d_block');
        play_audio_file_highlight_element("did.m4a","head_txt");
    });

    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();        
        play_audio('menu_restart');
        $('#screen1,#screen3').removeClass('d_block').addClass('d_none');
        $('#screen2').removeClass('d_none').addClass('d_block');
        reset();
        play_audio_file_highlight_element("tap.m4a","head_txt");
    });

});
