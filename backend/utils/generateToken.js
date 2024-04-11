import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {
        expiresIn: '15d'
    });
    res.cookie("jwt" , token , {
        maxAge: 15 * 24 * 60 * 60 * 1000,//maximum age that this cookie should live
        httpOnly: true, // prevent xss attacs cross-side scripting attacs
        sameSite: "strict", //used to prevent some attacs
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndCookie;
