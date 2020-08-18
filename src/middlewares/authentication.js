
// example middleware
const authMiddleware = async (req, res, next) => {
        try {
            // here we will have an async call to a service that prepares a request object
            // and sends is to a .db file to authenticate the user
            const userDetails = {firstName: "Alon", lastName: "Ofir" };
            if (userDetails) {
                req.user = userDetails;
                next();
            }else{
                res.status(401).json({message: 'middleware error - user not exists'}).send();
            }
        } catch (error) {
            res.setHeader('Location', req.headers.referer || '/');
            res.status(500).json({message: "Server error: ", error});
        }
};

module.exports = authMiddleware;
