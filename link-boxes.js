const replaceReg = /\[(.*)\]\((.*)\+(.*)\)/g;
const divSelector = ".link-boxes";

function replacer(m, p1, p2, p3) {
	//Get the image file name
	var img = p3.split('/')
	img = img[img.length - 1];

	//Return the generated HTML code
	var box =
	'<a href="' + p2 + '" class="link-box">' +
		'<div class="avatar">' +
			'<img src="' + p3 + '" alt="' + img + '">' +
		'</div>' +
		'<div class="nickname">' + p1 + '</div>' +
	'</a>'
	return box;
}

document.querySelectorAll(divSelector)
.forEach(function(content) {
	content.innerHTML = content.innerHTML
	.replace(replaceReg, replacer);
});
