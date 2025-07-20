import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    try {
        // 1. Check if token exists in cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "Not authorized. Please log in." 
            });
        }

        // 2. Verify the token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        // 3. Check if token has a valid user ID
        if (!tokenDecode?.id) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid token. Please log in again." 
            });
        }

        // 4. Attach user ID to the request
        req.user = { userId: tokenDecode.id };
        next();

    } catch (error) {
        // Handle JWT errors
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid token. Please log in again." 
            });
        } else if (error.name === "TokenExpiredError") {
            return res.status(401).json({ 
                success: false, 
                message: "Token expired. Please log in again." 
            });
        } else {
            console.error("Authentication error:", error);
            return res.status(500).json({ 
                success: false, 
                message: "Internal server error during authentication." 
            });
        }
    }
};

export default userAuth