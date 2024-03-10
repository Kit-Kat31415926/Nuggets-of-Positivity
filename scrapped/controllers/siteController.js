const index = (req, res) => {
    res.render('index', { title: 'Nuggets of Positivity' });
}

const about = (req, res) => {
    res.render('about', { title: 'About Nuggets of Positivity' });
}

const create = (req, res) => {
    res.render('create', { title: 'Nuggets of Positivity' });
}

module.exports = {
    index,
    about,
    create
}
