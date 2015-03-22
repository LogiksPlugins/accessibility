var cnt=0;
var targetRecurse="iframe";
var oFontSize1 = $(targetSingle).css('font-size');
$(function() {	
	$("#accessibilitybuttons").buttonset();
	oFontSize1 = $(targetSingle).css('font-size');
});
function increaseFont() {
	var currentFontSize = $(targetSingle).css('font-size');
	var currentFontSizeNum = parseFloat(currentFontSize, 10);
	var newFontSize = currentFontSizeNum*1.2;
	$(targetSingle).css('font-size', newFontSize);
	
    $(targetRecurse).each(function() {
			target=$(this).contents().find("body");
			var currentFontSize = $(target).css('font-size');
			var currentFontSizeNum = parseFloat(currentFontSize, 10);
			var newFontSize = currentFontSizeNum*1.2;
			cnt++;
			$(target).css('font-size', newFontSize);
		});
    return false;
}
function decreaseFont() {
	var currentFontSize = $(targetSingle).css('font-size');
	var currentFontSizeNum = parseFloat(currentFontSize, 10);
	var newFontSize = currentFontSizeNum*0.8;
	$(targetSingle).css('font-size', newFontSize);
	
	$(targetRecurse).each(function() {
			target=$(this).contents().find("body");
			var currentFontSize = $(target).css('font-size');
			var currentFontSizeNum = parseFloat(currentFontSize, 10);
			var newFontSize = currentFontSizeNum*0.8;
			cnt--;
			$(target).css('font-size', newFontSize);
		});
    return false;
}
function resetFont() {
	$(targetSingle).css('font-size', oFontSize1);
	$(targetRecurse).each(function() {
			target=$(this).contents().find("body");
			var currentFontSize = $(target).css('font-size');
			var currentFontSizeNum = parseFloat(currentFontSize, 10);
			var newFontSize = currentFontSizeNum;
			if(cnt>0) {
				for(i=0;i<cnt;i++) {
					newFontSize = newFontSize*0.8;
				}
			} else if(cnt<0) {
				for(i=0;i<cnt;i++) {
					newFontSize = newFontSize*1.2;
				}
			}
			$(target).css('font-size', newFontSize);
			cnt=0;
		});
}
