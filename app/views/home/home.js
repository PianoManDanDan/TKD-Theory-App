var frameModule = require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var dialogsModule = require("ui/dialogs");
var utilityModule = require("utils/utils");
var user = new UserViewModel();
var page;


exports.loaded = function(args) {
    page = args.object;
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
    page.bindingContext = user;
};

//function nya shows an alert warning the user that that content is not yet available within the app
exports.nya = function() {
	dialogsModule
        .alert({
            message: "Unfortunately this information is not yet available.\nPlease check back soon.",
            okButtonText: "OK"
        });

};

//funciton onAbout changes view to about page
exports.onAbout = function() {
	frameModule.topmost().navigate("views/about/about");
};