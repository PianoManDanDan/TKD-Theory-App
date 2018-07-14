var frameModule = require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var dialogsModule = require("ui/dialogs");
var utilityModule = require("utils/utils");
var user = new UserViewModel();


exports.loaded = function(args) {
    page = args.object;
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
    page.bindingContext = user;
};

exports.nya = function() {
	dialogsModule
        .alert({
            message: "Unfortunately the information for this belt is not yet available.\nPlease check back soon.",
            okButtonText: "OK"
        });

};