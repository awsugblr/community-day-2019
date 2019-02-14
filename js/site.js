$(function(){
	$('.toggle-trig').click(function(){
		$(this).toggleClass("open");
		$('body').toggleClass("open");
	});
	$('.make-it-slide').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 3,
		variableWidth: true
	});
	$('.lising li').click(function(){
		var tabidx = $(this).closest('.lising').next('.panes').find($('.pane-content:nth('+$(this).index()+')'));
		$(this).addClass('active').siblings().removeClass('active');
		tabidx.addClass('open').siblings().removeClass('open');
	});

	$(document).on('click','.nav-trig',function(){
		var idx_lt = $(this).closest('.pane-content').index();
		var prev_ul = $(this).closest('.panes').prev('.lising')
		if ($(this).hasClass('prev-top')){
			if(idx_lt - 1 >= 0){
				prev_ul.find('li:nth('+(idx_lt - 1)+')').click();
			}
		}
		else{
			if(idx_lt + 1 < prev_ul.find('li').length ){
				prev_ul.find('li:nth('+(idx_lt + 1)+')').click();
			}
		}
	});
	$(document).on('click', 'a', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-70
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});