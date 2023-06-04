﻿//公共JS
/*显示日期*/
var sWeek = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
var dNow = new Date();
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸";
var dzString = "子丑寅卯辰巳午未申酉戌亥";
var numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
var weekString = "日一二三四五六";
var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6,0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD,0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55,0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA,0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95,0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26,0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D,0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497,0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F,0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D,0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B,0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5,0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;
function GetBit(m, n) {
	return (m >> n) & 1;
}
function e2c() {
	TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0],
			arguments[1], arguments[2]);
	var total, m, n, k;
	var isEnd = false;
	var tmp = TheDate.getFullYear();
	total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4)
			+ madd[TheDate.getMonth()] + TheDate.getDate() - 38;
	if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
		total++;
	}
	for (m = 0;; m++) {
		k = (CalendarData[m] < 0xfff) ? 11 : 12;
		for (n = k; n >= 0; n--) {
			if (total <= 29 + GetBit(CalendarData[m], n)) {
				isEnd = true;
				break;
			}
			total = total - 29 - GetBit(CalendarData[m], n);
		}
		if (isEnd)
			break;
	}
	cYear = 1921 + m;
	cMonth = k - n + 1;
	cDay = total;
	if (k == 12) {
		if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
			cMonth = 1 - cMonth;
		}
		if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
			cMonth--;
		}
	}
}
function GetcDateString() {
	var tmp = "";
	//tmp += tgString.charAt((cYear - 4) % 10);
	//tmp += dzString.charAt((cYear - 4) % 12);
	//tmp += "年 ";
	if (cMonth < 1) {
		tmp += "(闰)";
		tmp += monString.charAt(-cMonth - 1);
	} else {
		tmp += monString.charAt(cMonth - 1);
	}
	tmp += "月";
	tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿"
			: "三十"));
	if (cDay % 10 != 0 || cDay == 10) {
		tmp += numString.charAt((cDay - 1) % 10);
	}
	return tmp;
}
function GetLunarDay(solarYear, solarMonth, solarDay) {
	if (solarYear<1921 || solarYear>2020) {
		return "";
	} else {
		solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
		e2c(solarYear, solarMonth, solarDay);
		return GetcDateString();
	}
}
var D = new Date();
var yy = D.getFullYear();
var mm = D.getMonth() + 1;
var dd = D.getDate();
var ww = D.getDay();
var ss = parseInt(D.getTime() / 1000);
function getFullYear(d) {
	yr = d.getYear();
	if (yr < 1000)
		yr += 1900;
	return yr;
}

function showTime() {
	var dNow=new Date();
	var Hours=(dNow.getHours()<10)?"0"+dNow.getHours():dNow.getHours();
	var Minutes=(dNow.getMinutes()<10)?"0"+dNow.getMinutes():dNow.getMinutes();
	document.getElementById("pTime").innerHTML = Hours + ":" + Minutes;
	var timeID=setTimeout(showTime,1000);
}

//加入收藏
function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}

$(document).ready(function() {
//显示日期	
  var sValue = getFullYear(dNow) + "年" + (dNow.getMonth() + 1) + "月" + dNow.getDate() + "日"
  sValue += " （" + GetLunarDay(yy, mm, dd) + "） ";
  sValue += sWeek[dNow.getDay()];
  document.getElementById("pDate").innerHTML = sValue;

//显示时间 
  showTime();

//显示隐藏菜单
  $(".header .mid .menu").click(function () {
	  if($(".header .nav").height()>0){
		  $(".header .nav").animate({height:0});
	  }else{
		  $(".header .nav").animate({height:$(".header .nav ul").height()});
	  }
  });
})
$(window).resize(function(){
	if($(window).width()>719){
		$(".header .nav").removeAttr("style");
	}
})