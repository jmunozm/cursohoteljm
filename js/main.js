var pos = 0;
var intv;

$(document).on('ready',function(){
	init();
});

function init(){
	$('.slider_controls li').on('click',handleClick);
	var width = $('.slider_container').width();
	$('.slide').each(function(i,e){
		var url = $(e).data('background')
		$(e).css('width',width+'px');
		$(e).css('background-image',"url("+(url+".jpg")+")");
	});
	//clearInterval(intv);
	intv = setInterval(handleClick, 10000);

}

function handleClick(){
	var slide_target = 0;
	//al dar click
	if ($(this).parent().hasClass('slider_controls')) {
		slide_target = $(this).index();
		pos = slide_target;
		clearInterval(intv);
		intv = setInterval(handleClick, 10000);
	}else{ //por intervalo de tiempo
		pos++;
		if(pos>=$('.slide').length){
			pos = 0;
		}
		slide_target = pos;
	}

	/*$('.slideContainer').animate({
		'margin-left':-(slide_target * $('.slider_container').width())+'px'
	},'slow');*/

	/*$('.slideContainer').fadeOut('slow',function(){
		$(this).animate({
			'margin-left':-(slide_target * $('.slider_container').width())+'px'
		},'slow',function(){
			$(this).fadeIn();
		});
	});*/

	$('.slideContainer').slideUp('slow',function(){
		$(this).animate({
			'margin-left':-(slide_target * $('.slider_container').width())+'px'
		},'slow',function(){
			$(this).slideDown();
		});
	});
}