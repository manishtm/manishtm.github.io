!function(e){"use strict";e.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',r.appendChild(a.childNodes[1])}return t&&e.extend(i,t),this.each(function(){var t=["iframe[src*='player.vimeo.com/']","iframe[src*='youtube.com/']","iframe[src*='youtu.be/']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","iframe[src*='blip.tv/']","iframe[src*='dailymotion.com/']","iframe[src*='dai.ly/']","iframe[src*='flickr.com/']","iframe[src*='flic.kr/']","iframe[src*='smugmug.com/']","iframe[src*='hulu.com/']","iframe[src*='viddler.com/']","iframe[src*='revision3.com/']","iframe[src*='wordpress.tv/']","iframe[src*='funnyordie.com/']","iframe[src*='slideshare.net/']","iframe[src*='instagram.com/p/']","iframe[src*='instagr.am/p/']","iframe[src*='scribd.com/']","object","embed"];i.customSelector&&t.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=e(this).find(t.join(","));(a=(a=a.not("object object")).not(r)).each(function(){var t=e(this);if(!(t.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var i=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());t.attr("id",a)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);