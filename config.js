const config = {
    dbUrl: process.env.DB_URL || 'mongodb://localhost/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
};

module.exports = config;