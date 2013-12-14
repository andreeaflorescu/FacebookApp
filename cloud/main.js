
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
//Parse.Cloud.define("hello", function(request, response) {
//  response.success("Hello world!");
//});
<!--FACEBOOK LOGIN-->




var handleLogin = function() {
    Parse.FacebookUtils.logIn(null, {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");
            } else {
                alert("User logged in through Facebook!");
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });
}

//
//var handleFacbookLogin = function(e) {
//    var self = this;
//
//    $(".fb_content").hide();
//    $(".facebook_button")
//        .addClass("disabled")
//        .empty()
//        .spin({length: 5, radius: 5, lines: 8, width: 3, color: "#fff"});
//
//    if (Parse.User.current()) {
//        this.saveHighScore();
//    } else {
//        Parse.FacebookUtils.logIn(null, {
//            success: function(user) {
//                // If it's a new user, let's fetch their name from FB
//                if (!user.existed()) {
//                    // We make a graph request
//                    FB.api('/me', function(response) {
//                        if (!response.error) {
//                            // We save the data on the Parse user
//                            user.set("displayName", response.name);
//                            user.save(null, {
//                                success: function(user) {
//                                    // And finally save the new score
//                                    self.saveHighScore();
//                                },
//                                error: function(user, error) {
//                                    console.log("Oops, something went wrong saving your name.");
//                                }
//                            });
//                        } else {
//                            console.log("Oops something went wrong with facebook.");
//                        }
//                    });
//                    // If it's an existing user that was logged in, we save the score
//                } else {
//                    self.saveHighScore();
//                }
//            },
//            error: function(user, error) {
//                console.log("Oops, something went wrong.");
//            }
//        });
//    }
//}