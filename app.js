//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "Welcome.";
const aboutContent = "As the founder, it is my mission to explore the art-tech space and draw insights that will impact both industries.";
const contactContent = "Contact me through social media.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const blog_user = process.env.BUSINESS_BLOG_MONGO_ATLAS_USER;
const blog_pass = encodeURIComponent(process.env.BUSINESS_BLOG_MONGO_ATLAS_PASS);
const blog_db = process.env.BUSINESS_BLOG_MONGO_ATLAS_DB;
mongoose.connect(`mongodb+srv://${blog_user}:${blog_pass}@cluster0.0v7ihz6.mongodb.net/${blog_db}?retryWrites=true&w=majority`, {useNewUrlParser: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
  // find all posts in the posts collection and render in the home.ejs file
  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  // TODO: ... add more security
  res.render("compose");
});

app.post("/compose", function(req, res){
  // create new post document with mongoose model
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  // save document to database
  // use a callback to only redirect to home page once save is complete without errors
  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

  const requestedPostId = req.params.postId;
  
  // find the post with a matching id in the posts collection 
  Post.findOne({_id: requestedPostId}, function(err, post){
    // once matching post found, redner its title and content in post.ejs page
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server has started successfully.");
});

