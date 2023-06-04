var img = document.getElementById('img'),
	imgShow = document.getElementById('imgShow'),
	conte = document.getElementById('conte'),
	len = document.getElementById('len'),
	start = document.getElementById('start'),
	cpData = document.getElementById('cpData');
cpData.addEventListener('click', cpDataF);
start.addEventListener('click', startt);
/*转换函数*/
function startt() {
	var imgFile = new FileReader();
	imgFile.readAsDataURL(img.files[0]);
	imgFile.onload = function() {
		var imgData = this.result; //base64数据    
		imgShow.setAttribute('src', imgData);
		conte.value = imgData;
		len.innerHTML += imgData.length;
	}
}
/*复制数据*/
function cpDataF() {
	conte.select(); // 选择对象    
	var cpd = document.execCommand("Copy"); // 执行浏览器复制命令    
	cpd ? document.getElementById('succ').innerHTML = '复制成功' : 　console.warn('复制失败');
	window.setTimeout(function() {
		document.getElementById('succ').innerHTML = '';
	}, 1000)
}