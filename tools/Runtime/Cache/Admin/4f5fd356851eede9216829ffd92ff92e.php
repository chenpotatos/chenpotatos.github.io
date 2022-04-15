<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../images/favicon.ico">
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
              <li class="nav-item ">
                <a class="nav-link" href="/admin.php"><span class="active-item-here"></span><i class="fa fa-dashboard mr-5"></i> <span>仪表盘</span></a>
              </li>
              <li class="nav-item dropdown active">

                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-th mr-5"></i> <span class="active-item-here"></span><span>应用中心</span>
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
              <li class="nav-item dropdown">
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
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        上传新的工具吧！
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/admin.php"><i class="fa fa-dashboard"></i> 仪表盘</a></li>
        <li class="breadcrumb-item"><a href="#">应用中心</a></li>
        <li class="breadcrumb-item active">新增工具</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
    	<div class="box">
			  <div class="box-header with-border">
				<h3 class="box-title"> <strong>上传须知</strong></h3>
			  </div>
              <div class="box-body">
                <p><code>上传通知</code></p>
                <p>1.上传的格式一定要为<code>ZIP</code>格式！     
                	2.<code>新增站外链接</code>不需要上传任何工具！只需要填写链接即可！
                	3.<code>ZIP包必须为英文</code>，否则会上传失败！
                	4.如初次使请先下载 <a href="">demo.zip</a>查看应用结构！
                </p>
              </div>
            </div>
		<div class="row">
			<div class="box">
            <div class="box-header with-border">
              <h4 class="box-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布你的新应用</font></font></h4>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form id="f" enctype="multipart/form-data" class="form-horizontal form-element">
              <div class="box-body">
              	<div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control"  name="link" placeholder="如果发布工具此项不用填写，请填写完整域名">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用名称</font></font></label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" name="name" placeholder="为了让更多的人点击它，给你的应用起一个响亮的名字">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用LOGO</font></font></label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="logo" name="logo" placeholder="单字效果最好哦！">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分类</font></font></label>

                  <div class="col-sm-10">
                    <select class="form-control" id="classid" name="classid">
                    	<?php if(is_array($class)): $i = 0; $__LIST__ = $class;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option value="<?php echo ($vo["id"]); ?>"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><?php echo ($vo["classname"]); ?></font></font></option><?php endforeach; endif; else: echo "" ;endif; ?>
                  </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择ZIP包</font></font></label>

                  <div class="col-sm-10">
                    <input type="file" name="file" id="InputFile">
                  </div>
                </div>
                
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <a href="<?php echo U('tools/index');?>" class="btn btn-default"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消</font></font></a>
                <button type="button" id="addtools" class="btn btn-info pull-right"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font></button>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>

        <!-- left column -->
        
        
      </div>
      <!-- /.row -->
      
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  
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
	<script src="/Public/Admin/js/layer/layer.js"></script>
	<script type="text/javascript">
	   	$("#addtools").click(function(){
	   		var name = $("#name").val();
	   		var classid = $('#classid option:selected').val();
	  		var formData=new FormData(document.getElementById("f"));
	    	var logo = $("#logo").val();
	    	if (name =='') {
	    		layer.msg('请输入应用名称呢！', function () {
                //关闭后的操作
                	return false;
            	});
            	return false;
	    	}
	    	if (logo =='') {
	    		layer.msg('请输入单字logo哦！', function () {
                //关闭后的操作
                	return false;
            	});
            	return false;
	    	}
	    	var index = layer.load(1, {shade: false}); //0代表加载的风格，支持0-2
			$.ajax({  
		       url: '<?php echo U('tools/addtools');?>' ,  
		       type: 'POST',  
		       data: formData,  
		       dataType:'json',
		       async: false,  
		       cache: false,  
		       contentType: false,  
		       processData: false,  

		       success: function (data) {
		           if(data.status == 1){
		           		layer.closeAll('loading');
		               //判断返回的status来确定文件是否上传成功，以及上传成功后要做的操作
		                layer.alert(data.info, { icon: 6 });  
                    window.location.reload();
		           }
		           if(data.status == 0){
		           		layer.closeAll('loading');
		           		layer.alert(data.info, { icon: 5 });  
		           }
		           alert(response.msg);  
		       },  
			});  
		});
	</script>
	
</body>
</html>