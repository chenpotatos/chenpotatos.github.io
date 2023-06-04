

// // 页面无刷新加载
// $(document).ready(function(){
//     $(document).pjax('a', 'body', {
//         fragment: 'body',
//         timeout: 5000, //超时，超过5s还没加载到网页即刷新整个网页
//     }).on('pjax:send', function() {
//         //加入loading动画
//         $('body').append("<div id='container' ><div id='loader-wrapper'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div></div>");
//     }).on('pjax:complete', function() {
//         //解决多说加载问题
//         if ($('.ds-thread').length > 0) { 
//           if (typeof DUOSHUO !== 'undefined') 
//               DUOSHUO.EmbedThread('.ds-thread'); 
//           else 
//               $.getScript("//static.duoshuo.com/embed.js"); 
//         }
//         $('#container').remove(); //去掉loading动画
//     });
// });

