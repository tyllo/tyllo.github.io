jQuery(document).ready(function(t){t("body").on("focus","input.datepicker",function(){t(this).datetimepicker({lang:"ru",timepicker:!1,format:"d.m.Y",defaultDate:new Date,dayOfWeekStart:1})}),t("body").one("focus",'input[name="date_from"]',function(){t(this).trigger("focus",this)}),t("body").one("click",'input[name="date_to"]',function(){t(this).trigger("focus",this)})}),$(document).ready(function(){var t=$("a[data-modal-id]");t.click(function(t){t.preventDefault();var e=$(t.currentTarget).attr("data-modal-id");$("#"+e).css("display","flex"),$("body").toggleClass("overflow")}),$('a[href="#close"]').click(function(t){t.preventDefault(),$(t.currentTarget).closest(".modal-container").css("display","none"),$("body").toggleClass("overflow")}),$('a[data-modal-id="contact"]').on("click",function(){map.invalidateSize()})}),function(t){var e,a,n,o=(new Date).getTime();o+=1e3*t("#time").text(),setInterval(function(){var i=(new Date).getTime(),c=(o-i)/1e3;e=parseInt(c/3600),c%=3600,a=parseInt(c/60),n=parseInt(c%60),t("#time").text(e+":"+a+":"+n)},1e3)}(jQuery);var map,coordinate=[48.496221464,135.0396537781];DG.then(function(){map=DG.map("map",{center:coordinate,zoom:16,animate:!0}),DG.marker(coordinate,{draggable:!1}).addTo(map)}),$('a[data-modal-id="contact"]').on("click",function(){map.invalidateSize()});