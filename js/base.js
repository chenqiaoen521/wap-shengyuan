(function($){
	function menu(){
		this.init();
		this.event();
	}
	menu.prototype = {
		init:function(){
			this.menuBar = $('<div class="menu-bar">');
			this.nodeBody = $('body');
			var str = 	"<ul>"+
			 			"<a href='index.html'><li>"+
		 				"<p class='title'>首页</p>"+
		 				"<p class='en'>HOME</p>"+
			 			"</li></a>"+
			 			"<a href='about.html'><li>"+
		 				"<p class='title'>关于盛鑫</p>"+
		 				"<p class='en'>ABOUT</p>"+
			 			"</li></a>"+
			 			"<a href='news-dongtai.html'><li>"+
		 				"<p class='title'>新闻动态</p>"+
		 				"<p class='en'>NEWS</p>"+
			 			"</li></a>"+
			 			"<a href='product.html'><li>"+
		 				"<p class='title'>盛鑫产品</p>"+
		 				"<p class='en'>PRODUCTS</p>"+
			 			"</li></a>"+
			 			"<a href='service.html'><li>"+
		 				"<p class='title'>盛鑫服务</p>"+
		 				"<p class='en'>SERVICE</p>"+
			 			"</li></a>"+
			 			"<a href='recruit.html'><li>"+
		 				"<p class='title'>招聘中心</p>"+
		 				"<p class='en'>RECRUIT</p>"+
			 			"</li></a>"+
			 			"</ul>"+
			 			"<div class='wrapper' id='close'>"+
 						"<div class='close-btn'></div>"+
 						"</div>";
 			console.log(11);
			this.menuBar.html(str);
			this.nodeBody.append(this.menuBar);
			this.menuBar.animate({
				translate3d: '0,0,0'},
				400,
				'ease-in'
				);
		},
		event:function(){
			var that = this;
			this.nodeBody.delegate('#close', 'tap', function(event) {

				that.menuBar.animate({
				translate3d: '100%,0,0'},
				400,
				'ease-out',
				function(){
					that.menuBar.remove();
				}
				);

			})
				
		}
	}
	$.myMmenu = function(){
		return new menu();
	};
})(Zepto);;
(function($){
  function online(){
    this.bodyNode = $('body');
    this.form = $('<div class="online">');
    this.flag = true;
    this.init();
    this.form.hide();
  }
  online.prototype = {
    close: function () {
    	this.flag = true;
        this.form.animate({
				translate3d: '-100%,0,0'},
				400,
				'ease-out'
				);
    },
    show: function () {
    	this.flag = false;
        this.form.animate({
				translate3d: '0,0,0'},
				400,
				'ease-in'
				);
    },
    init : function(){
      var str = "<div class='title'>在线申请</div>"+
                "<div class='sub-title'>APPLY</div>"+
                "<from>"+
                "<div class='online-form'>"+
                "<div class='form-group'><label>姓名</label><input type='text' name=''></div>"+
                "<div class='form-group'><label>电话</label><input type='text' name=''></div>"+
                "<div class='form-group'><label>邮箱</label><input type='text' name=''></div>"+
                "<div class='form-group'><label>公司名称</label><input type='text' name=''></div>"+
                "<button class='submit' type='submit'>提交</button>"+
                "</div>"+
                "</from>";
      this.form.html(str);         
      this.bodyNode.append(this.form);
    }
  }
  window['online'] = online;
})(Zepto)
Zepto(function($){
  $.online = new online();
  
  $('#nav').tap(function(e){
  		e.preventDefault();
  		e.stopPropagation();
		$.myMmenu();
	});

  $('#yuyue').tap(function(e){
  		e.preventDefault();
  		e.stopPropagation();
  			if($.online.flag){
  			$.online.form.show();
			$.online.show();
			$(this).html('关闭')
		}else{
			$.online.close();
			$(this).html('马上预约')
		}	
	});

   $('.question').tap(function(e){
   		$.each($('.question'), function(index, item){
  			$(item).removeClass('on');
  			$(item).find('.que-icon').removeClass('up').addClass('down');
	  		$(item).find('.text').hide();
		})
  		e.preventDefault();
  		e.stopPropagation();
  		if($(this).hasClass('on')){
  			$(this).removeClass('on');
	  		$(this).find('.que-icon').removeClass('up').addClass('down');
	  		$(this).find('.text').hide();
  		}else{
  			$(this).addClass('on');
	  		$(this).find('.que-icon').removeClass('down').addClass('up');
	  		$(this).find('.text').show();
  		}
	});

   $('.news .tab .company').tap(function(event) {
      $(this).addClass('active');
      $(this).siblings('a').removeClass('active');
      var hideUl = $('#'+$(this).data('id'));
      if(hideUl.hasClass('hidden')){
          hideUl.removeClass('hidden').siblings('ul').addClass('hidden');
      }
      
    });
   var proImg = $('.product .product-item .pic > img').width();
   $('.product .product-item .pic > img').height(.65 * proImg);
})