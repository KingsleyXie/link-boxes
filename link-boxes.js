const filterReg = /\[(.*)\]\((.*)\+([^\|]*)\)/g;
const replaceReg = /\[(.*)\]\((.*)\+(.*)\|(.*)\)/g;
const divSelector = ".link-boxes";

function filter(m, p1, p2, p3) {
	//Get the short path of image
	var t = p3.split('/')
	t = t[t.length - 1];

	//Rejoin the string with an `alt` value
	return '[' + p1 + '](' + p2 + '+' + p3 + '|' + t + ')';
}

document.querySelectorAll(divSelector)
.forEach(function(content) {
	content.innerHTML = content.innerHTML
	.replace(filterReg, filter);
});

document.querySelectorAll(divSelector)
.forEach(function(content) {
	content.innerHTML = content.innerHTML
	.replace(replaceReg,
	'<a href="$2" class="link-box">' +
	'<div class="avatar">' +
		'<img src="$3" alt="$4">' +
	'</div>' +
	'<div class="nickname">$1</div>' +
	'</a>');
});
