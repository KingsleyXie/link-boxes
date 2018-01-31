const regExp = /\[(.*)\]\((.*):(.*)\|(.*)\)/g;
const divSelector = ".link-boxes";

document.querySelector(divSelector).innerHTML =
document.querySelector(divSelector).innerHTML
.replace(regExp,
'<a href="$2" class="link-box">' +
	'<div class="avatar">' +
		'<img src="$3" alt="$4">' +
	'</div>' +
	'<div class="nickname">$1</div>' +
'</a>'
);
