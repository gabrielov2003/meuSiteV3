
// Language Switch:

var p;
p = document.getElementsByClassName("pt");
var e;
e = document.getElementsByClassName("ing");
var i;

function switchPt()
{
	document.getElementById("bPt").setAttribute("style", "background-color: rgb(31, 71, 87)");
	document.getElementById("bIng").setAttribute("style", "background-color: rgb(97,165, 216)");
	
	for (i=0; i<p.length; i++)
	{
		p[i].style.display="block";
		e[i].style.display="none";
	}
}

function switchEng()
{
	for (i=0; i<p.length; i++)
	{
		e[i].style.display="block";
		p[i].style.display="none";
	}
	document.getElementById("bIng").setAttribute("style", "background-color: rgb(31, 71, 87)");
	document.getElementById("bPt").setAttribute("style", "background-color: rgb(97,165, 216)");
}

lng = navigator.language;
console.log("page language:",lng);
if (lng == "pt-BR")
{
	setTimeout(() => {  switchPt();}, 200);
}

//Change Page:
var lastPage = 0;
function openPage(pageOpened)
{
	if (pageOpened != lastPage)
	{
		closeAll()
		document.getElementById("tabpage_"+pageOpened).setAttribute("style", "display: block");
		document.getElementById("label"+pageOpened).setAttribute("style", "background-color: rgb(31, 71, 87)");
		document.getElementById("welcomeText").setAttribute("style", "display: none");
	}
}

//Close All Pages
function closeAll()
{
	document.getElementById("tabpage_1").setAttribute("style", "display: none");
	document.getElementById("tabpage_2").setAttribute("style", "display: none");
	document.getElementById("tabpage_3").setAttribute("style", "display: none");
	document.getElementById("tabpage_4").setAttribute("style", "display: none");
	document.getElementById("label1").setAttribute("style", "background-color: rgb(97,165, 216)");
	document.getElementById("label2").setAttribute("style", "background-color: rgb(97,165, 216)");
	document.getElementById("label3").setAttribute("style", "background-color: rgb(97,165, 216)");
	document.getElementById("label4").setAttribute("style", "background-color: rgb(97,165, 216)");
}

//Copy My Email Popup

function showBox() {document.getElementById("box").setAttribute("style", "display: block");}
function stretchBox() {document.getElementById("box").classList.add('horizTranslate');}
function hideBox() {document.getElementById("box").style.display="none";}
function squeezeBox() {document.getElementById("box").classList.remove('horizTranslate'); }

function copyEmail()
{
	var copyText = document.getElementById("myInput");
	document.getElementById("myInput").setAttribute("style", "display: block");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.getElementById("myInput").setAttribute("style", "display: none");
	//document.getElementById("darkBox").setAttribute("style", "display: block");
	showBox();
	setTimeout(stretchBox, 2);
	setTimeout(closePopup, 3000);
}
function closePopup()
{
	//document.getElementById("darkBox").setAttribute("style", "display: none");
	setTimeout(squeezeBox, 1);
	setTimeout(hideBox, 300);
}
