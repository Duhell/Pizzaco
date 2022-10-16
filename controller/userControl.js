exports.landingPage = function (request, respond){
	respond.render('index')
}

exports.register = function (request,respond){
	respond.render('register')
}
exports.contact = function (request,respond){
	respond.render('contact')
}
exports.about = function (request,respond){
	respond.render('about')
}
exports.menu = function (request,respond){
	respond.render('menu')
}