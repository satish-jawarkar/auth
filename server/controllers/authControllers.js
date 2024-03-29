const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
const createError = require('../utils/appErrors');

//register
exports.signup = async (req, res, next) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(user){
            return next(new createError('User already exists!', 400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        //assign json web token
        const token = jwt.sign({_id: newUser._id}, 'secretkey123',{
            expiresIn: '90d',
        });

        res.status(201).json({
            status: 'success',
            message: "Registerd Sucessfully!",
            token,
            user:{
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
        });
    } catch (error){
        next(error);
    }
};

//loggin in
exports.login = async (req, res, next) => {
    // res.send('Logged In Sucessfully!')
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return next(new createError('User is not found!',404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return next(new createError('Invalid email or password', 401));
        }

        const token = jwt.sign({ _id: user._id }, 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in!',
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        })
    } catch(error){
        next(error);
    }
};