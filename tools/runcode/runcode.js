(
	function()
	{
		window.onload = function()
		{
			var tips = "将HTML代码粘在此处，点击运行即可。";
			var codeinp = document.getElementById("codeinp");
			var btclear = document.getElementById("btclear");
			var btrun = document.getElementById("btrun");
			
			codeinp.onfocus = function()
			{
				var code = codeinp.value;
				code == tips && (codeinp.value = "");
			};
			
			codeinp.onblur = function()
			{
				var code = codeinp.value;
				code == "" && (codeinp.value = tips);
			};
			
			btclear.onclick = function()
			{
				codeinp.value = "";
				codeinp.focus();
			};
			
			btrun.onclick = function()
			{
				var code = codeinp.value;
				if(code != tips)
				{
					var newwin = window.open('','','');
					newwin.opener = null;
					newwin.document.write(code);
					newwin.document.close();
				}
				else
				{
					alert("请将需要运行的HTML填写到输入框后再运行！", "alert", "运行提示");
				}
			};
		}
	}
)();