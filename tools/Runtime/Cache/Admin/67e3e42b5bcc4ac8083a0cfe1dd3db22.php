<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../images/favicon.ico">

    <title> 默笙工具箱2.0后台管理系统 </title>
  
	<!-- Bootstrap 4.0-->
	<link rel="stylesheet" href="/Public/Admin/vendor_components/bootstrap/dist/css/bootstrap.min.css">
	
	<!-- Bootstrap extend-->
	<link rel="stylesheet" href="/Public/Admin/css/bootstrap-extend.css">	
	
	<!-- Theme style -->
	<link rel="stylesheet" href="/Public/Admin/css/master_style.css">

	<!-- Fab Admin skins -->
	<link rel="stylesheet" href="/Public/Admin/css/skins/_all-skins.css">	
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

</head>
<body class="hold-transition login-page">
	
	<div class="container h-p100">
		<div class="row align-items-center justify-content-md-center h-p100">
			<div class="col-lg-3 col-md-8 col-12 d-none d-lg-block">
				<div class="box mb-0 b-0 bg-transparent">
					<div class="box-body login-slider p-0">
						<div id="carousel-example-generic-captions" class="carousel slide" data-ride="carousel">
						<!-- Indicators -->
						  <ol class="carousel-indicators">
							<li data-target="#carousel-example-generic-captions" data-slide-to="0" class="active"></li>
							<li data-target="#carousel-example-generic-captions" data-slide-to="1"></li>
							<li data-target="#carousel-example-generic-captions" data-slide-to="2"></li>
						  </ol>                      
						  <!-- Wrapper for slides -->
						  <div class="carousel-inner" role="listbox">
							<div class="carousel-item active">
							  <img src="/Public/Admin/images/slider/slide-1.jpg" class="img-fluid" alt="slide-1">
							  <div class="carousel-caption">
								<h3>默笙工具箱2.0</h3>
								<p>其实这里可以作为广告位</p>
							  </div>
							</div>
							<div class="carousel-item">
							  <img src="/Public/Admin/images/slider/slide-1.jpg" class="img-fluid" alt="slide-2">
							  <div class="carousel-caption">					  
								<h3>默笙工具箱2.0</h3>
								<p>其实这里可以作为广告位</p>
							  </div>
							</div>
							<div class="carousel-item">
							  <img src="/Public/Admin/images/slider/slide-1.jpg" class="img-fluid" alt="slide-3">
							  <div class="carousel-caption">					  
								<h3>默笙工具箱2.0</h3>
								<p>其实这里可以作为广告位</p>
							  </div>
							</div>
						  </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-8 col-12">
				<div class="login-box">
				  <div class="login-box-body">
					<h3 class="text-center">开始使用</h3>
					<p class="login-box-msg">登录以开始您的会话</p>

					<div >
					  <div class="form-group has-feedback">
						<input type="email" class="form-control rounded" id="username" placeholder="邮箱">
						<span class="ion ion-email form-control-feedback"></span>
					  </div>
					  <div class="form-group has-feedback">
						<input type="password" class="form-control rounded" id="password" placeholder="密码">
						<span class="ion ion-locked form-control-feedback"></span>
					  </div>
					  <div class="form-group has-feedback">
						<input type="text" class="form-control rounded" id="code" placeholder="验证码"><br>
						<img src="<?php echo U('login/verify');?>" alt="" onclick="this.src='<?php echo U("Login/verify");?>'" title="看不清，换一张">

					  </div>
					  <div class="row">
						<div class="col-6">
						  <div class="checkbox">
							<input type="checkbox" id="basic_checkbox_1" >
							<label for="basic_checkbox_1">记住密码</label>
						  </div>
						</div>
						<!-- /.col -->
						<div class="col-6">
						 <div class="fog-pwd text-right">
							<a href="javascript:void(0)" class="text-danger"><i class="ion ion-locked"></i> 忘记密码?</a><br>
						  </div>
						</div>

						<!-- /.col -->
						<div class="col-12 text-center">
						  <button type="button" id="login" class="btn btn-info btn-block margin-top-10">登录</button>
						</div>
						<!-- /.col -->
					  </div>
					</div>

				  </div>
				  <!-- /.login-box-body -->
				</div>
				<!-- /.login-box -->
			
			</div>
		</div>
	</div>


	<!-- jQuery 3 -->
	<script src="/Public/Admin/vendor_components/jquery/dist/jquery.min.js"></script>
	
	<!-- popper -->
	<script src="/Public/Admin/vendor_components/popper/dist/popper.min.js"></script>
	
	<!-- Bootstrap 4.0-->
	<script src="/Public/Admin/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="/Public/Admin/js/layer/layer.js"></script>
	<!--  -->
	<script type="text/javascript">
    $("#login").click(function () {
        var e = 0;
        var name = $("#username").val();
        var pwd = $("#password").val();
        var code = $("#code").val();
        if (name == "") {
           	layer.msg('请输入用户名', function () {
                //关闭后的操作
                return false;
            });
            return false;
		}
        
        if (pwd == "") {
            layer.msg('请输入密码', function () {
                //关闭后的操作
                return false;
            });
            return false;
        }
        if (pwd.length < 6) {
            layer.msg('密码长度不正确', function () {
                //关闭后的操作
                return false;
            });
            return false;
        }
        if (code == "") {
            layer.msg('验证码不能为空', function () {
                //关闭后的操作
                return false;
            });
            return false;
        }
        if (e == 0) {
            $.post("<?php echo U('login/ajaxLogin');?>", { name: name, pass: pwd, code:code}, function (data) {
            	var index = layer.load(1, {shade: false}); //0代表加载的风格，支持0-2
                if (data.status == '1') {
                	layer.closeAll('loading');
                    layer.alert(data.info, { icon: 6 });//layer.msg('不开心。。', {icon: 5});
                    window.location.href = data.url;
                } else {
                	layer.closeAll('loading');
                    layer.alert(data.info, { icon: 5 });
                }
            })
        }

    })
</script>

</body>
</html>