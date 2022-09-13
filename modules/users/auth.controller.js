const User = require ("./user.model");

exports.register = async (req, res) => {
   const {email, password} = req.body;

   // checking if email exists
   const emailExists = await User.findOne({email});
   if (emailExists){
    return res.status(400).json({error: "Email already in used."});
   }

  const user = await User.create({...req.body});

  res.status(200).json({user});

};

