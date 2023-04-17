//we have to import user model

const User = require('../models/user')

module.exports.profile = function(req,res){
   if(req.cookies.user_id){
    User.findById(req.cookies.user_id,function(){
        if(User){
            res.render('user_profile', {
                title: "User Profile",
                user: User
            })
        }
        return res.redirect('/users/sign-in',{
            title: "codeial sign-in"
            
     })
        console.log('hello from sign up')
    });

   }else{
    return res.redirect('/users/sign-up');
   }


}

module.exports.signUp = function(req, res){
    return res.render("users_sign_up",{
        title: "Codeial | Sign Up"
    })
}

module.exports.signIn = function(req, res){
    return res.render("users_sign_in" ,{
        title: "Codeial | Sign In"
    })
}


// module.exports.create = (req, res){
    // if(req.body.password != req.body.confirm_password){
        // return res.redirect('back');
    // }
// 
    // User.
// });


//const var = () => {} this is how arrow functions are made
module.exports.create = (req, res) =>{
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in sign-up');return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating the user while signing up')}
                req.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('./profile');
        }
    })
}

module.exports.createSession = (req,res)=>{
    //todo later
}

