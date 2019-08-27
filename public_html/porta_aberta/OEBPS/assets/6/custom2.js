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
        $('.category').removeClass('wrong right trans');
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
    
    var types = activityData.types;
    var values = activityData.values;
    function findValue(name){
        for (var i=0; i < values.length;i++){
           var value = values[i];   
           if (value.name === name){
               return value;
           }
       }
    }
    for (var i = 0; i < types.length; i++) {        
        var type = types[i];        
        var typeId = "#"+type;
        $(typeId).bind('touchstart click', function (e) {
            e.preventDefault();
            var active = $( ".active" )[0];
            var activeId = active.id;
            var value = findValue(activeId);
            var type = this.id;
            var rClass = active.className.split(" ")[1];
            var rIndex = parseInt(rClass.substring(1));    
            var nextRClass = ".r"+(rIndex+1);
            if (value.type === type){
              $('.head_3').html('<span>Well done!<br/>You picked the right category!</span>');
                $('.r1,.r2,.r3,.r4,.r5,.r6,.r7,.r8,.r9').attr('aria-hidden', 'true');
                pause_all();
                currentStep = 3;
                if (isExtraHintsEnabled()) {
                    play_audio_h1('answer_correct', 'head_3', 'ans_correct');
                    playSignLanguageVideo('s13_15');
                } else {
                    play_audio('ans_correct');
                }
                $('.disable_b1').removeClass('d_none').addClass('d_block');
                setTimeout(function () {
                    $('.disable_b1').removeClass('d_block').addClass('d_none');
                }, 700);
                count = count + 1;                
                $('.category').removeClass('trans right wrong').addClass('trans');
                setTimeout(function () {
                    $('#square_'+value.name).removeClass('d_none').addClass('d_block');
                    $('.r'+rIndex).removeClass('active').addClass('d_none');
                }, 700);
                $('.r'+rIndex).addClass('r'+rIndex+'_ani');
                $('.disable_b').addClass('d_block');
                $('#'+type).addClass('right');
                $('.category').removeClass('wrong').addClass('trans');
                $(nextRClass).addClass('active');
                $(nextRClass).attr('aria-hidden', 'false');
                $('#cont3').removeClass('cont').addClass('cont_g');
                $('.disable').addClass('d_none').removeClass('d_block');
            }else{
                $('.head_3').html('<span>That\'s not the right category.<br/>Try again!</span>');
                pause_all();
                currentStep = 4
                if (isExtraHintsEnabled()) {
                    highlightElement();
                    play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
                    playSignLanguageVideo("s13_14");
                } else {
                    play_audio('ans_wrong');
                }                
                $('.category').removeClass('trans right wrong').addClass('trans');
                $("#"+type).removeClass('right trans').addClass('wrong');
            }
            count_num();
        });
    }    
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
