this.AmpCa=this.AmpCa||{},this.AmpCa.templates=this.AmpCa.templates||{},this.AmpCa.templates.bannerMulti_hpslot={1:function(n,a,l,e,t,i,o){var r,s,u=null!=a?a:n.nullContext||{};return'<div class="carouselContainer">\n    <div id="hpCarousel" class="carousel slide" data-ride="carousel" data-isroi="'+n.escapeExpression("function"==typeof(s=null!=(s=l.roi||(null!=a?a.roi:a))?s:l.helperMissing)?s.call(u,{name:"roi",hash:{},data:t}):s)+'">\n      \x3c!-- Indicators --\x3e\n      <ol class="carousel-indicators">\n'+(null!=(r=l.each.call(u,null!=a?a.slides:a,{name:"each",hash:{},fn:n.program(2,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'      </ol>\n\n      \x3c!-- Wrapper for slides --\x3e\n      <div class="carousel-inner">\n'+(null!=(r=l.each.call(u,null!=a?a.slides:a,{name:"each",hash:{},fn:n.program(5,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'      </div>\n\n      \x3c!-- Left and right controls --\x3e\n      <a class="left carousel-control" href="#hpCarousel" data-slide="prev">\n        <span></span>\n        <span class="sr-only">Previous</span>\n      </a>\n      <a class="right carousel-control" href="#hpCarousel" data-slide="next">\n        <span></span>\n        <span class="sr-only">Next</span>\n      </a>\n    </div>\n  </div>\n\n  <style>\n  /*  13th June 2018 v2 */\n  .uk, .roi {\n    text-align: center;\n    font-size: 14px;\n    padding: 20px;\n  }\n  .hideCountdown {\n    display:none;\n  }\n  .bannerTextContainer.carCountdown {\n    display: table;\n  }\n  .bannerTextWrapper{\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .bannerTextWrapper h2.cdText span {\n    margin: 0 1px;\n    font-size: 15px !important;\n  }\n'+(null!=(r=l.each.call(u,null!=a?a.slides:a,{name:"each",hash:{},fn:n.program(51,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"\n  </style>\n"},2:function(n,a,l,e,t){var i,o,r=null!=a?a:n.nullContext||{};return'          <li data-target="#hpCarousel" data-slide-to="'+n.escapeExpression("function"==typeof(o=null!=(o=l.index||t&&t.index)?o:l.helperMissing)?o.call(r,{name:"index",hash:{},data:t}):o)+'" '+(null!=(i=l.if.call(r,t&&t.first,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t}))?i:"")+"></li>\n"},3:function(n,a,l,e,t){return' class="active"'},5:function(n,a,l,e,t,i,o){var r,s,u=null!=a?a:n.nullContext||{},m=l.helperMissing,p=n.escapeExpression,c=n.lambda,d="function";return'          <div class="item '+(null!=(r=l.if.call(u,t&&t.first,{name:"if",hash:{},fn:n.program(6,t,0,i,o),inverse:n.noop,data:t}))?r:"")+" slideIndex"+p((l.inc||a&&a.inc||m).call(u,t&&t.index,{name:"inc",hash:{},data:t}))+'" data-roi="'+p(c(null!=o[1]?o[1].roi:o[1],a))+'">\n            <a href="'+p(typeof(s=null!=(s=l.productURL||(null!=a?a.productURL:a))?s:m)===d?s.call(u,{name:"productURL",hash:{},data:t}):s)+'">\n              <picture>\n                \x3c!-- WebP --\x3e\n\n                <source type="image/webp" media="(max-width: 1023px)"  srcset="https://'+p(c(null!=(r=null!=a?a.image:a)?r.defaultHost:r,a))+"/i/dfs/?layer0=[canvas=600,462]&layer1=[src=/i/dfs/"+p(c(null!=(r=null!=a?a.productImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.mobileproductimage:a,{name:"if",hash:{},fn:n.program(8,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&"+(null!=(r=l.if.call(u,null!=a?a.mobileMImageCrop:a,{name:"if",hash:{},fn:n.program(10,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.mobilepimagefullheight:a,{name:"if",hash:{},fn:n.program(12,t,0,i,o),inverse:n.program(14,t,0,i,o),data:t}))?r:"")+"]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.mobileSidebarImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(17,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.sideBarCharOnMobile:a,{name:"if",hash:{},fn:n.program(19,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&layer4=[src=/i/dfs/"+(null!=(r=l.if.call(u,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+p(c(null!=(r=null!=a?a.pricingImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.pricingImageCrop:a,{name:"if",hash:{},fn:n.program(23,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&anchor=br&right=0&bottom=30]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.EspotImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(25,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&qlt="+(null!=(r=l.if.call(u,null!=a?a.mobileslidequality:a,{name:"if",hash:{},fn:n.program(28,t,0,i,o),inverse:n.program(30,t,0,i,o),data:t}))?r:"")+'&fmt.jpeg.chroma=1,1,1&fmt.jpeg.interlaced=true&fmt=webp">\n\n\n\n                \x3c!-- Jpg --\x3e\n                <source media="(max-width: 1023px)"  srcset="https://'+p(c(null!=(r=null!=a?a.image:a)?r.defaultHost:r,a))+"/i/dfs/?layer0=[canvas=600,462]&layer1=[src=/i/dfs/"+p(c(null!=(r=null!=a?a.productImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.mobileproductimage:a,{name:"if",hash:{},fn:n.program(8,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&"+(null!=(r=l.if.call(u,null!=a?a.mobileMImageCrop:a,{name:"if",hash:{},fn:n.program(10,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.mobilepimagefullheight:a,{name:"if",hash:{},fn:n.program(12,t,0,i,o),inverse:n.program(14,t,0,i,o),data:t}))?r:"")+"]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.mobileSidebarImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(17,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.sideBarCharOnMobile:a,{name:"if",hash:{},fn:n.program(19,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&layer4=[src=/i/dfs/"+(null!=(r=l.if.call(u,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+p(c(null!=(r=null!=a?a.pricingImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.pricingImageCrop:a,{name:"if",hash:{},fn:n.program(23,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&anchor=br&right=0&bottom=30]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.EspotImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(25,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&qlt="+(null!=(r=l.if.call(u,null!=a?a.mobileslidequality:a,{name:"if",hash:{},fn:n.program(28,t,0,i,o),inverse:n.program(30,t,0,i,o),data:t}))?r:"")+'&fmt.jpeg.chroma=1,1,1">\n\n\n\n                <img src="https://'+p(c(null!=(r=null!=a?a.image:a)?r.defaultHost:r,a))+"/i/dfs/?layer0=[canvas=600,462]&layer1=[src=/i/dfs/"+p(c(null!=(r=null!=a?a.productImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.mobileproductimage:a,{name:"if",hash:{},fn:n.program(8,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&"+(null!=(r=l.if.call(u,null!=a?a.mobileMImageCrop:a,{name:"if",hash:{},fn:n.program(10,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.mobilepimagefullheight:a,{name:"if",hash:{},fn:n.program(12,t,0,i,o),inverse:n.program(14,t,0,i,o),data:t}))?r:"")+"]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.mobileSidebarImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(17,t,0,i,o),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(u,null!=a?a.sideBarCharOnMobile:a,{name:"if",hash:{},fn:n.program(19,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&layer4=[src=/i/dfs/"+(null!=(r=l.if.call(u,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+p(c(null!=(r=null!=a?a.pricingImage:a)?r.name:r,a))+(null!=(r=l.if.call(u,null!=a?a.pricingImageCrop:a,{name:"if",hash:{},fn:n.program(23,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&anchor=br&right=0&bottom=30]"+(null!=(r=l.if.call(u,null!=(r=null!=a?a.EspotImage:a)?r.name:r,{name:"if",hash:{},fn:n.program(25,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"&qlt="+(null!=(r=l.if.call(u,null!=a?a.mobileslidequality:a,{name:"if",hash:{},fn:n.program(28,t,0,i,o),inverse:n.program(30,t,0,i,o),data:t}))?r:"")+'&fmt.jpeg.chroma=1,1,1">\n              </picture>\n\n              <div class="bannerTextContainer '+p(typeof(s=null!=(s=l.countdownClassName||(null!=a?a.countdownClassName:a))?s:m)===d?s.call(u,{name:"countdownClassName",hash:{},data:t}):s)+(null!=(r=l.if.call(u,null!=a?a.hasCountdown:a,{name:"if",hash:{},fn:n.program(32,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'" data-messageid=slide_'+p((l.inc||a&&a.inc||m).call(u,t&&t.index,{name:"inc",hash:{},data:t}))+'>\n                \x3c!-- START:: V2 CountDown (PB) July 2nd 2018--\x3e\n                  <div class="countdownContainer countdown_v2 '+p(typeof(s=null!=(s=l.countdownClassName||(null!=a?a.countdownClassName:a))?s:m)===d?s.call(u,{name:"countdownClassName",hash:{},data:t}):s)+" "+(null!=(r=l.if.call(u,null!=a?a.hasCountdown:a,{name:"if",hash:{},fn:n.program(34,t,0,i,o),inverse:n.program(36,t,0,i,o),data:t}))?r:"")+'"\n                        data-deadline="'+p(typeof(s=null!=(s=l.countdownDeadline||(null!=a?a.countdownDeadline:a))?s:m)===d?s.call(u,{name:"countdownDeadline",hash:{},data:t}):s)+'"\n                        data-startdays="'+p(typeof(s=null!=(s=l.daysBeforeEnd||(null!=a?a.daysBeforeEnd:a))?s:m)===d?s.call(u,{name:"daysBeforeEnd",hash:{},data:t}):s)+'"\n                        data-daterange1="'+p(typeof(s=null!=(s=l.textVariance1||(null!=a?a.textVariance1:a))?s:m)===d?s.call(u,{name:"textVariance1",hash:{},data:t}):s)+'"\n                        data-daterange2="'+p(typeof(s=null!=(s=l.textVariance2||(null!=a?a.textVariance2:a))?s:m)===d?s.call(u,{name:"textVariance2",hash:{},data:t}):s)+'"\n                        data-daterange3="'+p(typeof(s=null!=(s=l.textVariance3||(null!=a?a.textVariance3:a))?s:m)===d?s.call(u,{name:"textVariance3",hash:{},data:t}):s)+'"\n                        data-daterange4="'+p(typeof(s=null!=(s=l.textVariance4||(null!=a?a.textVariance4:a))?s:m)===d?s.call(u,{name:"textVariance4",hash:{},data:t}):s)+'"\n                        data-hidefinalmessage="'+(null!=(r=l.if.call(u,null!=a?a.hideFinalMessage:a,{name:"if",hash:{},fn:n.program(38,t,0,i,o),inverse:n.program(40,t,0,i,o),data:t}))?r:"")+'"\n                        data-testdate="">\n                    <h6 class="cdHeader">\x3c!-- DEFAULT HEADER TEXT--\x3e</h6>\n                      <section class="timer '+(null!=(r=l.if.call(u,null!=a?a.hasCountdown:a,{name:"if",hash:{},fn:n.program(42,t,0,i,o),inverse:n.program(44,t,0,i,o),data:t}))?r:"")+'">\n                        <img src="//dfs.a.bigcontent.io/v1/static/loading_please_wait?v30" alt="loading..">\n                      </section>\n                    <h6 class="cdFooter">\x3c!-- DEFAULT FOOTER TEXT--\x3e</h6>\n                  </div>\n                  <div style="display:none;" class="cdEndMessage '+p(typeof(s=null!=(s=l.countdownClassName||(null!=a?a.countdownClassName:a))?s:m)===d?s.call(u,{name:"countdownClassName",hash:{},data:t}):s)+'">\n                    <h3>ENDS TODAY<br>Order direct until midnight</h3>\n                  </div>\n                \x3c!-- END:: V2 CountDown (PB) July 2nd 2018--\x3e\n              </div>\n            </a>\n'+(null!=(r=l.if.call(u,null!=(r=null!=a?a.EspotImage2:a)?r.name:r,{name:"if",hash:{},fn:n.program(46,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"          </div>\n"},6:function(n,a,l,e,t){return" active "},8:function(n,a,l,e,t){return"_mobile"},10:function(n,a,l,e,t){var i;return n.escapeExpression("function"==typeof(i=null!=(i=l.mobileMImageCrop||(null!=a?a.mobileMImageCrop:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"mobileMImageCrop",hash:{},data:t}):i)+"&"},12:function(n,a,l,e,t){return"anchor=tl&w=600"},14:function(n,a,l,e,t){var i;return null!=(i=l.if.call(null!=a?a:n.nullContext||{},null!=(i=null!=a?a.mobileSidebarImage:a)?i.name:i,{name:"if",hash:{},fn:n.program(15,t,0),inverse:n.noop,data:t}))?i:""},15:function(n,a,l,e,t){return"w=600&h=384&anchor=tl&top=78"},17:function(n,a,l,e,t){var i;return"&layer2=[/i/dfs/"+n.escapeExpression(n.lambda(null!=(i=null!=a?a.mobileSidebarImage:a)?i.name:i,a))+"&w=600]"},19:function(n,a,l,e,t){var i,o,r=n.escapeExpression,s=null!=a?a:n.nullContext||{},u=l.helperMissing;return"&layer3=[/i/dfs/"+r(n.lambda(null!=(i=null!=a?a.sidebarCharacter:a)?i.name:i,a))+"&"+r("function"==typeof(o=null!=(o=l.mobileCharacterCrop||(null!=a?a.mobileCharacterCrop:a))?o:u)?o.call(s,{name:"mobileCharacterCrop",hash:{},data:t}):o)+"&"+r("function"==typeof(o=null!=(o=l.mobileCharacterSize||(null!=a?a.mobileCharacterSize:a))?o:u)?o.call(s,{name:"mobileCharacterSize",hash:{},data:t}):o)+"&bottom="+r("function"==typeof(o=null!=(o=l.sideBarCBottomMob||(null!=a?a.sideBarCBottomMob:a))?o:u)?o.call(s,{name:"sideBarCBottomMob",hash:{},data:t}):o)+"&left="+r("function"==typeof(o=null!=(o=l.sideBarCLeftMob||(null!=a?a.sideBarCLeftMob:a))?o:u)?o.call(s,{name:"sideBarCLeftMob",hash:{},data:t}):o)+"&anchor=bl]"},21:function(n,a,l,e,t){return"ROI_"},23:function(n,a,l,e,t){var i;return"&"+n.escapeExpression("function"==typeof(i=null!=(i=l.pricingImageCrop||(null!=a?a.pricingImageCrop:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"pricingImageCrop",hash:{},data:t}):i)},25:function(n,a,l,e,t){var i;return null!=(i=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.espot1mobile:a,{name:"if",hash:{},fn:n.program(26,t,0),inverse:n.noop,data:t}))?i:""},26:function(n,a,l,e,t){var i,o,r=n.escapeExpression,s=null!=a?a:n.nullContext||{},u=l.helperMissing;return"&layer5=[src=/i/dfs/"+r(n.lambda(null!=(i=null!=a?a.EspotImage:a)?i.name:i,a))+(null!=(i=l.if.call(s,null!=a?a.espot1hasownmobileimage:a,{name:"if",hash:{},fn:n.program(8,t,0),inverse:n.noop,data:t}))?i:"")+"&anchor=tr&right="+r("function"==typeof(o=null!=(o=l.EspotImage_mobileright||(null!=a?a.EspotImage_mobileright:a))?o:u)?o.call(s,{name:"EspotImage_mobileright",hash:{},data:t}):o)+"&top="+r("function"==typeof(o=null!=(o=l.EspotImage_mobiletop||(null!=a?a.EspotImage_mobiletop:a))?o:u)?o.call(s,{name:"EspotImage_mobiletop",hash:{},data:t}):o)+"]"},28:function(n,a,l,e,t){var i;return n.escapeExpression("function"==typeof(i=null!=(i=l.mobileslidequality||(null!=a?a.mobileslidequality:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"mobileslidequality",hash:{},data:t}):i)},30:function(n,a,l,e,t){return"60"},32:function(n,a,l,e,t){return" carCountdown"},34:function(n,a,l,e,t){return" "},36:function(n,a,l,e,t){return" nonCDText"},38:function(n,a,l,e,t){return"true"},40:function(n,a,l,e,t){return"false"},42:function(n,a,l,e,t){return" showCountdown"},44:function(n,a,l,e,t){return"hideCountdown"},46:function(n,a,l,e,t,i,o){var r,s=null!=a?a:n.nullContext||{},u=n.lambda,m=n.escapeExpression;return'            <div class="linkableRoundel2">\n'+(null!=(r=l.if.call(s,null!=a?a.espot2URL:a,{name:"if",hash:{},fn:n.program(47,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'              <picture>\n                \x3c!-- webp --\x3e\n\n                  \x3c!-- 600 Mobile roundel 2--\x3e\n                  <source type="image/webp" media="(max-width: 1023px)"  srcset="//images.dfs.co.uk/i/dfs/'+(null!=(r=l.if.call(s,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+m(u(null!=(r=null!=a?a.EspotImage2:a)?r.name:r,a))+(null!=(r=l.if.call(s,null!=a?a.espot2hasownmobileimage:a,{name:"if",hash:{},fn:n.program(8,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'?w=80%&qlt=100&fmt.jpeg.chroma=1,1,1&fmt.jpeg.interlaced=true&fmt=webp" />\n\n                \x3c!-- Jpg --\x3e\n\n                  \x3c!-- 600 Mobile roundel 2--\x3e\n                    <source media="(max-width: 1023px)"  srcset="//images.dfs.co.uk/i/dfs/'+(null!=(r=l.if.call(s,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+m(u(null!=(r=null!=a?a.EspotImage2:a)?r.name:r,a))+(null!=(r=l.if.call(s,null!=a?a.espot2hasownmobileimage:a,{name:"if",hash:{},fn:n.program(8,t,0,i,o),inverse:n.noop,data:t}))?r:"")+'?w=80%&qlt=100" />\n\n                  <img src="//images.dfs.co.uk/i/dfs/'+(null!=(r=l.if.call(s,null!=o[1]?o[1].roi:o[1],{name:"if",hash:{},fn:n.program(21,t,0,i,o),inverse:n.noop,data:t}))?r:"")+m(u(null!=(r=null!=a?a.EspotImage2:a)?r.name:r,a))+'?w=80%&qlt=100" alt ="'+m(u(null!=(r=null!=a?a.EspotImage2:a)?r.name:r,a))+'"/>\n              </picture>\n'+(null!=(r=l.if.call(s,null!=a?a.espot2URL:a,{name:"if",hash:{},fn:n.program(49,t,0,i,o),inverse:n.noop,data:t}))?r:"")+"          </div>\n"},47:function(n,a,l,e,t){var i;return'                <a href="'+n.escapeExpression("function"==typeof(i=null!=(i=l.espot2URL||(null!=a?a.espot2URL:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"espot2URL",hash:{},data:t}):i)+'">\n'},49:function(n,a,l,e,t){return"              </a>\n"},51:function(n,a,l,e,t){var i,o,r=null!=a?a:n.nullContext||{},s=l.helperMissing,u=n.escapeExpression,m="function";return'  .bannerTextContainer[data-messageid="slide_'+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+'"] {\n    bottom: '+u(typeof(o=null!=(o=l.textBottomPositionS||(null!=a?a.textBottomPositionS:a))?o:s)===m?o.call(r,{name:"textBottomPositionS",hash:{},data:t}):o)+"px;\n    left:"+u(typeof(o=null!=(o=l.textLeftPositionS||(null!=a?a.textLeftPositionS:a))?o:s)===m?o.call(r,{name:"textLeftPositionS",hash:{},data:t}):o)+"px;\n  }\n  .item.slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .linkableRoundel2 {\n    position: absolute;\n    top: "+u(typeof(o=null!=(o=l.EspotImage2_top||(null!=a?a.EspotImage2_top:a))?o:s)===m?o.call(r,{name:"EspotImage2_top",hash:{},data:t}):o)+"px ;\n    "+(null!=(i=l.if.call(r,null!=a?a.anchorDEspot2Left:a,{name:"if",hash:{},fn:n.program(52,t,0),inverse:n.program(54,t,0),data:t}))?i:"")+" "+u(typeof(o=null!=(o=l.EspotImage2_right||(null!=a?a.EspotImage2_right:a))?o:s)===m?o.call(r,{name:"EspotImage2_right",hash:{},data:t}):o)+"px;\n  }\n\n  .slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .countdown_v2.HPcd-default.nonCDText h6.cdHeader {\n    font-size: "+(null!=(i=l.if.call(r,null!=a?a.textAFontSize:a,{name:"if",hash:{},fn:n.program(56,t,0),inverse:n.program(58,t,0),data:t}))?i:"")+"px !important;\n    line-height: "+(null!=(i=l.if.call(r,null!=a?a.textAFontSize:a,{name:"if",hash:{},fn:n.program(56,t,0),inverse:n.program(58,t,0),data:t}))?i:"")+"px !important;\n    color:#"+(null!=(i=l.if.call(r,null!=a?a.textAColour:a,{name:"if",hash:{},fn:n.program(60,t,0),inverse:n.program(62,t,0),data:t}))?i:"")+" !important;\n  }\n  .slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .countdown_v2.HPcd-default.nonCDText h6.cdFooter {\n    font-size: "+(null!=(i=l.if.call(r,null!=a?a.textBFontSize:a,{name:"if",hash:{},fn:n.program(64,t,0),inverse:n.program(66,t,0),data:t}))?i:"")+"px !important;\n    line-height: "+(null!=(i=l.if.call(r,null!=a?a.textBFontSize:a,{name:"if",hash:{},fn:n.program(64,t,0),inverse:n.program(66,t,0),data:t}))?i:"")+"px !important;\n    color:#"+(null!=(i=l.if.call(r,null!=a?a.textBColour:a,{name:"if",hash:{},fn:n.program(68,t,0),inverse:n.program(62,t,0),data:t}))?i:"")+' !important;\n  }\n\n  @media (max-width: 1365px) {\n\n    .bannerTextWrapper h2.cdText span {\n      margin: 0 1px;\n      font-size: 15px !important;\n    }\n    .bannerTextContainer[data-messageid="slide_'+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+'"] {\n      bottom: '+u(typeof(o=null!=(o=l.textBottomPositionS||(null!=a?a.textBottomPositionS:a))?o:s)===m?o.call(r,{name:"textBottomPositionS",hash:{},data:t}):o)+"px;\n      left:"+u(typeof(o=null!=(o=l.textLeftPositionS||(null!=a?a.textLeftPositionS:a))?o:s)===m?o.call(r,{name:"textLeftPositionS",hash:{},data:t}):o)+"px;\n    }\n    .item.slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .linkableRoundel2 {\n      position: absolute;\n      top: "+u(typeof(o=null!=(o=l.EspotImage2_top1024||(null!=a?a.EspotImage2_top1024:a))?o:s)===m?o.call(r,{name:"EspotImage2_top1024",hash:{},data:t}):o)+"px ;\n      "+(null!=(i=l.if.call(r,null!=a?a.anchorDEspot2Left:a,{name:"if",hash:{},fn:n.program(52,t,0),inverse:n.program(54,t,0),data:t}))?i:"")+" "+u(typeof(o=null!=(o=l.EspotImage2_right1024||(null!=a?a.EspotImage2_right1024:a))?o:s)===m?o.call(r,{name:"EspotImage2_right1024",hash:{},data:t}):o)+"px;\n    }\n    .slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .countdown_v2.HPcd-default.nonCDText h6.cdHeader {\n      font-size:"+(null!=(i=l.if.call(r,null!=a?a.textAFontSize:a,{name:"if",hash:{},fn:n.program(70,t,0),inverse:n.program(72,t,0),data:t}))?i:"")+"px !important;\n      line-height:"+(null!=(i=l.if.call(r,null!=a?a.textAFontSize:a,{name:"if",hash:{},fn:n.program(70,t,0),inverse:n.program(72,t,0),data:t}))?i:"")+"px !important;\n    }\n    .slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .countdown_v2.HPcd-default.nonCDText h6.cdFooter {\n      font-size:"+(null!=(i=l.if.call(r,null!=a?a.textBFontSize:a,{name:"if",hash:{},fn:n.program(74,t,0),inverse:n.program(72,t,0),data:t}))?i:"")+"px !important;\n      line-height:"+(null!=(i=l.if.call(r,null!=a?a.textBFontSize:a,{name:"if",hash:{},fn:n.program(74,t,0),inverse:n.program(72,t,0),data:t}))?i:"")+'px !important;\n    }\n\n  }\n  @media (max-width: 1023px) {\n    .bannerTextContainer[data-messageid="slide_'+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+'"] {\n      bottom: '+u(typeof(o=null!=(o=l.textBottomPositionS||(null!=a?a.textBottomPositionS:a))?o:s)===m?o.call(r,{name:"textBottomPositionS",hash:{},data:t}):o)+"px;\n      left:"+u(typeof(o=null!=(o=l.textLeftPositionS||(null!=a?a.textLeftPositionS:a))?o:s)===m?o.call(r,{name:"textLeftPositionS",hash:{},data:t}):o)+"px;\n    }\n    .item.slideIndex"+u((l.inc||a&&a.inc||s).call(r,t&&t.index,{name:"inc",hash:{},data:t}))+" .linkableRoundel2 {\n      position: absolute;\n      top: "+u(typeof(o=null!=(o=l.Espot2Image_mobiletop||(null!=a?a.Espot2Image_mobiletop:a))?o:s)===m?o.call(r,{name:"Espot2Image_mobiletop",hash:{},data:t}):o)+"px ;\n      "+(null!=(i=l.if.call(r,null!=a?a.anchorMEspot2Left:a,{name:"if",hash:{},fn:n.program(52,t,0),inverse:n.program(54,t,0),data:t}))?i:"")+" "+u(typeof(o=null!=(o=l.Espot2Image_mobileright||(null!=a?a.Espot2Image_mobileright:a))?o:s)===m?o.call(r,{name:"Espot2Image_mobileright",hash:{},data:t}):o)+"px;\n    }\n\n\n"+(null!=(i=l.if.call(r,null!=a?a.espot2mobile:a,{name:"if",hash:{},fn:n.program(76,t,0),inverse:n.program(78,t,0),data:t}))?i:"")+"  }\n"},52:function(n,a,l,e,t){return"left:"},54:function(n,a,l,e,t){return"right:"},56:function(n,a,l,e,t){var i;return n.escapeExpression("function"==typeof(i=null!=(i=l.textAFontSize||(null!=a?a.textAFontSize:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"textAFontSize",hash:{},data:t}):i)},58:function(n,a,l,e,t){return"20"},60:function(n,a,l,e,t){return n.escapeExpression((l.csv||a&&a.csv||l.helperMissing).call(null!=a?a:n.nullContext||{},null!=a?a.textAColour:a,"D",{name:"csv",hash:{},data:t}))},62:function(n,a,l,e,t){return"000000"},64:function(n,a,l,e,t){var i;return n.escapeExpression("function"==typeof(i=null!=(i=l.textBFontSize||(null!=a?a.textBFontSize:a))?i:l.helperMissing)?i.call(null!=a?a:n.nullContext||{},{name:"textBFontSize",hash:{},data:t}):i)},66:function(n,a,l,e,t){return"18"},68:function(n,a,l,e,t){return n.escapeExpression((l.csv||a&&a.csv||l.helperMissing).call(null!=a?a:n.nullContext||{},null!=a?a.textBColour:a,"D",{name:"csv",hash:{},data:t}))},70:function(n,a,l,e,t){return n.escapeExpression((l.math||a&&a.math||l.helperMissing).call(null!=a?a:n.nullContext||{},null!=a?a.textAFontSize:a,"-",5,{name:"math",hash:{},data:t}))},72:function(n,a,l,e,t){return"14"},74:function(n,a,l,e,t){return n.escapeExpression((l.math||a&&a.math||l.helperMissing).call(null!=a?a:n.nullContext||{},null!=a?a.textBFontSize:a,"-",5,{name:"math",hash:{},data:t}))},76:function(n,a,l,e,t){return"      .item.slideIndex"+n.escapeExpression((l.inc||a&&a.inc||l.helperMissing).call(null!=a?a:n.nullContext||{},t&&t.index,{name:"inc",hash:{},data:t}))+" .linkableRoundel2 {\n        display:block;\n      }\n"},78:function(n,a,l,e,t){return"      .item.slideIndex"+n.escapeExpression((l.inc||a&&a.inc||l.helperMissing).call(null!=a?a:n.nullContext||{},t&&t.index,{name:"inc",hash:{},data:t}))+" .linkableRoundel2 {\n        display:none;\n      }\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t,i,o){var r;return null!=(r=l.with.call(null!=a?a:n.nullContext||{},null!=a?a.carouselslot:a,{name:"with",hash:{},fn:n.program(1,t,0,i,o),inverse:n.noop,data:t}))?r:""},useData:!0,useDepths:!0};