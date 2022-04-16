var num=1;									//初始化变量
function change(change_value){				//添加function
	x=document.getElementById("result");  	//找到元素result
	x.innerHTML=change_value;    			//改变内容function
	document.getElementById("game_result").className = "centerd alert alert-success";
}
function change_play(play_value){				//添加function
	document.getElementById("play").innerHTML = play_value;  	//找到元素play并且更改value的值
}

function game(){							//添加函数

if (num == 1){								//只有在第一次点击时才会显示
alert("欢迎玩这个有趣小游戏！");
alert("从现在开始\n你只需要不停的按“确认”");
alert("如果实在坚持不下去了\n可以按下“取消”");
alert("你的目标是按100次");
}

alert("准备好了么？开始！");

while (1){										//不断重复
	if (num < 50){								//如果按的次数小于50次
		if (confirm("你现在已经点了"+num+"次啦！")){
			num++;
		}else{									//如果按下取消
			change("啊哦，你在点了"+num+"下后放弃了。。。");
			change_play("继续玩");
			break;								//停止
		}
	}else if ((num >= 50) && (num < 90)){				//如果点击多于50下
		if (confirm("继续加油，你已经点了"+num+"次咯！")){
			num++;
		}else{											//如果按下取消
			change_play("继续玩");
			change("不错，你在点了"+num+"下之后实在点不动了。。。");	//改变内容
			break;										//停止
		}
	}else if ((num >= 90) && (num < 100)){				//如果点击多于90下
		if (confirm("加油啊！最后点"+(100-num)+"下！")){
			num++;
			if (num >= 100){							//如果点了100下
				change("哇，前无古人，后无来者。你点了"+num+"次啦！！");	//改变内容
				break;									//停止
			}
		}else{											//如果按下取消
			change_play("继续玩");
			change("真可惜，只剩最后"+(100-num)+"下。。。");	//改变内容
			break;										//停止
		}
	}
}

}