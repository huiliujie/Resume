$(function(){
	$('.login-btn').bind('click',function(){
		var $login = $('.login');
		if($login.css('left') == '240px'){
			$login.animate({left:-306},{duration:500,queue:false});
		}else{
			$login.animate({left:240},{duration:500,queue:false});
		}
	});

	$('.login-close').bind('click',function(){ $('.login-btn').trigger('click'); });

	$('.submain-btn').bind('click',function(){
		var $this = $(this);
		var $openText = $this.attr('data-open');
		var $closeText = $this.attr('data-close');
		var $body = $('.body');
		var $box = $('.body .box');
		if($box.css('left') == '-624px'){
			$box.animate({left:0},{duration:500, queue:false, complete:function(){ $this.removeClass('submain-btn-open').text($closeText);$('.subtitle .li2').show();$('.contact-tip').show(); }});
		}else{
			$box.animate({left:-624},{duration:500, queue:false, complete:function(){ $this.addClass('submain-btn-open').text($openText); }});
			$('.subtitle .li2').hide();
			$('.contact-tip').hide();
		}
	});	
	

	
	$("#page_nav li a ").each(function(index,ele){
		this.onclick=function(){
			$(".bigbox1").hide()
			$("#back").hide()
			$(this).addClass("current").parent().siblings().children().removeClass("current")
			$(".bigbox>div").eq(index).fadeIn().siblings().hide()
			$('.top').show();
		}
	})
	$(".one li a ").each(function(index,ele){
		this.onclick=function(){
			$(".bigbox>div").hide()
			$(".bigbox1").show()
			$("#back").show()
			$(".bigbox1>div").eq(index).fadeIn("linear").siblings().hide()
			$('.top').show();
		}
	})

	$("#back").on("click", function(){
		$(".bigbox1").hide()
			$(".bigbox1>div").hide()
			$("#back").hide()
			$(".one").show()
			$(".bigbox").show()	
			
	})
	$('.top').click(function(){
		
//		document.getElementById('bigBox').scrollTop=0;
	 $('#bigBox').animate({'scrollTop':0},500);
	})
	
});
pack();
function submain(){
	$('.submain-btn').bind('click',function(){
		var $this = $(this);
		var $openText = $this.attr('data-open');
		var $closeText = $this.attr('data-close');
		var $body = $('.body');
		var $box = $('.body .box');
		if($box.css('left') == '-614px'){
			$box.animate({left:0},{duration:500, queue:false, complete:function(){ $this.removeClass('submain-btn-open').text($closeText);$('.subtitle .li2').show(); }});
		}else{
			$box.animate({left:-614},{duration:500, queue:false, complete:function(){ $this.addClass('submain-btn-open').text($openText); }});
			$('.subtitle .li2').hide();
		}
	});	
}


function pack(){
	var $p = $('.package');
	var $pb = $('.package-btn');
	
	$pb.bind('click',function(){
		if($p.css('left') == '-10px'){
			$p.animate({left:200},{duration:400,queue:false});
			$pb.addClass('package-btn-opened');
		}else{
			$p.animate({left:-10},{duration:400,queue:false});
			$pb.removeClass('package-btn-opened');
			$(".bigbox>div").slideUp(1000);
			$(".bigbox1>div").slideUp(1000);
			$("#page_nav li a ").removeClass('current');
			$('.top').hide();
		}
	});
}
//
function indexOpen(){
	$('.btn-open').bind('click',function(){
		var $this = $(this);
		var i = $this.index();
		var _top = $this.offset().top-185;
		var _left = $this.offset().left-185-240;
		if(i==2){ _top = $(window).height()-472;}
		$('.open-box').eq(i).css({top:_top,left:_left}).fadeIn();
	});
	$('.open-box-close').bind('click',function(){
		$(this).parent().fadeOut();
	});
}

