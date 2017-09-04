const express = require("express");
const router = express.Router();
const models= require("../models/index");
const passport = require("passport");
const bcrypt = require('bcryptjs');


//////////////////////////////////////////

router.get("/login", function (req,res) {
  res.render("login");
});

router.post("/login", passport.authenticate('local', {

    successRedirect:'/home_page',
    failureRedirect: '/login',
    failureFlash: true
}));





/////////////////////////////////////////////Sign up functionality

router.get("/sign_up", function (req,res) {
  res.render("sign_up");
});

router.post("/sign_up", function(req,res){
  models.User.create({
    displayname = req.body.displayname,
    username = req.body.username,
    password = req.body.password

  }).then(function(data){
    console.log(data);
    res.redirect("/login");
  })
  .catch(function(err){
    console.log(err);
    res.redirect("/sign_up");
  })
});
////////////////////////////////////////////











////////////////////////////////////////////////
router.post("/create", function (req,res){
    models.user.create({                                          //////creating and saving all in one place
      dispalyname: req.body.dispalyname,
      username: req.body.username,
      password: req.body.password
  })
        .then(function(data) {
          console.log(data);
          res.redirect("/");
        });
      });

////////////////////////////////////////////////////This is the edit functionality:
router.post("/edit/:id", function (req,res) {
  models.user.update({
    dispalyname: req.body.dispalyname,
    username: req.body.username,
    password: req.body.password
  }, {
    where: {
    id: req.params.id
    }
}).then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
  });

});
//////////////////////////////////////////////////////////////// DELETE A USER
router.post("/destroy/:id", function (req,res) {
  models.user.destroy({                     ////important method it will find or create, and will save also;
    where: {
      id: req.params.id
    }
  })

  .then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
  });

});
/////////////////////////////////////////////////////////// DELETE A LIKE
router.post("/destroy/:id", function (req,res) {
  models.likes.destroy({                     ////important method it will find or create, and will save also;
    where: {
      id: req.params.id
    }
  })

  .then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
  });

});
///////////////////////////////////////////////////////////////// DELETE A MESSAGE
router.post("/destroy/:id", function (req,res) {
  models.messages.destroy({                     ////important method it will find or create, and will save also;
    where: {
      id: req.params.id
    }
  })

  .then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
  });

});
//////////////////////////////////////////////////////////////////////////














module.exports = router;
