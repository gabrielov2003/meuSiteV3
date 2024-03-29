var esteAnterior = ""; //zoom function
var picOpened = false; //zoom function
var postOpened = 0; //Post aberto
var skillOpened = 0; //Skill aberta
var mainPage; //Open main page
var contactPage; //Open contact page
var p = document.getElementsByClassName("pt"); //Textos em pt
var e = document.getElementsByClassName("ing"); //Textos em ing

// Language Switch:

function switchPt() {
	for (i = 0; i < p.length; i++) {
		p[i].style.display = "block";
		e[i].style.display = "none";
	}
	document.getElementById("pt-but").style.backgroundColor = "rgb(31, 71, 87)";
	document.getElementById("ing-but").style.backgroundColor = "rgb(97,165, 216)";
	document.documentElement.lang = "pt-br";
}

function switchEng() {
	for (i = 0; i < p.length; i++) {
		e[i].style.display = "block";
		p[i].style.display = "none";
	}
	document.getElementById("ing-but").style.backgroundColor = "rgb(31, 71, 87)";
	document.getElementById("pt-but").style.backgroundColor = "rgb(97,165, 216)";
	document.documentElement.lang = "en";
}

//Switch to navigator's default language
function openFunction() {
	lng = navigator.language;
	console.log("page language:", lng);
	if (lng == "pt-BR") {
		switchPt();
	}
}



//Scroll to different pages
function scrollProfile() {
	closeContact();
	document.getElementById("perfil").scrollIntoView();
}

function scrollResume() {
	closeContact();
	document.getElementById("sobreMim").scrollIntoView();
}

function scrollSkills() {
	closeContact();
	document.getElementById("compt").scrollIntoView();

}

function scrollPortf() {
	closeContact();
	document.getElementById("lastPage").scrollIntoView();
}

function scrollToPost() {
	var postView = document.getElementById("postView");
	postView.scrollIntoView();
}

function scrollToSkill() {
	var skillView = document.getElementById("skillView");
	skillView.scrollIntoView();
}

//Open and close contact page:

function scrollContact() {
	mainPage = document.getElementsByClassName("main-content");
	mainPage[0].style.display = "none";
	contactPage = document.getElementsByClassName("contact-page");
	contactPage[0].style.display = "block";
	navClose();
	closePost();
	closeSkill();
}

function closeContact() {
	mainPage = document.getElementsByClassName("main-content");
	mainPage[0].style.display = "block";
	contactPage = document.getElementsByClassName("contact-page");
	contactPage[0].style.display = "none";
	navClose()
	closeStatus()
	closeEmailBox()
}

//Scroll all the way up

function scrollUp() {
	window.scrollTo(0, 0);
}


//Shows go-up button
window.onscroll = function () {
	myFunction()
};

function myFunction() {
	goup = document.getElementsByClassName("go-up");
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		goup[0].setAttribute("style", "bottom:5px;absolute;z-index:1000001;");
	} else {
		goup[0].setAttribute("style", "bottom:-120px;absolute;z-index:1000001;");
	}
}

//Open and close email box functions 
function openEmailBox() {
	var contactButtons = document.getElementsByClassName("contact-options");
	var emailBox = document.getElementsByClassName("email-box")
	contactButtons[0].style.display = "none";
	emailBox[0].style.display = "block";
	document.getElementById("close-message").style.display = "block";
}

function closeEmailBox() {
	var contactButtons = document.getElementsByClassName("contact-options");
	var emailBox = document.getElementsByClassName("email-box")
	contactButtons[0].style.display = "block";
	emailBox[0].style.display = "none";
	document.getElementById("close-message").style.display = "none";
	closeStatus();
}

//Open buttons list for mobile:
var listOpened = false;

function navToggle() {
	if (listOpened == false) {
		listOpened = true;
		document.getElementById("buttons-list").style.display = "block";
	} else {
		listOpened = false;
		document.getElementById("buttons-list").style.display = "none";
	}
}

function navClose() {
	listOpened = false;
	document.getElementById("buttons-list").style.display = "none";
}

function navOpen() {
	listOpened = true;
	document.getElementById("buttons-list").style.display = "block";
}

