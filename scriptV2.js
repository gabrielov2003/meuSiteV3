var esteAnterior = ""; //Para funcao de zoom da imagem
var picOpened = false; //Para funcao de zoom da imagem
var postOpened = 0; //Post aberto
var skillOpened = 0; //Skill aberta
var mainPage;
var contactPage;

//Page zoom:
document.body.style.zoom = 1.1;

// Language Switch:

var p;
p = document.getElementsByClassName("pt");
var e;
e = document.getElementsByClassName("ing");
var i;

function switchPt() {
	document.getElementById("bPt").setAttribute("style", "background-color: rgb(31, 71, 87)");
	document.getElementById("bIng").setAttribute("style", "background-color: rgb(97,165, 216)");

	for (i = 0; i < p.length; i++) {
		p[i].style.display = "block";
		e[i].style.display = "none";
	}
}

function switchEng() {
	for (i = 0; i < p.length; i++) {
		e[i].style.display = "block";
		p[i].style.display = "none";
	}
	document.getElementById("bIng").setAttribute("style", "background-color: rgb(31, 71, 87)");
	document.getElementById("bPt").setAttribute("style", "background-color: rgb(97,165, 216)");
}

lng = navigator.language;
console.log("page language:", lng);
if (lng == "pt-BR") {
	setTimeout(() => {
		switchPt();
	}, 200);
}

//Scroll Profile //Mudar conforme lingua

function scrollProfile() {
	closeContact();
	document.getElementById("perfil").scrollIntoView();
	window.scrollBy(0, 100);
}

function scrollResume() {
	closeContact();
	document.getElementById("sobreMim").scrollIntoView();
}

function scrollSkills() {
	closeContact();
	document.getElementById("compt").scrollIntoView();
	window.scrollBy(0, -100);
}

function scrollPortf() {
	closeContact();
	document.getElementById("lastPage").scrollIntoView();
}

function scrollContact() {
	mainPage = document.getElementsByClassName("main-content");
	mainPage[0].style.display = "none";
	contactPage = document.getElementsByClassName("contact-page");
	contactPage[0].style.display = "block";
	navToggle()
}

function closeContact() {
	mainPage = document.getElementsByClassName("main-content");
	mainPage[0].style.display = "block";
	contactPage = document.getElementsByClassName("contact-page");
	contactPage[0].style.display = "none";
	navToggle()
}

function scrollUp() {
	window.scrollTo(0, 0);
}
//Page scroll
window.onscroll = function () {
	myFunction()
};

function myFunction() {
	goup = document.getElementsByClassName("go-up");
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		goup[0].setAttribute("style", "bottom:5px;");
	} else {
		goup[0].setAttribute("style", "bottom:-120px;");
	}
}

function openEmailBox() {
	var contactButtons = document.getElementsByClassName("contactOptions");
	var emailBox = document.getElementsByClassName("emailBox")
	contactButtons[0].setAttribute("style", "display:none;");
	emailBox[0].setAttribute("style", "display:block;");
	document.getElementById("closeMessage").setAttribute("style", "display: block;");
}

function closeMessage() {
	var contactButtons = document.getElementsByClassName("contactOptions");
	var emailBox = document.getElementsByClassName("emailBox")
	contactButtons[0].setAttribute("style", "display:block;");
	emailBox[0].setAttribute("style", "display:none;");
	document.getElementById("closeMessage").setAttribute("style", "display: none;");
}

//Open buttons list:
var listOpened = false;

function navToggle() {
	if (listOpened == false) {
		listOpened = true;
		document.getElementById("buttons-list").setAttribute("style", "display: block;");
	} else {
		listOpened = false;
		document.getElementById("buttons-list").setAttribute("style", "display: none;");
	}
}

//Open and close Posts/Skills:
var buttonClicked = document.getElementsByClassName("skills-but");

function openSkill(skillNum) {
	for (i = 0; i < buttonClicked.length; i++) {
		buttonClicked[i].setAttribute("style", "display: none;");
	}
	document.getElementById("s" + skillNum).setAttribute("style", "display: block;");
	close = document.getElementsByClassName("closeBut");
	close[0].setAttribute("style", "display: block;");
	skillOpened = skillNum;
}

function closeSkill() {
	for (i = 0; i < buttonClicked.length; i++) {
		buttonClicked[i].setAttribute("style", "display: block;margin-left:0px;");
	}
	close = document.getElementsByClassName("closeBut");
	close[0].setAttribute("style", "display: none;");
	if (skillOpened != 0) {
		document.getElementById("s" + skillOpened).setAttribute("style", "display: none;");
	}
	skillOpened = 0;
	closePic();
}

var postButtonClicked = document.getElementsByClassName("posts-but");

function openPost(postNum) {
	console.log("p" + postNum);
	for (i = 0; i < postButtonClicked.length; i++) {
		postButtonClicked[i].setAttribute("style", "display: none;");
	}
	document.getElementById("p" + postNum).setAttribute("style", "display: block;");
	close = document.getElementsByClassName("closeBut");
	close[1].setAttribute("style", "display: block;");
	postOpened = postNum;
}

function closePost() {
	for (i = 0; i < postButtonClicked.length; i++) {
		postButtonClicked[i].setAttribute("style", "display: block;margin-left:0px;");
	}
	close = document.getElementsByClassName("closeBut");
	close[1].setAttribute("style", "display: none;");
	if (postOpened != 0) {
		document.getElementById("p" + postOpened).setAttribute("style", "display: none;");
	}
	postOpened = 0;
	closePic();
}

//Zoom Picture:

function zoomPic(este) {
	if (picOpened == false) {
		este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;");
		picOpened = true;
		esteAnterior = este;
	} else {
		if (esteAnterior == este) {
			este.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
			picOpened = false;
		} else {
			esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
			este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;");
			picOpened = true;
			esteAnterior = este;
		}
	}
}

function closePic() {
	if (picOpened == true) {
		esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;");
		picOpened = false;
		esteAnterior = "";
		console.log("vtnc")
	}
}


//Contact Form Submit:
window.addEventListener("DOMContentLoaded", function () {

	// get the form elements defined in your form HTML above

	var form = document.getElementById("my-form");
	var button = document.getElementById("my-form-button");
	var statusSuccess = document.getElementById("status");
	var statusError = document.getElementById("statusError");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		statusSuccess.setAttribute("style", "display: block;");
		statusError.setAttribute("style", "display: none;");
	}

	function error() {
		statusError.setAttribute("style", "display: block;");
		statusSuccess.setAttribute("style", "display: none;");
	}

	// handle the form submission event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
//Contact Form End