// Carousel
/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

// Additional Handlbars Helpers

    Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);

        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    });


// Live Loader

/// ===========================================
//  Carousel  Builder v1.0 PB
// ===========================================
var slideData = {};
    slideData.slides = [],
    slideData.spec ={},
    slideIDs=[];
    var cacheBuster = Math.random().toString(36).substr(2, 12);

    var visualID = $('.js_banner_wrap').data('visualid');
    var isROI = $('.js_banner_wrap').data('roi');

    slideGroupId = visualID ? visualID : '1e4c2dda-484b-498d-b4a5-0d7e38702162';
    console.info('Carousel ID:', slideGroupId);

    var masterDeliveryUrl = '//c1.adis.ws/cms/content/query?fullBodyObject=true&query=%7B"sys.iri"%3A"http%3A%2F%2Fcontent.cms.amplience.com%2F'+ slideGroupId +'"%7D&scope=tree&store=dfs&cacheBuster=' + cacheBuster;

    // create and issue the content delivery request
      var masterRequest = $.ajax({
        url: masterDeliveryUrl,
        async: false
      });

      masterRequest
      .done(function(data){
        var masterIDs = amp.inlineContent(data)[0];

         slideIDs = [
                    masterIDs.Carousel_slide1,
                    masterIDs.Carousel_slide2,
                    masterIDs.Carousel_slide3,
                    masterIDs.Carousel_slide4,
                    masterIDs.Carousel_slide5,
                    ];
        slideData.spec = {"roiPrices": isROI, "testDate" : masterIDs.testDate};


      })
      .fail(function(){
        console.log('Failed To Get Master ID Data');
      });







// build data into an object from array of IDs, via ajax
for(i=0; i < slideIDs.length; i++) {
// the content delivery api url for `BannerIMtest1`
var contentDeliveryUrl = '//c1.adis.ws/cms/content/query?fullBodyObject=true&query=%7B"sys.iri"%3A"http%3A%2F%2Fcontent.cms.amplience.com%2F'+ slideIDs[i] + '"%7D&scope=tree&store=dfs&cacheBuster=' + cacheBuster;

// create and issue the content delivery request
 $.ajax({
  url: contentDeliveryUrl,
  async: false
}) // render the content or display error response
.done(renderContent)
.fail(showErrorMessage);
}

if (slideData){
  renderCarousel();
}

function renderContent(data) {

// use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree
var contentTree = amp.inlineContent(data)[0];


    slideData.slides.push(contentTree);

// fetch the Handlebars template from the DOM
// var templateSource = $('#handlebars-template').html();
// var template = Handlebars.compile(templateSource);
}

function renderCarousel() {
  var template = Handlebars.template(AmpCa.templates.bannerMulti);
  console.log(slideData.spec);
  document.querySelectorAll(".js_banner_wrap")[0].innerHTML = template(slideData);
}


function showErrorMessage(err) {
  console.log('Delivery API Request Failure', err);
  $(document.body).append('<div class="error">An error occurred retrieving your content.<br/><br/>Please ensure that it is published.<br/><br/>Details of the error have been saved to the browser console.</div>');
}


