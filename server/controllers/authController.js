import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModels.js';
import transporter from '../config/nodemailer.js';

export const register = async(req,res)=>{
    const { name,email,password}= req.body;

    if(!name || !email || !password){
        return res.json({success:false,message:'Missing Details'})
    }
    try{
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({success:false,message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new userModel({name,email,password:hashedPassword});
        await user.save();
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production'?
            'non' :'strict',
            maxAge: 7*24*60*60*1000
        });
        //welcome email!
        const mailOption={
            from:process.env.SENDER_EMAIL,
            to: email,
            subject:'Wellcome to Opponix',
            text:`Welcome to Opponix website.your account has been successfully created`
        }
        await transporter.sendMail(mailOption);

        return res.json({success:true});


        
    } catch(error){
            res.json({success: false,message: error.message})
         }
 }
 export const login = async(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return res.json({success:false,message:'Email and password are required'})
    }
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'Invalid email'})
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:'Invalid password'})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production'?
            'non' :'strict',
            maxAge: 7*24*60*60*1000
        });

        return res.json({success:true});




    } catch(error){
           res.json({success: false,message: error.message})
 }
}

export const logout = async(req,res)=>{
    try{
        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production'?
            'non' :'strict',
        })
        return res.json({success: true,message:"Logged Out"})
        }catch(error){
           return res.json({success: false,message: error.message})
    }
}
//verification opt to user
export const sendVerifyOtp = async(req,res )=>{
    try{ 
          const { userId }= req.body;
           const user = await userModel.findById(userId);
 
        if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
         }

        if(user.isAccountVerified){
            return res.json({success:false,message:"Account ALready verified"})
        }
        const otp = String(Math.floor(10000+ Math.random()*90000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now()+24*60*60*1000
        await user.save();
        const mailOption={
            from: process.env.SENDER_EMAIL, 
            to:user.email,
            subject:'Account Verification OTP',
            text:`Your OPT is ${otp}.Verify your account using this Otp`
        }
        await transporter.sendMail(mailOption);

        res.json({success:true,message:'Verification Otp sent on Email'});

    }catch(error){
            res.json({success: false,message: error.message})
    }
}
 export const verifyEmail = async(req,res)=>{
    const {userId,otp}=req.body;
    if(!userId || !otp){
        return res.json({success:false,message : 'Missing details'});
    }
    try{
        const user = await userModel.findById(userId);
        if(!user){
            return res.json({success:false,message:'user not found'});
        }
        if(user.verifyOtp ===''|| user.verifyOtp !==otp){
            return res.json({success:false,message:'Invalid Otp'});
        }
        if(user.verifyOtpExireAt < Date.now()){
            return res.json({success:false,message:'OTP exired'});

        }
        user.isAccountVerified = true;
        user.verifyOtp='';
        user.verifyOtpExireAt=0;

        await user.save();
        return res.json({success:true,message:'Email verified Successfully'});


    }catch(error){
            res.json({success: false,message: error.message})
 }
}
// to check if user is authenticated to our web guys
 export const isAuthenticated = async (req,res)=>{
    try{
        return res.json({success:true});
    }catch(error){
            res.json({success: false,message: error.message})
 }

 }
 // password reset otp
 export const sendResetOtp= async (req,res)=>{
    const {email}=req.body;

    if(!email){
        return res.json({success:false,message:'Email is required'})
    }
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'User not found'});
        } 
        const otp = String(Math.floor(10000+ Math.random()*90000));
        
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now()+ 15*60*1000
        
        await user.save();

        const mailOption={
            from: process.env.SENDER_EMAIL, 
            to:user.email,
            subject:'Password Reset OTP',
            text:`Your OPT for resetting your password ${otp}.Use this OTP to proceed with resetting your password.`
        }
        await transporter.sendMail(mailOption);

        return res.json({success:true , message:'Otp sent to your email'});
    }catch(error){
           return res.json({success: false,message: error.message})
 }
 }
 //reset password 
 export const resetPassword = async(req,res)=>{
    const {email,otp,newPassword}= req.body;
    
    if(!email||!otp||!newPassword){
        return res.json({success:false,message:'Email,OTP,and new password are required'});
    }
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message :'User not found'});
        }
        if(user.resetOtp === ""||user.resetOtp !==otp){
            return res.json({success :false,message:'Invalid OTP'});
        }
        if(user.resetOtpExpireAt <Date.now()){
            return res.json({success:false, message:'OTP Expired'});
        }
        const hashedPassword = await bcrypt.hash(newPassword,10);
        user.password = hashedPassword;
        user.resetOtp='';
        user.resetOtpExpiredAt=0;

        await user.save();
        return res.json({success:true,message:'Password has been reset successfully'});


    }catch(error){
            res.json({success: false,message: error.message})
 }

 }