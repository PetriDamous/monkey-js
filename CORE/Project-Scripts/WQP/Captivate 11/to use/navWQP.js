$(document).ready(function(){cpCmndShowPlaybar=!1;var e=!!document.documentMode,n=(!e&&window.StyleMedia,navigator.webkitGetUserMedia,cp.model.data.project_main.slides.split(",")),t=cp.model.data[n[window.cpInfoCurrentSlide-1]],c=t.to,o=t.from,i=(t.audioName,["Pause","Play","Closed Caption","Mute","Unmute","Replay","Rewind","Previous","Next","Menu","Help","Options","Exit","Resources"]);function d(){1==cpCmndMute?cpCmndMute=!0:cpCmndMute=!1}function p(){cp.hide(C("Play","id")),cp.show(C("Pause","id"))}function a(){cpCmndTOCVisible=!1,cp.show(C("Pause","id")),cp.hide(C("Play","id")),d()}function u(){0===cpCmndCC?$(C("Closed Caption","obj")).attr("title","Closed Caption Open"):1==cpCmndCC&&($(C("Closed Caption","obj")).attr("title","Closed Caption Close"),cp.hide("ccClose"))}function C(e,n){return"obj"===n?$('div[data-button="'+e+'"]'):$('div[data-button="'+e+'"]').attr("id")}i.forEach(function(n,t){var c;(c=e?$("p:contains("+i[t]+")").parent().parent():$('div[aria-label="'+i[t]+' "]')).attr("data-button",i[t]),c.attr("title",i[t]),c.css("cursor","pointer")}),a(),cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER",a),function(){"Intro Video"===cpInfoCurrentSlideLabel&&(cp.show("SmartShape_114"),cp.show("Image_372"),cp.show("Image_371"),cp.show("Image_370"),cp.show(C("Play","id")),cp.hide(C("Pause","id")),cpCmndPause=!0);"Pre-Test"===cpInfoCurrentSlideLabel&&(cp.hide(C("Play","id")),cp.hide(C("Pause","id")),e());"Pre-Test Results"===cpInfoCurrentSlideLabel&&e();function e(){for(var e=document.querySelectorAll('div[title="Menu"]'),n=0;n<e.length;n++){var t=document.getElementById(e[n].id+"c");t.style.opacity=".5",e[n].style.cursor="not-allowed"}}}(),$(C("Pause","obj")).click(function(){cpInfoCurrentFrame<c-1?(cpCmndPause=!0,cp.hide(C("Pause","id")),cp.show(C("Play","id"))):cpCmndPause=!0}),$(C("Play","obj")).click(function(){"Intro Video"===cpInfoCurrentSlideLabel&&(cp.hide("SmartShape_114"),cp.hide("Image_372"),cp.hide("Image_371"),cp.hide("Image_370")),cpInfoCurrentFrame<c-1?(cpCmndResume=!0,p(),d()):(cpCmndPause=!0,p())}),$(C("Rewind","obj")).click(function(){cpInfoCurrentFrame!=o&&cpInfoCurrentFrame>o+90?(cpCmndGotoFrameAndResume=cpInfoCurrentFrame-90,p(),d(),cpCmndTOCVisible=!1):(cpCmndGotoFrameAndResume=o,p(),d(),cpCmndTOCVisible=!1)}),$(C("Replay","obj")).click(function(){cpCmndGotoFrame=o,cpCmndPause&&setTimeout(function(){cpCmndResume=!0},300),1==cpCmndTOCVisible?(cpCmndTOCVisible=!1,p(),d()):(p(),d())}),$(C("Mute","obj")).click(function(){cpCmndMute=!0,cp.hide(muteID),cp.show(unmuteID)}),$(C("Unmute","obj")).click(function(){cpCmndMute=!1,cp.hide(unmuteID),cp.show(muteID)}),$(C("Closed Caption","obj")).click(function(){0===cpCmndCC?(cpCmndCC=1,u()):(cpCmndCC=0,u())}),u(),$("#tocFooter").css("top","585px"),$("#tocContent").css("height","509px"),$("#toc").css("height","605px"),$(C("Menu","obj")).click(function(){"Pre-Test"!==cpInfoCurrentSlideLabel&&"Pre-Test Results"!==cpInfoCurrentSlideLabel&&(0==cpCmndTOCVisible?cpCmndTOCVisible=!0:cpCmndTOCVisible=!1)})});