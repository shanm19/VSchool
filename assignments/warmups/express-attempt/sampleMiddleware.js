function middle(req, res, next){
    console.log("I am middleware");
    req.shan = "Shan";
    next();
    return req;
};

module.exports = middle;

