QuizMulti = function(selector, options) {
  var self = this;
  self.isRTL = false;
  self.default = {
    risposte: [],
    messaggioNonCompletato: 'Missing Answers!',
    messaggioTutteCorrette: 'Perfect!',
    countdown: false,
    save: false,
  };

  self.fixRTL = function(obj, selector) {
    try {
      // reverse swiper slides order
      $(selector + ' .practicediv.swiper-container > ol.practicelist.swiper-wrapper').attr('dir', 'rtl');
      $(selector + ' .practicediv.swiper-container > ol.practicelist.swiper-wrapper').children().each(
        function(i, c) {
          $(c).attr('dir', 'rtl');
          $(selector + ' .practicediv.swiper-container > ol.practicelist.swiper-wrapper').prepend(c);
        });
    } catch (err) {
      console.log(err);
    }
    try {
      // move checkbox images (background) to be right-aligned
      $('div' + selector + ' input.css-checkbox + label.css-label').appendValueToStyleAttribute('background-position: right 3px !important');
    } catch (err) {
      console.log(err);
    }
    try {
      // move label to the left 
      var bgSize = parseInt($('div' + selector + ' input.css-checkbox + label.css-label').css('background-size'));
      $('div' + selector + ' .practicediv .choices .choice-content').css('margin-right', (bgSize + 10) + 'px');
    } catch (err) {
      console.log(err);
    }

    try {
      // reverse answers
      obj.options.risposte.reverse();
    } catch (err) {
      console.log(err);
    }
  }

  self.fixRTLAfterInit =  function(obj, selector) {
    try {
      $(selector + ' .title').children().each(function(i, c) {
        if ($(c).hasClass('label')) $(c).hide();
        $(selector + ' .title').prepend(c);
      });
    } catch (err) {
      console.log(err);
    }
    try {
      $(selector).appendValueToStyleAttribute('text-align:right !important');
    } catch (err) {
      console.log(err);
    }
    try {
      if (typeof obj.mySwiper == 'undefined') {
        $(selector + ' .practice .practicediv.swiper-container .practicelist.swiper-wrapper .swiper-slide').appendValueToStyleAttribute('float:right !important');
      }
    } catch (err) {
      console.log(err);
    }
  }

  self.fixFinalSummaryRTL = function(selector) {
    try {
      // fix text positioning
      var childrenValues = $('div' + selector + ' .finale-quiz');
      childrenValues.each(function(i) {
        if (parseInt(i) < (childrenValues.length - 1)) {
          $(this).appendValueToStyleAttribute('margin-left:20px !important');
        } else {
          $(this).appendValueToStyleAttribute('margin-left:2px !important');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  self.options = $.extend({}, self.default, options);
  self.element = $(selector);
  self._readonly = false;
  self._countdown = null;
  self.countDomande = $('.practicelist .multiple-choice-problem', self.element).length;
  self.hasBeenReset = false;
  try {
    if ((getComputedStyle($('' + selector)[0]).direction).toLowerCase() == "rtl") {
      self.isRTL = true;
      self.fixRTL(self, selector);
    }
  } catch (err) {
    console.log(err);
  }

  if ($('.multiple-choice-problem', self.element).length > 1) {
    window.slider = self.mySwiper = new Swiper(selector + ' .swiper-container', {
      slideElement: 'li',
      onFirstInit: function() {
        $('.practicediv > header h1', self.element).append("<span class='counter'>(1/" + self.countDomande + ")</span>");
      },
      onInit: function() {
        if (self.isRTL) {
          $(selector).hide();
          try {
            self.mySwiper.swipeTo(parseInt(self.mySwiper.slides.length) - 1);
          } catch (err) {
            console.log(err);
          }
          $(selector).show();
        }
      },
      onSlideChangeStart: function() {
        $(selector + ' .arrow-left').css("display", "none");
        $(selector + ' .arrow-right').css("display", "none");
        return true;
      },
      onSlideChangeEnd: function() {
        self._checkArrows();
        if (!self.hasBeenReset) {
          if (!self.isRTL) {
            if (self.mySwiper.previousIndex != null && self.mySwiper.previousIndex < self.mySwiper.activeIndex) {
              self.element.trigger('SCQuizPageNext');
            } else if (self.mySwiper.previousIndex != null && self.mySwiper.previousIndex > self.mySwiper.activeIndex) {
              self.element.trigger('SCQuizPagePrevious');
            }
          } else {
            if (self.mySwiper.previousIndex != null && self.mySwiper.previousIndex > self.mySwiper.activeIndex) {
              self.element.trigger('SCQuizPageNext');
            } else if (self.mySwiper.previousIndex != null && self.mySwiper.previousIndex < self.mySwiper.activeIndex) {
              self.element.trigger('SCQuizPagePrevious');
            }
          }
        } else {
          self.hasBeenReset = false;
        }
        if (!self.isRTL) {
          if (self.mySwiper.activeIndex != self.mySwiper.slides.length - 1) {
            $('.practicediv > header .counter', self.element).html("(" + (self.mySwiper.activeIndex + 1) + "/" + (self.mySwiper.slides.length - 1) + ")");
          } else {
            $('.practicediv > header .counter', self.element).html("");
          }
        } else {
          if (self.mySwiper.activeIndex != 0) {
            var currNumber = self.mySwiper.slides.length - self.mySwiper.activeIndex;
            $('.practicediv > header .counter', self.element).html("(" + (currNumber) + "/" + (self.mySwiper.slides.length - 1) + ")");
          } else {
            $('.practicediv > header .counter', self.element).html("");
          }
        }
      }
    });
    var $buttons = $(selector + " .quiz-buttons");
    $buttons.remove();
    var checkSlide = self.mySwiper.createSlide();
    checkSlide.html(
      $buttons
      .clone().wrap("<div></div>")
      .parent()
      .append("<div class='conteggio-finale'></div>")
      .append("<div class='messaggio-finale'></div>")
      .html()
    );
    $(checkSlide).addClass("multiple-choice-problem summary");
    if (self.isRTL) {
      try {
        checkSlide.prepend();
      } catch (err) {
        console.log(err);
      }
    } else {
      checkSlide.append();
    }
    $(selector + " .quiz-buttons").show();

    $(selector + ' .arrow-left').on(window.touchDownEvent, function(e) {
      e.preventDefault();
      self.mySwiper.swipePrev();
    });
    $(selector + ' .arrow-right').on(window.touchDownEvent, function(e) {
      e.preventDefault();
      self.mySwiper.swipeNext();
    })
    self._checkArrows = function() {
      if (self.mySwiper.activeIndex == 0)
        $(selector + ' .arrow-left').css("display", "none");
      else
        $(selector + ' .arrow-left').fadeIn(100);
      if (self.mySwiper.activeIndex == self.mySwiper.slides.length - 1)
        $(selector + ' .arrow-right').css("display", "none");
      else
        $(selector + ' .arrow-right').fadeIn(100);
    }
    self._checkArrows();
  } else {
    $(selector + ' .arrow-left').remove();
    $(selector + ' .arrow-right').remove();
    $('.quiz-buttons', self.element).css("paddingTop", 0).show();
  }
  $('.multiple-choice-problem', self.element).css("visibility", "visible");

  if (self.isRTL) {
    self.fixRTLAfterInit(self, selector);
  }

  self._create = function() {
    $('.practicelist .multiple-choice-problem .choices .choice-content', self.element).each(function() {
      var _fs = $(this).css("font-size").replace("px", "");

    });
    if (self._readonly === false && self.options.countdown === true)
      self._startCountdown();
    $('.practicelist input', self.element).on("change", function() {
      self._saveForm();
    });

    $('.quiz_reset', self.element).on(window.touchDownEvent, function(event) {
      setTimeout(function() {
        $('.conteggio-finale', self.element).empty();
        $('.messaggio-finale > p', self.element).empty();
        $('.messaggio-finale', self.element).empty();
        $('.messaggio-finale', self.element).hide();
        self.hasBeenReset = true;
        self._enableForm();
        self.element.trigger('SCQuizReset');
      }, 100);
      return false;
    });


    self._contaMissing = function() {
      var miss = $('.practicelist .multiple-choice-problem:not(.summary)', self.element).length;
      $('.practicelist .multiple-choice-problem:not(.summary)', self.element).each(function(num_domanda, domanda) {
        if ($(':checked', this).length > 0) {
          miss--;
        }
      });
      return miss;
    }

    $('input[type=checkbox], input[type=radio]', self.element).change(function() {
      $('.messaggio-finale', self.element).hide();
      $('.practicelist .multiple-choice-problem .quiz-choice-right', self.element).removeClass("quiz-choice-right");
      $('.practicelist .multiple-choice-problem .quiz-choice-wrong', self.element).removeClass("quiz-choice-wrong");
      $('.practicelist .multiple-choice-problem .quiz-choice-missed', self.element).removeClass("quiz-choice-missed");
      $('.conteggio-finale', self.element).empty().hide();
      self.element.trigger('SCQuizAnswerChanged');
    });

    $('.quiz_check', self.element).on(window.touchDownEvent, function(event) {
      event.preventDefault();
      self._saveForm();
      $('.messaggio-finale', self.element).hide();
      $('.practicelist .multiple-choice-problem .quiz-choice-right', self.element)
        .removeClass("quiz-choice-right");
      $('.practicelist .multiple-choice-problem .quiz-choice-wrong', self.element)
        .removeClass("quiz-choice-wrong");
      $('.practicelist .multiple-choice-problem .quiz-choice-missed', self.element)
        .removeClass("quiz-choice-missed");

      $('.conteggio-finale', self.element).empty();
      $('.messaggio-finale > p', self.element).empty();
      $('.messaggio-finale', self.element).empty();
      $('.messaggio-finale', self.element).hide();

      if (($('.multiple-choice-problem', self.element).length > 1) &&
        ((!self.isRTL && self.mySwiper.activeIndex != self.mySwiper.slides.length - 1) ||
          (self.isRTL && self.mySwiper.activeIndex != 0)
        )) {
        return;
      }

      /* altrimenti imposto le classi opportune su ogni domanda/risposta e disabilito il form*/
      $('.practicelist .multiple-choice-problem:not(.summary)', self.element).each(function(num_domanda, domanda) {
        $(domanda).removeClass("quiz-question-right");
        $(domanda).removeClass("quiz-question-missed");
        $(domanda).removeClass("quiz-question-wrong");
        var $risposte = $("input", $(domanda));
        var tentativi = [];
        var stato = 'missed';
        $risposte.each(function(num_risposta, risposta) {
          var tentativo = $(risposta).is(":checked") / 1;
          var giusta = self.options.risposte[num_domanda][num_risposta];

          if (tentativo && tentativo === giusta)
            $(risposta).parent().addClass("quiz-choice-right");
          if (tentativo && tentativo !== giusta)
            $(risposta).parent().addClass("quiz-choice-wrong");
          if (!tentativo && giusta)
            $(risposta).parent().addClass("quiz-choice-missed");
        });
        if ($("li", $(domanda)).filter(".quiz-choice-wrong").length > 0)
          stato = 'wrong';
        else if ($("li", $(domanda)).filter(".quiz-choice-right").length > 0 && $("li", $(domanda)).filter(".quiz-choice-missed").length > 0)
          stato = 'wrong';
        else if ($("li", $(domanda)).filter(".quiz-choice-right").length > 0)
          stato = 'right';
        $(domanda).addClass("quiz-question-" + stato);
      });

      if (!self.isRTL) {
        $('.conteggio-finale', self.element)
          .empty()
          .append("<div class='finale-quiz finale-quiz-choice-right'></div><span>" + $(".quiz-question-right", self.element).length + "</span>")
          .append("<div class='finale-quiz finale-quiz-choice-wrong'></div><span>" + $(".quiz-question-wrong", self.element).length + "</span>")
          .append("<div class='finale-quiz finale-quiz-choice-missed'></div><span>" + $(".quiz-question-missed", self.element).length + "</span>")
          .show();
      } else {
        $('.conteggio-finale', self.element)
          .empty()
          .append("<span>" + $(".quiz-question-right", self.element).length + "</span><div class='finale-quiz finale-quiz-choice-right'></div>")
          .append("<span>" + $(".quiz-question-wrong", self.element).length + "</span><div class='finale-quiz finale-quiz-choice-wrong'></div>")
          .append("<span>" + $(".quiz-question-missed", self.element).length + "</span><div class='finale-quiz finale-quiz-choice-missed'></div>");
        self.fixFinalSummaryRTL(selector);
        $('.conteggio-finale', self.element).show();
      }
      if ($(".quiz-question-right", self.element).length !== self.countDomande) {
        if ($(".quiz-question-missed", self.element).length > 0) {
          $('.messaggio-finale', self.element).append("<p></p>").html();
          $('.messaggio-finale > p', self.element).html(self.options.messaggioNonCompletato);
          $('.messaggio-finale', self.element).show();
          self.element.trigger('SCQuizCompletedMissingAnswers');
        } else {
          self.element.trigger('SCQuizCompletedSomeWrongAnswers');
        }
      } else {
        $('.messaggio-finale', self.element).append("<p></p>").html();
        $('.messaggio-finale > p', self.element).html(self.options.messaggioTutteCorrette);
        $('.messaggio-finale', self.element).show();
        self.element.trigger('SCQuizCompletedAllCorrectAnswers');
      }

    });
  };

  $('label', self.element).on(window.touchDownEvent, function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (window.touchDownEvent != "mousedown") {
      var checkID = "#" + $(this).attr("for");
      if ($(checkID).attr("type") == "radio") {
        $(checkID).prop("checked", true);
      } else {
        $(checkID).prop("checked", (!$(checkID).prop("checked")));
      }
      $(checkID).trigger("change");
    }
  });

  self._destroy = function() {
    clearInterval(self._countdown);
  };

  self._startCountdown = function() {
    if (this.options.countdown === false)
      return;
    self._stopCountdown();
    $('.countdown', self.element).html("" + this.options.countdown + "");

    self._countdown = setInterval(function() {
      if ($('.countdown', self.element).html() / 1 == 0) {
        clearInterval(self.options._countdown);
        $("button, input", self.element).attr("disabled", "disabled");
        return;
      }
      $('.countdown', self.element).html($('.countdown', self.element).html() / 1 - 1);
    }, 1000);
  };

  self._stopCountdown = function() {
    if (self._countdown)
      clearInterval(self._countdown);
  };

  self._disableForm = function() {
    this._readonly = true;
    self._stopCountdown();
    self._saveForm();
    $("input", self.element).filter(":not(.quiz_reset)").attr("disabled", "disabled");
  };

  self._enableForm = function() {
    this._readonly = false;
    if (self.options.countdown)
      self._startCountdown();
    setTimeout(function() {
      $('.practicelist .multiple-choice-problem li', self.element).removeClass("quiz-choice-right").removeClass("quiz-choice-wrong").removeClass("quiz-choice-missed");
    }, 100);
    $('.practicelist .multiple-choice-problem li', self.element).removeClass("quiz-choice-right").removeClass("quiz-choice-wrong").removeClass("quiz-choice-missed");
    $("button, input", self.element).removeAttr("disabled");
    $("button, input:checked", self.element).removeAttr("checked");
    self._saveForm();
    if (self.mySwiper) {
      if (self.isRTL) {
        self.mySwiper.swipeTo((self.mySwiper.slides.length) - 1, 200);
        setTimeout(function() {
          self._checkArrows();
        }, 10);
      } else {
        self.mySwiper.reInit();
        self.mySwiper.swipeTo(0, 200);
      }
    }
  };

  self._saveForm = function() {
    if (self.options.save === false)
      return;
    var checked = [];
    $('.practicelist input', self.element).each(function(num_risposta, risposta) {
      if ($(risposta).is(":checked"))
        checked[num_risposta] = true;
      else
        checked[num_risposta] = false;
    });
    var status = {
      risposte: checked,
      tempo: $('.countdown', self.element).html() / 1,
      readonly: this._readonly
    }

    if (window.localStorage) {
      window.localStorage["data-" + self.element.attr("id")] = JSON.stringify(status);
    }
  };

  self._loadForm = function() {
    if (self.options.save === false)
      return;

    if (window.localStorage) {
      var status = JSON.parse(window.localStorage["data-" + self.element.attr("id")]);
      $('.practicelist input', self.element).each(function(num_risposta, risposta) {
        if (status.risposte && status.risposte[num_risposta] == true)
          $(risposta).attr("checked", "checked");
      });
      if (status.readonly === true) {
        this._readonly = true;
        this._disableForm();
      }
    }
  }

  self._loadForm();
  self._create();

  self.element.on(PubCoder.Events.Show, function(e) {
    self.element.trigger('SCQuizReady');
  });

  return self;
};



$.fn.appendValueToStyleAttribute = function(value) {
  try {
    var element = $(this);
    var tempVal = element.attr('style');
    if (typeof tempVal == 'undefined') {
      tempVal = '';
    }
    if (tempVal.length === 0 || !tempVal.trim()) {
      tempVal = value + ';';
    } else {
      if (tempVal.indexOf(value) > -1) return;
      tempVal += ' ;' + value + ';';
    }
    element.attr('style', tempVal);
  } catch (err) {
    console.log(err);
  }
}