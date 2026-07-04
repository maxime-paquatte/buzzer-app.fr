module.exports = {
    dbUri: process.env.DB_URI,
    port: process.env.PORT || 3000,
    clientUrl: process.env.CLIENT_URL,
    adminPassword: process.env.ADMIN_PASSWORD,
    defaultHomeView: process.env.DEFAULT_HOME_VIEW || 'home',
};