// Carousel Functions
if(!dfs) {
  var dfs = {};
}
dfs.carouselText = function(target, text){
  var el = $('.' + target);
  el.text(text);
  if(el.length){
    return '.' + target + ' updated to ' + text;
  } else {
    return 'Error Updating Carousel, Element Not Found! :(';
  }
}

  // Countdowns

    if(!dfs){
      var dfs = {};
    }
    dfs.carCountdown = {
        init: function(){
          console.log('Countdown Init!');
          if($('.bannerTextContainer.carCountdown').length>0) {
            this.addCountDown();
          }
      },
        addCountDown: function(){
          $('.bannerTextContainer.carCountdown').each(function() {
            var _this = this,
            data = $(_this).data(),
            deadline = data.countdown,
            testDate = data.testdate,
            daysStart = data.startdays,
            messageC = data.messagec,
            messageD = data.messaged,
            textVariance1 = data.tv1,
            textVariance2 = data.tv2,
            textVariance3 = data.tv3,
            textVariance4 = data.tv4,
            messageID = data.messageid.replace('slide_','');
            // console.log(deadline + ' , ' + daysStart + ' , ' + messageID) ;
            // console.log(textVariance1,textVariance2,textVariance3,textVariance4);
            var countDownOBj = dfs.getTimeRemaining(deadline, testDate);

            // Check if this Slide needs a text Update

            dfs.checkTextData(textVariance1, messageID, testDate);
            dfs.checkTextData(textVariance2, messageID, testDate);
            dfs.checkTextData(textVariance3, messageID, testDate);
            dfs.checkTextData(textVariance4, messageID, testDate);

            // Check If this Slide Countdown is to begin.
            if( countDownOBj.total > 0 && countDownOBj.days < daysStart) {
              console.log('Show Countdown on Slide: ' + messageID );

              $('h2.message'+ messageID + 'b, h2.message'+ messageID + 'a').addClass('cdText');

              dayOrDays = countDownOBj.days > 1 ? "DAYS" : "DAY";
              var updateCountdown = setInterval(function(){
                    var countDownOBj = dfs.getTimeRemaining(deadline, testDate);

                    if(countDownOBj.hours < 10 ){
                      countDownOBj.hours = '0' + countDownOBj.hours;
                    }
                    if(countDownOBj.mins < 10 ){
                      countDownOBj.mins = '0' + countDownOBj.mins;
                    }
                    if(countDownOBj.seconds < 10 ){
                      countDownOBj.seconds = '0' + countDownOBj.seconds;
                    }
                    if(countDownOBj.days > 0) {
                      var line1 = "FINAL " + countDownOBj.days + " " + dayOrDays;
                    } else {
                      var line1 = "ENDS TODAY";
                    }

                    var line2 = countDownOBj.hours + " Hrs " + countDownOBj.minutes + " Mins " + countDownOBj.seconds + " Secs",
                    line3 = countDownOBj.days === 0 ? messageC : "";
                    line4 = countDownOBj.days === 0 ? messageD : "";

                    dfs.carouselText('message' + messageID + "a", line1);
                    dfs.carouselText('message' + messageID + "b", line2);
                    dfs.carouselText('message' + messageID + "c", line3);
                    dfs.carouselText('message' + messageID + "d", line4);


              }, 1000);
            } else {
              console.log('show Static text for slide ' + messageID);
            }
        });
      }
    }

  dfs.checkTextData = function(variance, mID, td){
    var v1 = variance.replace(/,\s+/g, ',').split(',');
      if(v1.length !== 6) {
        console.log('slide: ' + mID + ' Invalid Csv Data length, Skipping This Event! ('+ variance+ ')');
        return false;
      }
      if(td){
        var moment = new Date(td);
      } else {
        var moment = new Date();
      }


      var startDate = v1[0].split('/'), endDate = v1[1].split('/');
      var this_startDate = new Date(startDate[1]+'/' + startDate[0] +'/' + startDate[2] + ' 23:59:59');
      var this_endDate = new Date(endDate[1]+'/' + endDate[0] +'/' + endDate[2] + ' 23:59:59');
      // console.log('Now:' + moment)
      // console.info('S:', this_startDate);
      // console.info('E:', this_endDate);

      if(this_startDate <= moment && this_endDate >= moment){
        dfs.carouselText('message' + mID + "a", v1[2]);
        dfs.carouselText('message' + mID + "b", v1[3]);
        dfs.carouselText('message' + mID + "c", v1[4]);
        dfs.carouselText('message' + mID + "d", v1[5]);
      }
    }

  dfs.getTimeRemaining = function(endtime, testDate){
    if(testDate){
      var current_time = new Date(),
        hrs = current_time.getHours(),
        mins = current_time.getMinutes(),
        secs = current_time.getSeconds();
        testDate += ' ' + hrs + ':' + mins + ':' + secs;

      var t = Date.parse(endtime) - Date.parse(new Date(testDate));
    } else {
      var t = Date.parse(endtime) - Date.parse(new Date());
    }

  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

dfs.updateElement = function(){
  var test4Element = $('#dfsCarousel');
    if(test4Element.length) {
          $('#dfsCarousel').carousel({ interval: 6000});
          $('#dfsCarousel').carousel('pause');
        clearInterval(PollElement);
        console.log('Carousel Ready and Initiated : ' + PollElement);
        dfs.carCountdown.init();

    }
}

// start carousel if loaded..
var PollElement = setInterval(dfs.updateElement, 500);
