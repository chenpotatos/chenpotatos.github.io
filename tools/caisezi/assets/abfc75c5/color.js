

var oDiv;
var oTxt;

function DivSetVisible(state)
{
var DivRef = document.getElementById('colorDiv');
var IfrRef = document.getElementById('colorDivShim');
if(state)
{
DivRef.style.display = "block";
IfrRef.style.width = DivRef.offsetWidth;
IfrRef.style.height = DivRef.offsetHeight;
IfrRef.style.top = DivRef.style.top;
IfrRef.style.left = DivRef.style.left;
IfrRef.style.zIndex = DivRef.style.zIndex - 1;
IfrRef.style.display = "block";
}
else
{
DivRef.style.display = "none";
IfrRef.style.display = "none";
}
}

function ShowColorDiv(event,odiv,otxt)
{
var event=window.event||event;
 oDiv=odiv;
 oTxt=otxt;
 document.all.colorDiv.style.left=document.body.scrollLeft+event.clientX+2+'px';
 document.all.colorDiv.style.top=document.body.scrollTop+event.clientY+2+'px';
if (parseInt(document.all.colorDiv.style.left)+document.all.colorDiv.offsetWidth>=screen.width){
    document.all.colorDiv.style.left = event.clientX - document.all.colorDiv.offsetWidth;
}
 DivSetVisible(true);
 document.all.colorDiv.style.visibility="visible" ;
 g_click=1;
}
function ChangColor(strColor)
{
 DivSetVisible(false);
 document.all[oDiv].style.backgroundColor='#'+strColor;
 document.all[oTxt].value='0x'+strColor;
 document.all.colorDiv.style.visibility="hidden" ;
}

function CloseDiv()
{
 DivSetVisible(false);
 document.all.colorDiv.style.visibility="hidden" ;
}

var ss="00|33|66|99|CC|FF";
var aa1=ss.split("|");
var i,j,k;
var color;
document.write('<iframe id="colorDivShim" src="javascript:false;" scrolling="no" frameborder="0" style="position:absolute; top:0px; left:0px; display:none;"></iframe>');
document.write('<div id="colorDiv" style="visibility:hidden;position: absolute;z-index:100;display:none; ">');
document.write('<table style="cursor:hand;width:217px;" cellpadding="0" cellspacing="1" bgcolor="#000000" >');
document.write('<tr>');
document.write('<td colspan="18" height="11" bgcolor="#ffffff" align="right" onclick="javascript:CloseDiv();">关闭&nbsp;</td>');
document.write('</tr>');

for (i=0;i<aa1.length;i++){
  document.write('<tr>');
  for (j=0;j<3;j++){
    for (k=0;k<aa1.length;k++){
	  color=aa1[j]+aa1[k]+aa1[i];
	  document.write('<td onclick="ChangColor(\''+color+'\')" width="11" height="11" bgcolor="#'+color+'"></td>');
	}
  }
  document.write('</tr>');
}

for (i=0;i<aa1.length;i++){
  document.write('<tr>');
  for (j=3;j<aa1.length;j++){
    for (k=0;k<aa1.length;k++){
	  color=aa1[j]+aa1[k]+aa1[i];
	  document.write('<td onclick="ChangColor(\''+color+'\')" width="11" height="11" bgcolor="#'+color+'"></td>');
	}
  }
  document.write('</tr>');
}

document.write('<tr>');
for (i=0;i<aa1.length;i++){
	  color=aa1[i]+aa1[i]+aa1[i];
	  document.write('<td onclick="ChangColor(\''+color+'\')" width="11" height="11" bgcolor="#'+color+'"></td>');
}
document.write('</tr>');

document.write('</table>');
document.write('</div>');
//alert('complete');
