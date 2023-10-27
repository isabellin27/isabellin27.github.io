const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render("404", {
        title: "404 | Page Not Found",
    });
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR Occurred ${error.stack}`);
    res.status(errorCode);
    res.render("500", {
        title: "500 | Internal Server Error",
    });
};

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};
