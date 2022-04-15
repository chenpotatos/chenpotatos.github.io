<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	//首页
    public function index(){
    	//分类
    	$classlist=M('class')->order("id")->select();
		$this->assign('class',$classlist);
		//详情
		$temp=M('system')->where("id=1")->find();
		$this->assign('temp',$temp);
		//友链
		$link=M('links')->order("id")->select();
		$this->assign('link',$link);
        //城市
        //$ip=$this->getip();
        //$this->assign('ip',$ip);
        //$city=$this->getcity($ip);
        //天气
        //$weather=$this->getweather($city['adcode']);

        //$this->assign('weather',$weather);
        //var_dump($weather);die;
		$templ=$temp['template'];
		if ($templ=='index/index') {
			$toolslist=M('tool')->order("id DESC")->select();
	    	$arr = [];
	    	foreach($classlist as $k=>$v){
				foreach($toolslist as $kk=>$vv){
	    			if($v['id']== $vv['cid']){
		    			$arr[$v['id']]['classid']=$v['classid'];
	    				$arr[$v['id']]['arr'][$kk]=$vv;
					}
	    		}
	    	}
	    	//导航
			$menu=M('menu')->order("id")->select();
			$this->assign('menu',$menu);
	    	$this->assign('tools',$arr);
    		$this->display($templ);
		}else{
			$toolslist=M('tool')->order("id DESC")->select();
			foreach ($toolslist as $k => $v) {
				$toolslist[$k]['cid']=M('class')->where("id=".$v['cid'])->find();
			}
			//var_dump($toolslist);
			$this->assign('toolslist',$toolslist);
    		$this->display($templ);
		}
    }
    public function zan(){
    	//var_dump($_GET);
    	$id=(int)$_GET['id'];
    	$tool=M('tool')->where("id=$id")->find();
    	$data['zan']=$tool['zan']+1;
    	$re=M('tool')->where("id=$id")->save($data);
    	$zan=M('tool')->where("id=$id")->find();
    	if (!empty($re)) {
    		$this->ajaxReturn(array(
    			'state'	=> 1,
    			'msg'	=>'点赞成功',
    			'zan'	=>$zan['zan']
    		));
    	}else{
    		$this->ajaxReturn(array(
    			'state'	=> 2,
    			'msg'	=>'点赞失败'
    		));
    	}
    }
    public function serch(){
    	$kw=remove_xss(trim($_GET['keyword']));
    	$all=M('tool');
        $all=$all->where("title like '%$kw%'")->select();
        $this->ajaxReturn(array(
            'data' => $all, 
            ));
    }
    function getip(){
        global $ip;
        if (getenv("HTTP_CLIENT_IP"))
        $ip = getenv("HTTP_CLIENT_IP");
        else if(getenv("HTTP_X_FORWARDED_FOR"))
        $ip = getenv("HTTP_X_FORWARDED_FOR");
        else if(getenv("REMOTE_ADDR"))
        $ip = getenv("REMOTE_ADDR");
        else $ip = "Unknow";
        return $ip;
    }
    function getcity($ip){
        $url="https://api.tecms.net/api/getinfo.php?ip=".$ip;
        $json=getCheck($url);
        $data=json_decode($json,true);
        return $data=[
            'province'=>$data['province'],
            'city'=>$data['city'],
            'adcode'=>$data['adcode']
        ];
    }
    function getweather($code){
        $url="https://api.tecms.net/api/getweather.php?city=".$code;
        $json=getCheck($url);
        $data=json_decode($json,true);
        return $data;
    }
   	
}