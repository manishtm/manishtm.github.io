jQuery(window).on("load",function(){"use strict";var e=jQuery("#home-slider");e.length&&e.flexslider({animation:ThemeOption.slider_effect,direction:ThemeOption.slider_direction,slideshow:Boolean(ThemeOption.slider_autoslide),slideshowSpeed:Number(ThemeOption.slider_speed),animationSpeed:Number(ThemeOption.slider_duration),prevText:"",nextText:"",directionNav:!0,controlNav:!0,start:function(e){e.removeClass("loading")},after:function(e){e.slides.eq(e.currentSlide).siblings().each(function(){var e=jQuery(this).find("iframe").attr("src");jQuery(this).find("iframe").attr("src",e)})}});var t=jQuery(".list-masonry"),i=jQuery(".filters-nav");t.each(function(){jQuery(this).isotope()}),i.length&&i.each(function(){var e=jQuery(this);e.find("a").click(function(i){var a=jQuery(this),n=a.attr("data-filter");if(a.parents(".event-list").length)e.find(".selected").removeClass("selected"),a.addClass("selected"),e.parents(".event-list").find(".list-masonry").isotope({filter:n,animationOptions:{duration:750,easing:"linear",queue:!1}});else{var o=jQuery(this).attr("data-filter");jQuery(this).parent().siblings().find("a").removeClass("selected"),jQuery(this).addClass("selected"),t.isotope({filter:o,animationOptions:{duration:750,easing:"linear",queue:!1}})}i.preventDefault()})}),jQuery(".item-list").find("div[class^='col']").matchHeight()}),jQuery(document).ready(function(e){"use strict";var t=e("#navigation"),i=e("#mobilemenu");t.clone().removeAttr("id").removeClass().appendTo(i),i.find("li").removeAttr("id"),i.mmenu({offCanvas:{position:"top",zposition:"front"},autoHeight:!0,navbars:[{position:"top",content:["prev","title","close"]}],extensions:["theme-dark"]}),e("#navigation").superfish({delay:300,animation:{opacity:"show",height:"show"},speed:"fast",dropShadows:!1}),e("#main").fitVids();var a=e("a[data-rel^='prettyPhoto']");a.length&&a.magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0}}),e(".parallax").each(function(){var t=e(this);t.parallax("50%",t.data("speed"))});var n=e(".tp-close"),o=e("#tp-grid").stapel({gutter:30,pileAngles:2,onAfterOpen:function(t){n.fadeIn(),e("a[data-rel^='prettyPhoto']").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0}})},onAfterClose:function(t){e("a[data-rel^='prettyPhoto']").off("click")}});n.on("click",function(t){e(this).hide(),o.closePile(),t.preventDefault()})});