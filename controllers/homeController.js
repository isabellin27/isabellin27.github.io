exports.respondWithAboutPage = (req, res) => {
  res.render('about', {
    title: 'Isabel Lin | Finance Professional',
    stylesheet: 'about.css',
  });
};

exports.respondWithView = (req, res, next) => {
  res.render(req.params.page, {
    title: createPageTitle(req.params.page),
    stylesheet: `${req.params.page}.css`,
  }, function (err, html) {
    if (err) {
      return next(err);
    }
    res.send(html);
  });
};

exports.receiveContactMessage = (req, res) => {
  console.log(req.body);
  res.render('confirmation', {
    title: createPageTitle('contact'),
    stylesheet: 'contact.css',
  });
};

function createPageTitle(page) {
  const titles = {
    about: 'Isabel Lin | Finance Professional',
    experience: 'Experience | Isabel Lin',
    contact: 'Contact | Isabel Lin',
  };
  return titles[page] || `${page.charAt(0).toUpperCase() + page.slice(1)} | Isabel Lin`;
}
