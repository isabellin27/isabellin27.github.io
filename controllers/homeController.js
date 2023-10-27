const errorController = require("./errorController");


exports.respondWithAboutPage = (req, res) => {
    res.render("about", {
        title: "About Page",
        stylesheet: "about.css",
        title: createPageTitle("about"),
        stylesheet: "about.css",
        images: images
    });
};

exports.respondWithAboutPage = (req, res) => {
    res.render("about", {
        title: "About Page",
        stylesheet: "about.css",
        title: createPageTitle("about"),
    });
};

function createPageTitle(title) {
    title = title.substring(0, 1).toUpperCase() + title.substring(1);
    return title + " | Isabel's Personal Website";
}

exports.respondWithView = (req, res) => {
    res.render(req.params.page, {
        title: createPageTitle(req.params.page),
        stylesheet: `${req.params.page}.css`,
    }, function(err, html) {
        if (err) {
            if (err.message.includes('Failed to lookup view')) {
                return next(err);
            }
            throw err;
        }
        res.send(html);
    });
};


exports.receiveContactMessage = (req, res) => {
    console.log(req.body);
    res.render("confirmation", {
        title: createPageTitle("contact"),
        stylesheet: `contact.css`
    });
};