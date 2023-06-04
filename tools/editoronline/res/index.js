function getOpt(mode){
	return {
		theme: "ace/theme/monokai",
		mode: mode,
		autoScrollEditorIntoView: true,
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	}
}
(function() {
	var editor1 = ace.edit("editor1", getOpt("ace/mode/html"));
	var editor2 = ace.edit("editor2", getOpt("ace/mode/css"));
	var editor3 = ace.edit("editor3", getOpt("ace/mode/javascript"));
	document.querySelector(`#submit`).addEventListener(`click`, function() {
		document.getElementById(`preview`).srcdoc =`<!DOCTYPE html><html><head><meta charset="utf-8"/>` +
			`<title>代码测试</title>` +
			`<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>` +
			`<meta name="format-detection" content="telephone=no" />` +
			`<meta name="apple-mobile-web-app-status-bar-style" content="black" />` +
			`<meta name="apple-mobile-web-app-capable" content="yes" />` +
			`<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge"/>` +
			`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>` +
			`<style type="text/css">` + editor2.getValue() + `</style>` +
			`<script type="text/javascript" src="https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js"><\/script>` +
			`<script type="text/javascript">new window.VConsole();<\/script>` +
			`</head><body>` + editor1.getValue() + `</body></html>`+
			`<script type="text/javascript">` + editor3.getValue() + `<\/script>`;
	});
})()