//
////Use Parse.Cloud.define to define as many cloud functions as you want.
////For example:
//Parse.Cloud.define("hello", function(request, response) {
//  response.success("Hello world!");
//});
//
////var query = new Parse.Query(Parse.Event);
////query.find("*").then(function(results) {
////    console.log(results);
////});
//
//Parse.Cloud.define("mata", function(request, response) {
//    var Event = Parse.Object.extend("Event");
//    var event_new = new Event();
//    event_new.save({
//        name:  'Party',
//        description: '',
//        location: 'Not Available...Maybe you should contact the user?',
//        date:  "",
//        from: '',
//        dressCode:'none',
//        people: 'Everybody lost count!'
//    }, {
//        success: function() {
//            // The object was saved successfully.
//            response.success("Email sent!");
//        },
//        error: function(gameScore, error) {
//            // The save failed.
//            // error is a Parse.Error with an error code and description.
//            response.error("caca");
//        }
//    });
//});
//
//var page = $(document);
//page.on('click', '#mata',function(){
//    Parse.Cloud.run('mata', {}, {
//        success: function(result) {
//            // result is 'Hello world!'
//        },
//        error: function(error) {
//        }
//    });
//
//});