//Open and close Posts/Skills:
var buttonClicked = document.getElementsByClassName("skills-but");

function openSkill(skillNum) {
	for (i = 0; i < buttonClicked.length; i++) {
		buttonClicked[i].style.display = "none";
	}
	document.getElementById("s" + skillNum).style.display = "block";
	close = document.getElementsByClassName("close-but");
	close[0].style.display = "block";
	scrollToSkill();
	skillOpened = skillNum;
}

function closeSkill() {
	for (i = 0; i < buttonClicked.length; i++) {
		buttonClicked[i].style.display = "block";
		buttonClicked[i].style.marginLeft = "0px";
	}
	close = document.getElementsByClassName("close-but");
	close[0].style.display = "none";
	if (skillOpened != 0) {
		document.getElementById("s" + skillOpened).style.display = "none";
	}
	skillOpened = 0;
	closePic();
}

var postButtonClicked = document.getElementsByClassName("posts-but");

function openPost(postNum) {
	for (i = 0; i < postButtonClicked.length; i++) {
		postButtonClicked[i].style.display = "none";
	}
	document.getElementById("p" + postNum).style.display = "block";
	close = document.getElementsByClassName("close-but");
	close[1].style.display = "block";
	scrollToPost();
	postOpened = postNum;
}

function closePost() {
	for (i = 0; i < postButtonClicked.length; i++) {
		postButtonClicked[i].style.marginLeft = "0px";
		postButtonClicked[i].style.display = "block";
	}
	var videos = document.getElementsByTagName("video");
	for (index = 0; index < videos.length; index++) {
		videos[index].pause();
	}
	close = document.getElementsByClassName("close-but");
	close[1].style.display = "none";
	if (postOpened != 0) {
		document.getElementById("p" + postOpened).style.display = "none";
	}
	postOpened = 0;
	closePic();
}

function openP4() { //Fix bug with text problem on button of skill6
	var p = "4p";
	openPost(p);
}

//Zoom Picture:

function zoomPic(este) {
	if (window.screen.width > 691) {
		if (picOpened == false) {
			este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;position:relative; z-index:100");
			picOpened = true;
			esteAnterior = este;
		} else {
			if (esteAnterior == este) {
				este.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;position:relative; z-index:10");
				picOpened = false;
			} else {
				esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;position:relative; z-index:10");
				este.setAttribute("style", "transform: scale(1.8);-ms-transform: scale(1.8);-webkit-transform: scale(1.8);cursor: zoom-out;position:relative; z-index:100");
				picOpened = true;
				esteAnterior = este;
			}
		}
	}
}

function closePic() {
	if (picOpened == true) {
		esteAnterior.setAttribute("style", "transform: scale(1);-ms-transform: scale(1);-webkit-transform: scale(1);cursor: zoom-in;position:relative; z-index:10");
		picOpened = false;
		esteAnterior = "";
	}
}


//Contact Form Submit:
window.addEventListener("DOMContentLoaded", function () {

	// get the form elements defined in your form HTML above

	var form = document.getElementById("my-form");
	var button = document.getElementById("my-form-button");
	var statusSuccess = document.getElementById("status");
	var statusError = document.getElementById("status-error");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		statusSuccess.style.display = "block";
		statusError.style.display = "none";
	}

	function error() {
		statusError.style.display = "block";
		statusSuccess.style.display = "none";
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


function closeStatus() {
	document.getElementById("status-error").style.display = "none";
	document.getElementById("status").style.display = "none";
}
//Contact Form End

//Watson:

window.watsonAssistantChatOptions = {
	integrationID: "99990010-92a7-4b6d-9000-f17ecdc06321", // The ID of this integration.
	region: "us-south", // The region your integration is hosted in.
	serviceInstanceID: "cb8a10a1-d6fd-4bc3-bb46-1f7ecd46b6be", // The ID of your service instance.
	onLoad: function (instance) {
		instance.updateCSSVariables({
			'BASE-z-index': '1000002',
		})
		instance.render();
	}
};
setTimeout(function () {
	const t = document.createElement('script');
	t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
	document.head.appendChild(t);
});