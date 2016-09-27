function myMiddle(req, res, next){
    console.log("Mic Drop");
    next();
}

module.exports = myMiddle;