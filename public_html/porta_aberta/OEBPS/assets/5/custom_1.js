$(document).ready(function () {
    currentPage = 6;
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn 
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//2 cat
            audioElementId: 'cat_correct',
            highlightedElementId: 'head',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_04_04',
        },
        {//3 dog
            audioElementId: 'dog_incorrect',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        {//4 continue
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//5 rooster
            audioElementId: 'rooster_correct',
            highlightedElementId: 'head',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_04_06',
        },
        {//6 turkey
            audioElementId: 'turkey_incorrect',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        {//7 cont1 btn
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//8 cow
            audioElementId: 'cow_correct',
            highlightedElementId: 'head',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_04_08',
        },
        {//9 parrot
            audioElementId: 'parrot_incorrect',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        {//10 cont1a
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//11 bird
            audioElementId: 'bird_incorrect',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        {//12 bee
            audioElementId: 'bee_correct',
            highlightedElementId: 'head',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_04_10',
        },
        {//13 cont1b
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//14 duck
            audioElementId: 'duck_correct',
            highlightedElementId: 'head',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_04_12',
        },
        {//15 chicken
            audioElementId: 'chicken_incorrect',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_tryagain',
        },
        {//16 cont1c
            audioElementId: 'what_animal_is_making',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_02',
            highlightTimeout: 3900
        },
        {//17 duck
            audioElementId: 'well_done_all_animals',
            highlightedElementId: 'headw',
            signlanguageVideoName: 'act_04_13',
        },
        {//18 duck
            audioElementId: 'here_are_other_animals',
            highlightedElementId: 'headw',
            signlanguageVideoName: 'act_04_14',
        },
        {//19 continue
            audioElementId: 'chicken',
            highlightedElementId: 'head',
            signlanguageVideoName: 'act_04_18.mp4',
            highlightTimeout: 3900
        }
    ];
    dis();

    var menu_exit = document.getElementById("menu_exit");
    var menu_restart = document.getElementById("menu_restart");

    $('.for_click1').on("mouseenter", function () {
        $(this).addClass('pinkbulb');
    }).on("mouseleave", function () {
        $(this).removeClass('pinkbulb');
    });

    $('#sound1').bind('touchstart click', function (e) {
        e.preventDefault();
        play_audio('cataudio');
    });
    $('#sound2').bind('touchstart click', function (e) {
        e.preventDefault();
        play_audio('roosteraudio');
    });
    $('#sound2a').bind('touchstart click', function (e) {
        e.preventDefault();
        play_audio('cows');
    });
    $('#sound2b').bind('touchstart click', function (e) {
        e.preventDefault();
        play_audio('bee');
    });    
    $('#sound2c').bind('touchstart click', function (e) {
        e.preventDefault();
        play_audio('duck');
    });


    $('#square_cows').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('cows');
        $('.highlight').removeClass('highlight');
    });
    $('#square_duck').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('duck');
        $('.highlight').removeClass('highlight');
    });
    $('#square_bee').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('bee');
        $('.highlight').removeClass('highlight');
    });

    

    $('#cat_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 2;
        stopAllTimeouts();
        $('.head').html('<span>Well done!<br/>That is the sound a cat makes!</span>');
        playSignLanguageVideo("act_04_03");
        highlightElement();
        $('.disable').css('display', 'none');
        $(".cont").css({"background-image": "url(images/cont1.png)"});
        $(".b_text1").css({"color": "white"});
        $(this).addClass('right1');
        $('#dog_01').addClass('wrong ani_1');
        $("#dog_01").animate({height: "0px", opacity: "0", cursor: "default"});
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.text_0').addClass('highlight');
        }, 2400);
        setTimeout(function () {
            $('.text_0').removeClass('highlight');
        }, 6100);
    });

    $('#dog_01').bind('touchstart click', function (e) {
        e.preventDefault();
        stopAllTimeouts();
        currentStep = 3;
        $(this).addClass('wrong1');
        play_audio('ans_wrong');
        $('.head').html('<span>That\'s not the sound a dog makes!<br/>Try again!</span>');
        highlightElement();
    });
    
    $('#turkey_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 5;
        stopAllTimeouts();
        $('.head').html('<span>Well done!<br/>That is the sound a rooster makes!</span>');
        playSignLanguageVideo("act_04_03");
        highlightElement();
        $(this).addClass('right1');
        $('#rooster_01').addClass('wrong ani_1');
        setTimeout(function () {
            $('#rooster_01').removeClass('d_block').addClass('d_none');
        }, 200);
        $('.disable').css('display', 'none');
        $(".cont").css({"background-image": "url(images/cont1.png)"});
        $(".b_text1").css({"color": "white"});
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.text_0').addClass('highlight');
        }, 2900);
        setTimeout(function () {
            $('.text_0').removeClass('highlight');
        }, 6700);
    });

    $('#rooster_01').bind('touchstart click', function (e) {
        e.preventDefault();
        stopAllTimeouts();
        currentStep = 6;
        play_audio('ans_wrong');
        $(this).addClass('wrong1');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('.head').html('<span>That\'s not the sound a turkey makes!<br/>Try again!</span>');
        highlightElement();
    });

    $('#cow_01').bind('touchstart click', function (e) {
        e.preventDefault();
        stopAllTimeouts();
        currentStep = 8;
        $('.head').html('<span>Well done!<br/>That\'s the sound a cow makes!</span>');
        playSignLanguageVideo("act_04_03");
        highlightElement();
        $(this).addClass('right1');
        $('#parrot_01').addClass('wrong ani_1');
        setTimeout(function () {
            $('#parrot_01').removeClass('d_block').addClass('d_none');
        }, 200);
        $("#parrot_01").animate({height: "0px", opacity: "0", cursor: "default"});
        $('.disable').css('display', 'none');
        $(".cont").css({"background-image": "url(images/cont1.png)"});
        $(".b_text1").css({"color": "white"});
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.text_0').addClass('highlight');
        }, 2900);
        setTimeout(function () {
            $('.text_0').removeClass('highlight');
        }, 6900);
    });

    $('#parrot_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 9;
        stopAllTimeouts();
        $(this).addClass('wrong1');
        play_audio('ans_wrong');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('.head').html('<span>That\'s not the sound a parrot makes!<br/>Try again!</span>');
        highlightElement();
    });

    $('#bee_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 12;
        stopAllTimeouts();
        $('.head').html('<span>Well done!<br/>That\'s the sound a bee makes!</span>');
        playSignLanguageVideo("act_04_03");
        highlightElement();
        $(this).addClass('right1');
        $('#bird_01').addClass('wrong ani_1');
        $("#bird_01").animate({height: "0px", opacity: "0", cursor: "default"});
        $('.disable').css('display', 'none');
        $(".cont").css({"background-image": "url(images/cont1.png)"});
        $(".b_text1").css({"color": "white"});
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.text_0').addClass('highlight');
        }, 2900);
        setTimeout(function () {
            $('.text_0').removeClass('highlight');
        }, 6400);
    });

    $('#bird_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 11;
        stopAllTimeouts();
        $(this).addClass('wrong1');
        play_audio('ans_wrong');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('.head').html('<span>That\'s not the sound a bird makes!<br/>Try again!</span>');
        highlightElement();
    });

    $('#duck_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 14;
        stopAllTimeouts();
        $('.head').html('<span>Well done!<br/>That\'s the sound a duck makes! </span>');
        playSignLanguageVideo("act_04_03");
        highlightElement();
        $(this).addClass('right1');
        $('#chicken_01').addClass('wrong ani_1');
        $("#chicken_01").animate({height: "0px", opacity: "0", cursor: "default"});
        $('.disable').css('display', 'none');
        $(".cont").css({"background-image": "url(images/cont1.png)"});
        $(".b_text1").css({"color": "white"});
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.text_0').addClass('highlight');
        }, 2900);
        setTimeout(function () {
            $('.text_0').removeClass('highlight');
        }, 6900);
    });

    $('#chicken_01').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 15;
        stopAllTimeouts();
        $(this).addClass('wrong1');
        play_audio('ans_wrong');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('.head').html('<span>That\'s not the sound a chicken makes!<br/>Try again!</span>');
        highlightElement();
    });

    $('.exit,.done').bind('click', function (e) {
        pause_all();        
        currentStep = 0;
        menu_exit.play();
        stopCurrentSignLanguageVideo();
        showOptionsBar();
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen5,#screen6').css('display', 'none');
        $('#screen0').css('display', 'block');
    });

    

    $('#square_cat').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        play_audio('audio01');
        $('.highlight').removeClass('highlight');
    });

    $('#turkey01').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('turkey');
        setTimeout(function () {
            play_audio('turkey_example');
        }, 500);
    });
    $('#chicken01').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('chicken');
        setTimeout(function () {
            play_audio('chicken_example');
        }, 500);
    });

    $('#square_rooster').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('audio02');
        $('.highlight').removeClass('highlight');
    });

    $('#done').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen0').css('display', 'block');
        pause_all();
        menu_exit.play();
    });
    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        disableVoiceOver();
        hideOptionsBar();
        currentStep = 1;
        $('.disable_b1').addClass('d_block');
        $('#screen0,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('#cat_01').removeClass('right1');
        $('#dog_01').removeClass('wrong1');
        $("#dog_01").css({height: "430px", opacity: "1", cursor: "pointer", display: 'block'});
        $('.head').html('<span>What animal is making that sound?</span>');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('#turkey_01').removeClass('right1');
        $('#rooster_01').removeClass('wrong wrong1 ani_1');

        $("#rooster_01,#parrot_01,#dog_01,#bird_01,#chicken_01,#cat_01,#rooster_01,#cow_01,#bee_01,#duck_01").css({height: "430px", opacity: "1", cursor: "pointer", display: 'block'});
        $('#rooster_01,#parrot_01,#dog_01,#bird_01,#chicken_01,#cat_01,#rooster_01,#cow_01,#bee_01,#duck_01').removeClass('ani_1 d_none wrong1 right1').addClass('d_block');

        play_audio("cataudio");
        playSignLanguageVideo("meow");
        
        setTimeout(function () {
            highlightElement();
        }, 2500);
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);
    });
    
    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 1;
        pause_all();
        menu_restart.play();
        $('#screen0,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('#cat_01').removeClass('right1');
        $('#dog_01').removeClass('wrong1 ani_1');
        $("#dog_01").css({height: "430px", opacity: "1", cursor: "pointer", display: 'block'});       
        play_audio("cataudio");
        playSignLanguageVideo("meow");
        $('.head').html('<span>What animal is making that sound?</span>');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('#turkey_01').removeClass('right1');
        $('#rooster_01').removeClass('wrong wrong1 ani_1');
        $('.right').removeClass('right1');
        $('.wrong').removeClass('wrong1 ani_1');
        $(".wrong").css({height: "430px", opacity: "1", cursor: "pointer", display: 'block'});
        $("#rooster_01,#parrot_01,#dog_01,#bird_01,#chicken_01,#cat_01,#rooster_01,#cow_01,#bee_01,#duck_01").css({height: "430px", opacity: "1", cursor: "pointer", display: 'block'});
        $('#rooster_01,#parrot_01,#dog_01,#bird_01,#chicken_01,#cat_01,#rooster_01,#cow_01,#bee_01,#duck_01').removeClass('ani_1 d_none wrong1 right1').addClass('d_block');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        setTimeout(function () {
            highlightElement();
        }, 2500);     
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);

    });
    
    
    $('#cont').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 4;
        pause_all();
        stopAllTimeouts();
        play_audio('menu_continue');
        $('#screen1').css('display', 'none');
        $('#screen2').css('display', 'block');
        setTimeout(function () {
            play_audio('roosteraudio');
            playSignLanguageVideo("cocka");
        }, 200);          
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        $('.head').html('<span>What animal is making that sound?</span>');
        setTimeout(function () {
            highlightElement();
        }, 2500);      
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);

    });
    

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        currentStep = 18;
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen5,#screen6').css('display', 'none');
        $('#screen4').css('display', 'block');
        pause_all();
        play_audio('menu_continue');
        highlightElement();
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        currentStep = 19;
        pause_all();
        stopAllTimeouts();
        play_audio('menu_continue');
        play_audio('turkey');
        playSignLanguageVideo('gobble');
        stopAllTimeouts();
        $('.msg1,.msg2').removeClass('highlight');
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen4,#screen6').css('display', 'none');
        $('#screen5').css('display', 'block');                          
        setTimeout(function () {
            if (isVoiceOverEnabled()){
                play_audio('turkey_example');
            }
            playSignLanguageVideo("act_04_16");
            $('.highlight').removeClass('highlight');
            $('.msg1').addClass('highlight');
        }, 1000);
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.msg2').addClass('highlight');
        }, 2800);
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
        }, 11000);
    });

    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();        
        $('.msg1,.msg2').removeClass('highlight');
        
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen3,#screen4,#screen5').css('display', 'none');
        $('#screen6').css('display', 'block');
        pause_all();
        play_audio('menu_continue');     
        play_audio('chicken');
        playSignLanguageVideo('cluck');
        setTimeout(function () {
            if (isVoiceOverEnabled()){
                play_audio('chicken_example');
            }
            playSignLanguageVideo('act_04_18');
            $('.highlight').removeClass('highlight');
            $('.msg1').addClass('highlight');
        }, 1000);
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
            $('.msg2').addClass('highlight');
        }, 2800);
        setTimeout(function () {
            $('.highlight').removeClass('highlight');
        }, 7500);
    });

    

   /* $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
    });*/

    $('#cont1').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        currentStep = 7;
        $('#screen1,#screen2,#screen2b,#screen2c,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen2a').css('display', 'block');
        pause_all();
        play_audio('menu_continue');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        play_audio('cows');
        playSignLanguageVideo("moo");
        $('.head').html('<span>What animal is making that sound?</span>');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        setTimeout(function () {
            highlightElement();
        }, 2500);
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);
    });

    $('#cont1a').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        currentStep = 10;
        $('#screen1,#screen2,#screen2a,#screen2c,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen2b').css('display', 'block');
        
        play_audio('menu_continue');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        play_audio('bee');
        playSignLanguageVideo("buzz");
        $('.head').html('<span>What animal is making that sound?</span>');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        setTimeout(function () {
           highlightElement();
        }, 2500);               
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);
    });

    $('#cont1b').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        currentStep = 13;
        $('#screen1,#screen2,#screen2a,#screen2b,#screen3,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen2c').css('display', 'block');        
        play_audio('menu_continue');
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        play_audio('duck');
        playSignLanguageVideo("quack");
        $('.head').html('<span>What animal is making that sound?</span>');
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        setTimeout(function () {
           highlightElement();
        }, 2500);             
        setTimeout(function () {
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5400);
    });

    $('#cont1c').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        stopAllTimeouts();
        currentStep = 17;
        $('#screen1,#screen2,#screen2a,#screen2b,#screen2c,#screen4,#screen5,#screen6').css('display', 'none');
        $('#screen3').css('display', 'block');       
        play_audio('menu_continue');
        setTimeout(function () {
            play_audio('activity_done');
            playSignLanguageVideo("act_04_13");
        }, 200);
        $('.disable').css('display', 'block');
        $(".cont").css({"background-image": "url(images/cont.png)"});
        $(".b_text1").css({"color": "gray"});
        pause_all();
        highlightElement();
    });

});

function dis() {
    if ($('#cont').css('background-image') == "images/cont1.png") {
        $('.disable').css('display', 'none');
    } else if ($('#cont').css('background-image') == "images/cont.png") {
        $('.disable').css('display', 'block');
    }
}
