<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../images/favicon.ico">
    <!-- 引入header -->
        <title>默笙工具箱后台2.0管理系统</title>
    
    <!-- Bootstrap 4.0-->
    <link rel="stylesheet" href="/Public/Admin/vendor_components/bootstrap/dist/css/bootstrap.css">
    
    <!-- Bootstrap extend-->
    <link rel="stylesheet" href="/Public/Admin/css/bootstrap-extend.css">
    
    <!-- theme style -->
    <link rel="stylesheet" href="/Public/Admin/css/master_style.css">
    
    <!-- horizontal menu style -->
    <link rel="stylesheet" href="/Public/Admin/css/horizontal_menu_style.css">
    
    <!-- Fab Admin skins -->
    <link rel="stylesheet" href="/Public/Admin/css/skins/_all-skins.css">
    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

     
  </head>

<body class="hold-transition skin-purple-light layout-top-nav">
<div class="wrapper">

  <header class="main-header">
    <div class="inside-header">
        <!-- Logo -->
        <a href="/admin.php" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <b class="logo-mini">
              <span class="light-logo"><img src="/Public/Admin/images/logo-light.png" alt="logo"></span>
              <span class="dark-logo"><img src="/Public/Admin/images/logo-dark.png" alt="logo"></span>
          </b>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg">
              <img src="/Public/Admin/images/logo-light-text.png" alt="logo" class="light-logo">
              <img src="/Public/Admin/images/logo-dark-text.png" alt="logo" class="dark-logo">
          </span>
        </a>
        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle d-block d-lg-none" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <div class="btn-group d-none d-lg-block">
             <a class="btn dropdown-toggle mr-10 btn-outline btn-white" href="/index.php">站点首页</a>
            
          </div>
        
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

              
              <!-- Tasks -->
              <li class="dropdown tasks-menu">
                
                
              </li>
              <!-- User Account -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="http://q2.qlogo.cn/headimg_dl?dst_uin=<?php echo ($re["qq"]); ?>&spec=100" class="user-image rounded-circle" alt="User Image">
                </a>
                <ul class="dropdown-menu scale-up">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="http://q2.qlogo.cn/headimg_dl?dst_uin=<?php echo ($re["qq"]); ?>&spec=100" class="float-left rounded-circle" alt="User Image">

                    <p>
                      <?php echo ($re["name"]); ?>
                      <small class="mb-5"><?php echo ($re["email"]); ?></small>
                      <!-- <a href="#" class="btn btn-danger btn-sm btn-rounded">View Profile</a> -->
                    </p>
                  </li>
                  <!-- Menu Body -->
                  <li class="user-body">
                    <div class="row no-gutters">
                      
                    <div role="separator" class="divider col-12"></div>
                      <div class="col-12 text-left">
                        <a href="<?php echo U('system/upinfo');?>"><i class="ti-settings"></i> 修改密码</a>
                      </div>
                    <div role="separator" class="divider col-12"></div>
                      <div class="col-12 text-left">
                        <a href="<?php echo U('index/LoginOut');?>"><i class="fa fa-power-off"></i> 退出登录</a>
                      </div>                
                    </div>
                    <!-- /.row -->
                  </li>
                </ul>
              </li>
              <!-- Control Sidebar Toggle Button -->
              <li>
                <a href="#" data-toggle="control-sidebar"><i class="fa fa-cog fa-spin"></i></a>
              </li>
            </ul>
          </div>
        </nav>  
    </div>
  </header>
    <!-- 结束 -->
  <!-- Main Navbar -->
  <div class="main-nav">    
      <nav class="navbar navbar-expand-lg">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/admin.php"><span class="active-item-here"></span><i class="fa fa-dashboard mr-5"></i> <span>仪表盘</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-th mr-5"></i> <span>应用中心</span>
                </a>                  
                <ul class="dropdown-menu multilevel scale-up-left">
                  <li class="nav-item"><a class="nav-link" href="<?php echo U('tools/index');?>">应用管理</a></li>
                  <li class="nav-item"><a class="nav-link active" href="<?php echo U('tools/add');?>">新增应用</a></li>     
                  <li class="nav-item"><a class="nav-link" href="<?php echo U('tools/classe');?>">分类管理</a></li> 
                  <li class="nav-item"><a class="nav-link" href="<?php echo U('tools/link');?>">友链管理</a></li>
                  <li class="nav-item"><a class="nav-link" href="<?php echo U('tools/menu');?>">导航管理</a></li>
                                   
                </ul>                 
              </li> 
              
              <li class="nav-item dropdown m-menu m-fix">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-table mr-5"></i> <span>系统设置</span>
                </a>
                <div class="dropdown-menu menu-mega mega-menu-auto scale-up-left">
                    <ul class="dropdown-menu multilevel scale-up-left">
                        <li>
                            <a class="nav-link" href="<?php echo U('system/index');?>" title=""><i class="fa fa-creative-commons mr-15"></i>基础设置</a>
                        </li>
                        <li>
                            <a class="nav-link" href="<?php echo U('system/upinfo');?>" title=""><i class="fa fa-address-card-o mr-15"></i>信息修改</a>
                        </li>
                        <li>
                            <a class="nav-link" href="<?php echo U('system/temp');?>" title=""><i class="fa fa-cubes mr-15"></i>模板设置</a>
                        </li>
                       <!--  -->
                    </ul><!-- /.menu-mega-child one-four -->
                          
                    
                </div>
                  
              </li>
              
              <li class="nav-item dropdown m-menu">
                <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-laptop mr-5"></i> <span>应用商店</span>
                </a>
                <div class="dropdown-menu menu-mega scale-up-down">
                  
                    
                </div>
                  
              </li>               
              <li class="nav-item">
                <a class="nav-link" href="<?php echo U('update/index');?>">
                  <i class="fa fa-puzzle-piece mr-5"></i>检查更新
                </a>
              </li>
               
            </ul>
          </div>
        </nav>    
  </div>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xl-3 col-md-6 col-12 ">
            <div class="box bg-info">
              <div class="box-body">
                <div class="flexbox">
                  <h5>应用总数</h5>
                  <div class="dropdown">
                    <span class="dropdown-toggle no-caret" data-toggle="dropdown"><i class="ion-android-more-vertical rotate-90"></i></span>
                    <div class="dropdown-menu dropdown-menu-right">
                      
                      <a class="dropdown-item" href="#"><i class="ion-android-add"></i> 新增应用</a>
                     
                    </div>
                  </div>
                </div>

                <div class="text-center my-2">
                  <div class="font-size-60 text-white"><?php echo ($toolscount); ?></div>
                  <span class="text-white">应用总数</span>
                </div>
              </div>

              <div class="card-body bg-gray-light py-12">
                <span class="text-muted mr-1">应用总数:</span>
                <span class="text-dark"><?php echo ($toolscount); ?></span>
              </div>

              <div class="progress progress-xxs mt-0 mb-0">
                <div class="progress-bar bg-info" role="progressbar" style="width: 65%; height: 3px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        </div>
        <!-- /.col -->
        <div class="col-xl-3 col-md-6 col-12 ">
            <div class="box bg-danger">
              <div class="box-body">
                <div class="flexbox">
                  <h5>分类总数</h5>
                  <div class="dropdown">
                    <span class="dropdown-toggle no-caret" data-toggle="dropdown"><i class="ion-android-more-vertical rotate-90"></i></span>
                    <div class="dropdown-menu dropdown-menu-right">
                      
                      <a class="dropdown-item" href="#"><i class="ion-android-add"></i>新增分类</a>
                      
                    </div>
                  </div>
                </div>

                <div class="text-center my-2">
                  <div class="font-size-60 text-white"><?php echo ($classcount); ?></div>
                  <span class="text-white">分类总数</span>
                </div>
              </div>

              <div class="box-body bg-gray-light py-12">
                <span class="text-muted mr-1">分类总数:</span>
                <span class="text-dark"><?php echo ($classcount); ?></span>
              </div>

              <div class="progress progress-xxs mt-0 mb-0">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 72%; height: 3px;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        </div>
        <!-- /.col -->

        <div class="col-xl-3 col-md-6 col-12">
            <div class="box">
              <div class="box-body bg-primary">
                <div class="flexbox">
                  <h5>友情链接</h5>
                  <div class="dropdown">
                    <span class="dropdown-toggle no-caret" data-toggle="dropdown"><i class="ion-android-more-vertical rotate-90"></i></span>
                    <div class="dropdown-menu dropdown-menu-right">
                      
                      <a class="dropdown-item" href="#"><i class="ion-android-add"></i> 新增友情链接</a>
                      
                    </div>
                  </div>
                </div>

                <div class="text-center my-2">
                  <div class="font-size-60 text-white"><?php echo ($linkcount); ?></div>
                  <span class="text-white">友情链接</span>
                </div>
              </div>

              <div class="box-body bg-gray-light py-12">
                <span class="text-muted mr-1">友情链接:</span>
                <span class="text-dark"><?php echo ($linkcount); ?></span>
              </div>

              <div class="progress progress-xxs mt-0 mb-0">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 55%; height: 3px;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        </div>
        <!-- /.col -->
        <div class="col-xl-3 col-md-6 col-12">
            <div class="box bg-success">
              <div class="box-body">
                <div class="flexbox">
                  <h5>导航菜单</h5>
                  <div class="dropdown">
                    <span class="dropdown-toggle no-caret" data-toggle="dropdown"><i class="ion-android-more-vertical rotate-90"></i></span>
                    <div class="dropdown-menu dropdown-menu-right">
                      
                      <a class="dropdown-item" href="#"><i class="ion-android-add"></i>新增导航</a>
                      
                    </div>
                  </div>
                </div>

                <div class="text-center my-2">
                  <div class="font-size-60 text-white"><?php echo ($menucount); ?></div>
                  <span class="text-white">导航总数</span>
                </div>
              </div>

              <div class="box-body bg-gray-light py-12">
                <span class="text-muted mr-1">导航菜单:</span>
                <span class="text-dark"><?php echo ($menucount); ?></span>
              </div>

              <div class="progress progress-xxs mt-0 mb-0">
                <div class="progress-bar bg-success" role="progressbar" style="width: 95%; height: 3px;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        </div>
        <!-- /.col -->
          
      </div>   
      <div class="box">
            <div class="box-body box-profile">            
              <div class="row">
                <div class="col-md-4 col-12">
                    <div class="profile-user-info">
                        <p>当前域名 :<span class="text-gray pl-10"><?php echo ($_SERVER['SERVER_NAME']); ?></span> </p>
                        <p>当前环境 :<span class="text-gray pl-10"><?php echo ($_SERVER['SERVER_SOFTWARE']); ?></span></p>
                        <p>当前IP :<span class="text-gray pl-10"><?php echo ($_SERVER['REMOTE_ADDR']); ?></span></p>
                        <div id="tp-weather-widget"></div>
                        
                    </div>
                </div>
                <div class="col-md-7 col-12">
                    <div class="profile-user-info">                     
                        <p class="margin-bottom">快捷入口：</p>
                        <div class="">
                            <a class="btn btn-app btn-info" href="<?php echo U('tools/add');?>"><i class="fa fa-edit"></i> 发布工具</a>
                            <a class="btn btn-app btn-primary" href="<?php echo U('tools/linkadd');?>"><i class="fa fa-edit"></i> 新建友链 </a>
                            <a class="btn btn-app btn-secondary" href="<?php echo U('system/upinfo');?>"><i class="fa fa-edit"></i> 修改密码</a>
                            <a class="btn btn-app btn-success" href="#"><i class="fa fa-play"></i> 应用商店(暂未开放)</a>
                            <a class="btn btn-app btn-warning" href="<?php echo U('update/index');?>"><i class="fa fa-repeat"></i> 检查更新</a>
                            <a class="btn btn-app btn-danger" href="<?php echo U('index/LoginOut');?>"><i class="fa fa-power-off"></i> 退出登录</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-12">
                    <div class="profile-user-info">
                        <div class="map-box">
                         
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div> 
        <div class="box">
            <div class="box-body box-profile">            
              <div class="row">
                <div class="col-md-4 col-12">
                    <div class="profile-user-info">
                        <p>邮箱 :<span class="text-gray pl-10">304366@qq.com</span> </p>
                        <p>开发 :<span class="text-gray pl-10">默笙团队</span></p>
                        <p>框架 :<span class="text-gray pl-10">ThinkPHPV3.2.4</span></p>
                        <script type="text/javascript" src="/Public/Admin/js/clock.js"></script>
                    </div>
                </div>
                <div class="col-md-3 col-12">
                    <div class="profile-user-info">                     
                        <p class="margin-bottom">点击图标加入QQ群<br><br><br>立即开启小灶服务─=≡Σ(((つ•̀ω•́)つ</p>
                        <div class="user-social-acount">
                            <a href="https://jq.qq.com/?_wv=1027&k=54hfBl8" target="_blank" class="btn btn-circle btn-social-icon "><i class="fa fa-qq"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-12">
                    <div class="profile-user-info">
                        <p>感谢以下用户支持(此处用户自行删除 /Admin/View/Index/index.html)</p>
                        <p><a target="_blank" href="//pengsirs.com">彭先生博客</a>&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="//pengsirs.com">I AM I</a></p>
                    </div>
                </div>
                
              </div>
            </div>
            <!-- /.box-body -->
          </div>
      <div class="row">
       
      
      </div>      
      <!-- /.row -->          
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <!-- 引入footer -->
    <footer class="main-footer">
    <div class="pull-right d-none d-sm-inline-block">
        <ul class="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Purchase Now</a>
          </li>
        </ul>
    </div>
      &copy; 2018 <a href="https://www.tecms.net/">Mosheng</a>. All Rights Reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-light">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
      
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
      <div class="tab-pane" id="control-sidebar-home-tab">
        
      </div>
      <!-- /.tab-pane -->
      <!-- Stats tab content -->
      <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
      <!-- /.tab-pane -->
      <!-- Settings tab content -->
      
      <!-- /.tab-pane -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
  
  <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
  
</div>
<!-- ./wrapper -->
    
     
      
    <!-- jQuery 3 -->
    <script src="/Public/Admin/vendor_components/jquery/dist/jquery.js"></script>
    
    <!-- jQuery UI 1.11.4 -->
    <script src="/Public/Admin/vendor_components/jquery-ui/jquery-ui.js"></script>
    
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
      $.widget.bridge('uibutton', $.ui.button);
    </script>
    
    <!-- popper -->
    <script src="/Public/Admin/vendor_components/popper/dist/popper.min.js"></script>
    
    <!-- Bootstrap 4.0-->
    <script src="/Public/Admin/vendor_components/bootstrap/dist/js/bootstrap.js"></script>
    
    
    <!-- Fab Admin App -->
    <script src="/Public/Admin/js/template.js"></script>
    
    <!-- Fab Admin dashboard demo (This is only for demo purposes) -->
    <script src="/Public/Admin/js/pages/dashboard.js"></script>
    
    <!-- Fab Admin for demo purposes -->
    <script src="/Public/Admin/js/demo.js"></script>  
  <!-- 结束 -->
    <!-- Fab admin horizontal-layout -->
    <script src="/Public/Admin/js/horizontal-layout.js"></script>
    <script>(function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))</script>
<script>tpwidget("init", {
    "flavor": "slim",
    "location": "WX4FBXXFKE4F",
    "geolocation": "enabled",
    "language": "zh-chs",
    "unit": "c",
    "theme": "chameleon",
    "container": "tp-weather-widget",
    "bubble": "enabled",
    "alarmType": "badge",
    "uid": "U99066903B",
    "hash": "3cadea165f265d8fe6dd518286ce585b"
});
tpwidget("show");</script>
    
</body>
</html>