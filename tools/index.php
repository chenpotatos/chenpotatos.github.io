<?php
$php_b=PHP_VERSION;
if ($php_b>=7) {
	echo "当前安装程序适应版本为5.4-5.6，请设置将PHP版本设置低于7";
}
header("content-type:text/html;charset=utf-8");
define('BIND_MODULE', 'Home');
define('APP_DEBUG', true);	//开启调试模式
if(file_exists("./install") && !file_exists("./install/install.lock")){
    // 组装安装url
    $url=$_SERVER['HTTP_HOST'].trim($_SERVER['SCRIPT_NAME'],'index.php').'install/index.php';
    // 使用http://域名方式访问；避免./Public/install 路径方式的兼容性和其他出错问题
    header("Location:http://$url");
    die;
}
include "./App/ThinkPHP.php";//引入ThinkPHP核心文件
