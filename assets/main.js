//Code by XYKbear

(function($, window, document, undefined) {
    'use strict';

    var $window = $(window),
        $document = $(document);
    var $cover = $(".cover"),
        $header = $(".header"),
        headerHeight = 68;//由于导航栏高度可变故设定为所需的固定值

    $document.on('ready', function() {

        //切换导航栏样式
        $window.on('scroll', function() {
            if ($window.scrollTop() > ($cover.outerHeight() - headerHeight)) {
                $header.removeClass('header_invert');
            } else {
                $header.addClass('header_invert');
            }
        });
        $window.scrollTop(0); //页面打开时触发一次滚动时间

        //监控<a>标签的链接
        $(".header a").click(function(e){
            var href = $(this).attr("href");
            if (href.indexOf("#")==0) {
                //获取目标坐标，+1用于保证导航栏样式的切换
                var calcOffset = $(href).offset().top - headerHeight + 1;
                $('html,body').animate({ scrollTop: calcOffset }, 400);
                e.preventDefault();
            };
        });

        //加载Works部分
        loadWorks();
    });

    var loadWorks = function(){
        $.getJSON("list.json")
        .done(function(data){console.log(data);})
        .fail(function(){});
    }

})(jQuery, window, document);
