<?php if (!defined('THINK_PATH')) exit();?>﻿<!-- 普通版请保留部分版权，感谢您对作者的尊重，一经发现可能会上黑名单的哦  -->
<!-- power By Mosheng 默笙 无商业授权用户请保留此处版权 -->
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title><?php echo ($temp["title"]); ?>-<?php echo ($temp["descc"]); ?></title>
  <meta name="description" content="<?php echo ($temp["descc"]); ?>" />
  <meta name="keywords" content="<?php echo ($temp["keyword"]); ?>" />
  
  <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/font-awesome.min.css">
  <script type="text/javascript" src="/Public/Home/static/js/jquery.min.js"></script>
  <script type="text/javascript" src="/Public/Home/static/js/clipboard.min.js"></script>
  <script type="text/javascript" src="/Public/Home/static/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/Public/Home/static/js/layer/layer.js"></script>
  <script type="text/javascript" src="/Public/Home/static/js/main.js"></script>

  <style type="text/css">
    /*正文样式*/
    body {
      font-family: "HanHei SC", "PingHei", "PingFang SC", "微软雅黑", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-size: 13px;
      line-height: 1.846;
      color: #666666;
      background-image: url(/Public/Home/static/images/background.png)
    }

    /*主体头部空*/
    .clearfix {
      margin-top: 40px;
    }

    /*返回内容设为隐藏*/
    .form-controls {
      display: none;
    }

    #form1 {
      text-align: center;
      display: none;
    }

    .Explain {
      padding-top: 10px;
    }

    /*首行缩进2个字符*/
    .Explain dd {
      text-indent: 2em;
    }

    /*主体底部边距*/
    .clearfix {
      min-height: 550px;
    }

    /*表格文字缩小*/
    .position {
      font-size: xx-small;
    }

    /*表格文字自动换行*/
    .table-bordered {
      word-break: break-all;
      word-wrap: break-all;
    }

    .tooltip {
      font-size: 12px;
      position: absolute;
      padding: 5px;
      z-index: 100000;
      opacity: .8;
      font-family: Microsoft Yahei
    }

    .tipsy-arrow {
      position: absolute;
      width: 0;
      height: 0;
      line-height: 0;
      border: 6px dashed #000;
      top: 0;
      left: 20%;
      margin-left: -5px;
      border-bottom-style: solid;
      border-top: 0;
      border-left-color: transparent;
      border-right-color: transparent
    }

    .tipsy-arrow-n {
      border-bottom-color: #6F8EC5
    }

    .tipsy-inner {
      background-color: #6F8EC5;
      color: #FFF;
      max-width: 200px;
      padding: 5px 8px 4px 8px;
      text-align: center;
      border-radius: 3px
    }

    @media screen and (min-width: 760px) {
      .header_nav {
        display: none;
      }
    }

    #f_list {
      position: fixed;
      right: 30px;
      bottom: 60px;
      transition: bottom ease .3s;
      z-index: 9;
      font-size: 18px;
      text-align: center;
      line-height: 36px
    }

    #f_list a.btn {
      width: 36px;
      height: 36px;
      display: block;
      text-decoration: none;
      color: #999;
      border-radius: 5px
    }

    @media screen and (max-width: 720px) {
      #f_list {
        right: 0px;
      }
    }

    .centent {
      min-height: 500px;
    }

    /*logo居中*/
    @media screen and (min-width: 768px) {
      .navbar-header {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .search {
      padding-left: 5px;
    }
  </style>
</head>

<body>
  <!--[if lt IE 9]>
<div class="notice chromeframe">您的浏览器版本<strong>很旧很旧</strong>，为了正常地访问网站，请升级您的浏览器 <a target="_blank"
href="http://browsehappy.com">立即升级</a>
</div>
<![endif]-->
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
          aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">导航按钮</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/index.php"><img src="/Public/images/logo.png" alt="MoshengTools" class="logo" width="135px"></a>
      </div><!-- /.navbar-header -->
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <!--自定义导航目录-->
          <li><a href="/index.php" target="_blank"><?php echo ($temp["logo"]); ?></a></li>
          <br />
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav>
  <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/templates.css">
  <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/bootstrap-select.min.css">
  <script src="/Public/Home/static/js/bootstrap-select.min.js"></script>
  <style type="text/css">
    .breadcrumb {
      padding: 8px 15px 13px 15px;
    }

    .breadcrumb>li {
      margin-top: 6px;
    }

    .tools_list {
      min-height: 500px;
    }
  </style>

  <div class="container centent" style="padding-bottom:20px;">
    <ol class="breadcrumb" id="choose-tool">
      <li class="active" data-class=".tool-item"><span>所有工具</span></li>
      <!--分类导航目录优先-->
      <!-- <?php if(is_array($class)): $k = 0; $__LIST__ = array_slice($class,0,10,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ls): $mod = ($k % 2 );++$k;?><li <?php if($k == 1): ?>class="active"<?php endif; ?>>
        
        <a href="#<?php echo ($ls["classid"]); ?>" data-toggle="tab" id="toWx">
          <?php echo ($ls["classname"]); ?>
        </a>
      </li><?php endforeach; endif; else: echo "" ;endif; ?> -->
      <?php if(is_array($class)): $k = 0; $__LIST__ = array_slice($class,0,10,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ls): $mod = ($k % 2 );++$k;?><li data-class=".<?php echo ($ls["classid"]); ?>"><span><?php echo ($ls["classname"]); ?></span></li><?php endforeach; endif; else: echo "" ;endif; ?>
      
      <div class="search-fr">
        <style type="text/css">
          .search-fr {
            float: right;
          }

          @media screen and (max-width: 720px) {
            .search-fr {
              float: none;
              text-align: center;
            }
          }

          .dropdown-menu {
            width: 100% !important;
          }
        </style>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-lg-1">
              <select id="basic" class="selectpicker" data-live-search="true">
                <option data-subtext="搜索">搜索</option>
                <?php if(is_array($toolslist)): $i = 0; $__LIST__ = $toolslist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option data-subtext="<?php echo ($vo["title"]); ?>"><?php echo ($vo["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
              </select>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript">
        //模糊搜索特别优化
        $('.selectpicker').on('changed.bs.select', function (e) {
          $('.dropdown-toggle').data("class", '.' + $('#basic').val());
          $('.active').removeClass("active");
          if ($('.dropdown-toggle').attr('class') == 'active') return false;
          $('.dropdown-toggle').addClass("active");
          if ($('.dropdown-toggle').data("class") == '.搜索') {
            $(".tool-item").show();
          } else {
            if ($('.dropdown-toggle').data("class") !== ".tool-item") $(".tool-item").hide();
          }
          $($('.dropdown-toggle').data("class")).fadeIn(0);
        });
      </script>
    </ol>

    <div class="row row-xs tools_list">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row">
          <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/temp_one.css">
           <?php if(is_array($toolslist)): $i = 0; $__LIST__ = $toolslist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$to): $mod = ($i % 2 );++$i;?><div class="col-xs-12 col-sm-3 boxs tool-item <?php echo ($to["cid"]["classid"]); ?> ">
             
              <div class="item-inner">
                <div class="item-hd">
                  <a target="_blank" href="<?php echo ($to["url"]); ?>" class="item-icon">
                    <!-- <img src="/Public/Home/static/picture/default.png" width="48" height="48" alt="coderunner"> -->
                    <!-- <img src="<?php echo U('index/logo');?>?logo=<?php echo ($to["logo"]); ?>" width="48" height="48" alt="coderunner"> -->
                    <span class="maple-tool-icon maple-tool-item-color<?php echo rand(1,6);?>"><?php echo ($to["logo"]); ?></span>
                  </a>
                  <h3><a target="_blank" href="<?php echo ($to["url"]); ?>"><?php echo ($to["title"]); ?></a></h3>
                  <span class="item-category">
                    [<a target="_blank" rel="nofollow" href="#"><?php echo ($to["cid"]["classname"]); ?></a>]
                  </span>
                  <a title="点赞 " class="likeable" href="javascript:ajax_love(<?php echo ($to["id"]); ?>)" data-slug="coderunner"
                    data-url="<?php echo ($to["url"]); ?>" id="tools_love_<?php echo ($to["id"]); ?>">
                    <i class="fa fa-heart"></i>
                    <var id="zan<?php echo ($to["id"]); ?>"><?php echo ($to["zan"]); ?></var>
                  </a>
                  
                </div>
                <div class="item-bd">
                  <div class="item-desc" title="<?php echo ($to["title"]); ?>">
                    <?php echo ($to["title"]); ?></div>
                </div>
                <div class="item-ft">
                  <a target="_blank" class="item-link" href="<?php echo ($to["url"]); ?>"><i class="fa fa-user"></i>&nbsp;&nbsp;<?php echo ($to["author"]); ?></a>
                  <a target="_blank" class="item-btn" href="<?php echo ($to["url"]); ?>">进入</a>
                </div>
              </div>
              
            </div><?php endforeach; endif; else: echo "" ;endif; ?>
          
        </div>
      </div>
    </div>

    <script type="text/javascript">
      // 无刷新导航js
      $(function () {
        $('#choose-tool li').click(function () {
          if ($(this).attr('class') == 'active') return false;
          $('.active').removeClass("active");
          $(this).addClass("active");
          if ($(this).data("class") !== ".tool-item") $(".tool-item").hide();
          $($(this).data("class")).fadeIn(0);
        });
      });
    </script>
    <div class="container links_">
      <div class="links_bt">
        <div class="links_bt_l">
          <a href="javascript:;">友情链接</a>
        </div>
        <div class="links_bt_r">
          <a href="#" rel="nofollow" target="_blank">申请</a>
        </div>
      </div>
      <div class="links_lb">
        <ul>
          <?php if(is_array($link)): $i = 0; $__LIST__ = $link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$lk): $mod = ($i % 2 );++$i;?><li><a href="<?php echo ($lk["link"]); ?>" title="<?php echo ($lk["descc"]); ?>" target="_blank"><?php echo ($lk["title"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
          
        </ul>
      </div>
    </div>
    <!--footer start-->
    <footer class="footer text-center">
      <div>
        <!--切勿商用,切勿改版权,后果自付-->
        <?php echo ($temp["footer"]); ?>
      </div>
      <div class="hitokoto">
        <script type="text/javascript" src="/Public/Home/static/js/index.js"></script>
        <script type="text/javascript" >
          function xsjhitokoto(){document.write("<?php echo file_get_contents('https://api.tecms.net/api/yiyan.php');?>");}

        </script>
        <script>xsjhitokoto()</script>
      </div>
      <div class="footer text-center">
        <!--这里可以放统计代码-->

      </div>
      <div id="f_list">
        <a rel="noopener noreferrer" target="_blank" class="btn qq-qun copy-btn js-tip" title="点击加群" href="https://jq.qq.com/?_wv=1027&k=5A5uggb" original-title="QQ群: 484395502"><i class="fa fa-qq "></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" class="btn github js-tip" href="#"><i class="fa fa-github-alt"></i>
        </a>
        <a class="btn gotop js-tip" href="javascript:gotop();" title="返回顶部" id="gotop"><i class="fa fa-qq"></i>
        </a>
      </div>
      <style type="text/css">
        #welcome {
          width: 200px;
          background: #fff;
          border: 1px solid #eee;
          color: #000;
          font-size: 14px;
          opacity: 0.7;
          filter: alpha(opacity=70);
          padding: 10px 20px;
          position: fixed;
          right: 10px;
          bottom: 25px;
          z-index: 99999;
          box-shadow: rgb(136, 123, 123) 3px 2px 5px;
          opacity: 1;
        }

        #welcome h4 {
          color: #F00;
          line-height: 30px;
          padding: 0 !important;
          margin: 0 !important;
          text-align: left;
        }

        .closebox {
          float: center;
          text-align: center;
          margin-top: 10px;
        }
      </style>
    </footer>
</body>
<!-- 普通版请保留部分版权，感谢您对作者的尊重，一经发现可能会上黑名单的哦  -->
<!-- power By Mosheng 默笙 无商业授权用户请保留此处版权 -->
</html>