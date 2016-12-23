var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");
var server = supertest.agent("http://localhost:8080");


describe("Testing login route", function(err){
  it("should handle and send the success message", function(done){
	  var lo={"username":"savan","password":"1234","name":"savan"};
    url
        .post("/user/login")
		.send(lo)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  });

});


/*
describe("Testing Save restaurant details", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"savan","password":"1234","name":"savan"};
    server
        .post("/user/login")
		.send(lo)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });



  it("should handle and send the success message", function(done){
	  var dt={
      "id": "16774318",
  "name": "Otto Enoteca & Pizzeria",
  "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
  "location": {
    "address": "1 5th Avenue, New York, NY 10003",
    "locality": "Greenwich Village",
    "city": "New York City",
    "latitude": "40.732013",
    "longitude": "-73.996155",
    "zipcode": "10003",
    "country_id": "216"
  },
  "average_cost_for_two": "60",
  "price_range": "2",
  "currency": "$",
  "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
  "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
  "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
  "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
  "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
  "user_rating": {
    "aggregate_rating": "3.7",
    "rating_text": "Very Good",
    "rating_color": "5BA829",
    "votes": "1046"
  },
  "has_online_delivery": "0",
  "is_delivering_now": "0",
  "has_table_booking": "0",
  "deeplink": "zomato://r/16774318",
  "cuisines": "Cafe",
  "all_reviews_count": "15",
  "photo_count": "18",
  "phone_numbers": "(212) 228-2930",
  "photos": [
    {
      "id": "u_MjA5MjY1OTk5OT",
      "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
      "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
      "user": {
        "name": "John Doe",
        "zomato_handle": "John",
        "foodie_level": "Super Foodie",
        "foodie_level_num": "9",
        "foodie_color": "f58552",
        "profile_url": "https://www.zomato.com/john",
        "profile_deeplink": "zoma.to/u/1170245",
        "profile_image": "string"
      },
      "res_id": "16782899",
      "caption": "#awesome",
      "timestamp": "1435111770",
      "friendly_time": "3 months ago",
      "width": "640",
      "height": "640",
      "comments_count": "0",
      "likes_count": "0"
    }
  ],
  "all_reviews": [
    {
      "rating": "5",
      "review_text": "The best latte I've ever had. It tasted a little sweet",
      "id": "24127336",
      "rating_color": "305D02",
      "review_time_friendly": "2 months ago",
      "rating_text": "Insane!",
      "timestamp": "1435507367",
      "likes": "0",
      "user": {
        "name": "John Doe",
        "zomato_handle": "John",
        "foodie_level": "Super Foodie",
        "foodie_level_num": "9",
        "foodie_color": "f58552",
        "profile_url": "https://www.zomato.com/john",
        "profile_deeplink": "zoma.to/u/1170245",
        "profile_image": "string"
      },
      "comments_count": "0"
    }
  ]

};
    server
	.post("/restaurantDetails/saveRestaurant")
		.send(dt)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Saved Successfully",res.text, "res.text is not matching with Saved Successfully");
          done();
        });

  });

  });
});


describe("Testing Save restaurant details", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"savan","password":"1234","name":"savan"};
    server
        .post("/user/login")
		.send(lo)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });



  it("should handle and send the success message", function(done){
	  var dt={

      "id": "16774318",
  "name": "Otto Enoteca & Pizzeria",
  "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
  "location": {
    "address": "1 5th Avenue, New York, NY 10003",
    "locality": "Greenwich Village",
    "city": "New York City",
    "latitude": "40.732013",
    "longitude": "-73.996155",
    "zipcode": "10003",
    "country_id": "216"
  },
  "average_cost_for_two": "60",
  "price_range": "2",
  "currency": "$",
  "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
  "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
  "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
  "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
  "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
  "user_rating": {
    "aggregate_rating": "3.7",
    "rating_text": "Very Good",
    "rating_color": "5BA829",
    "votes": "1046"
  },
  "has_online_delivery": "0",
  "is_delivering_now": "0",
  "has_table_booking": "0",
  "deeplink": "zomato://r/16774318",
  "cuisines": "Cafe",
  "all_reviews_count": "15",
  "photo_count": "18",
  "phone_numbers": "(212) 228-2930",
  "photos": [
    {
      "id": "u_MjA5MjY1OTk5OT",
      "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
      "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
      "user": {
        "name": "John Doe",
        "zomato_handle": "John",
        "foodie_level": "Super Foodie",
        "foodie_level_num": "9",
        "foodie_color": "f58552",
        "profile_url": "https://www.zomato.com/john",
        "profile_deeplink": "zoma.to/u/1170245",
        "profile_image": "string"
      },
      "res_id": "16782899",
      "caption": "#awesome",
      "timestamp": "1435111770",
      "friendly_time": "3 months ago",
      "width": "640",
      "height": "640",
      "comments_count": "0",
      "likes_count": "0"
    }
  ],
  "all_reviews": [
    {
      "rating": "5",
      "review_text": "The best latte I've ever had. It tasted a little sweet",
      "id": "24127336",
      "rating_color": "305D02",
      "review_time_friendly": "2 months ago",
      "rating_text": "Insane!",
      "timestamp": "1435507367",
      "likes": "0",
      "user": {
        "name": "John Doe",
        "zomato_handle": "John",
        "foodie_level": "Super Foodie",
        "foodie_level_num": "9",
        "foodie_color": "f58552",
        "profile_url": "https://www.zomato.com/john",
        "profile_deeplink": "zoma.to/u/1170245",
        "profile_image": "string"
      },
      "comments_count": "0"
    }
  ]



};
    server
	.post("/restaurantDetails/saveRestaurant")
		.send(dt)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Saved Successfully",res.text, "res.text is not matching with Saved Successfully");
          done();
        });

  });

  });
});

*/
describe("Testing update Restaurant Details", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"savan","password":"1234","name":"savan"};
    server
        .post("/user/login")
		.send(lo)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });



  it("should handle and send the success message", function(done){
	  var up={

    "id":"",
    "review":"Awesome Restaurant"

};
    server
	.put("/restaurantDetails/updateRestaurant")
		.send(up)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("succesfully updated",res.text, "res.text is not matching with succesfully update");
          done();
        });

  });

  });
});


describe("Testing delete news route", function(err){
	it("should handle and send the success message", function(done){
	  var del={"username":"savan","password":"1234","name":"savan"};
    server
        .post("/users/login")
		.send(del)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });



  it("should handle and send the success message", function(done){
	  var up={

    "author": "Chris Velazco",
    "title": "Samsung Gear S3 Frontier review: Lots of features, not enough apps",
    "description": "$350 gets you a great design and a very limited ecosystem.",
    "url": "https://www.engadget.com/2016/12/20/samsung-gear-s3-frontier-review/",
    "urlToImage": "https://s.aolcdn.com/dims5/amp:5064dcd1a093da615a253d3a3a1a0763f846eebf/t:1200,630/q:80/?url=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F59f272bccaa2401725265c7886c2a322%2F204714931%2Fgears3-frontier.jpg",
    "publishedAt": "2016-12-20T18:00:00Z","tags":"train"

};
    server
	.delete("/newsGet/deleteNews")
		.send(up)
        .expect(200)

        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Deleted Successfully",res.text, "res.text is not matching with Deleted Successfully");
          done();
        });

  });

  });
});
*/
