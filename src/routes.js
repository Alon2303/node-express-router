/**
 *  routes
 */
module.exports = (app) => {
    app.use('/', require('./baseRoute/defaultRoute'));
    app.use('/api', require('./generalRoutes/general.route'));
    /* more routes... */
};
