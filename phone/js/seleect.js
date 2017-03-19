/**
 * Created by Administrator on 2017/2/22.
 */

$(function () {
    (function(){
        var i = true;
        $('.select').click(function(){
            if( i ){
                $('.menu').show(100);
                i = false;
            }else{
                $('.menu').hide(100);
                i = true;
            }
        });
    })();
    (function () {
        $('.navImg').click(function(){
            $('.rightNav').show(100);
            $(this).hide();
        });
        $('.off').click(function(){
            $('.rightNav').hide();
            $('.navImg').show();
        });
    })();
    (function(){
        window.onload = function(){

        };
    })();
    (function(){
        var type = true;
        $('.detailsBtn').click(function(){
            if(type){
                $('.detailsCont').removeClass('wordWrap');
                $(this).html('[收起]');
                type = false;
            }else{
                $('.detailsCont').addClass('wordWrap');
                $(this).html('[详情]');
                type = true;
            }

        });
    })();
//    让每个页面模块的高度等于设备的屏幕高度
//     modeW
    (function(){
        var winHeight = window.innerHeight
        console.log(winHeight);
        $('.modeW').css('height',winHeight);
    })();

});