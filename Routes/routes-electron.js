const Hosting = require("../Constants/hosting");

module.exports = (app) => {
    app.get('/static/config-tool/*', (req, res) => {
        res.redirect(`${Hosting.CONFIG_TOOL}${req.originalUrl}`)
    });

    app.get('/static/health-checker/*', (req, res) => {
        res.redirect(`${Hosting.HEALTH_CHECKER}${req.originalUrl}`)
    });
};
