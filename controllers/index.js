
const router = require('express').Router();
const homeRoutes = require('./homepageRoute.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;