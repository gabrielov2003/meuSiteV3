var esteAnterior="";//Para funcao de zoom da imagem
var picOpened=false;//Para funcao de zoom da imagem
var postOpened=0;//Post aberto
//Page zoom:
document.body.style.zoom = 1.1;

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
		closePic();
		closeAll();
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
	closePosts();
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

//Open and close Posts:
var postButtonClicked = document.getElementsByClassName("postsBut");
function openPost(postNum)
{
	for (i=0; i<postButtonClicked.length; i++)
	{
		postButtonClicked[i].setAttribute("style", "display: none");
	}
	document.getElementById("pb"+postNum).setAttribute("style", "display: block;margin-left: 158px;");
	document.getElementById("p"+postNum).setAttribute("style", "display: block;");
	document.getElementById("close").setAttribute("style", "display: block;");
	postOpened = postNum;
}
function closePosts()
{
	for (i=0; i<postButtonClicked.length; i++)
	{
		postButtonClicked[i].setAttribute("style", "display: block;margin-left: 2px;");
	}
	document.getElementById("close").setAttribute("style", "display: none;");
	if(postOpened!=0)
	{document.getElementById("p"+postOpened).setAttribute("style", "display: none;");}
	postOpened = 0;
	closePic();
}

//Zoom Picture:

function zoomPic(este)
{
	if (picOpened == false)
	{
		este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;");
		picOpened = true;
		esteAnterior = este;
	}
	else
	{
		if (esteAnterior == este)
		{
			este.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
			picOpened = false;
		}
		else 
		{
			esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
			este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;");
			picOpened=true;
			esteAnterior=este;
		}
	}
}
function closePic(teste)
{
	if (picOpened==true)
	{
		esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
		picOpened=false;
		esteAnterior="";
		console.log("vtnc")
	}
}

//Open Email Box

function openEmailBox ()
{
	var contactButtons = document.getElementsByClassName("contactOptions");
	var emailBox = document.getElementsByClassName("emailBox")
	contactButtons[0].setAttribute("style", "display:none;");
	emailBox[0].setAttribute("style", "display:block;");
	document.getElementById("closeMessage").setAttribute("style", "display: block;");
}
function closeMessage()
{
	var contactButtons = document.getElementsByClassName("contactOptions");
	var emailBox = document.getElementsByClassName("emailBox")
	contactButtons[0].setAttribute("style", "display:block;");
	emailBox[0].setAttribute("style", "display:none;");
	document.getElementById("closeMessage").setAttribute("style", "display: none;");
}


