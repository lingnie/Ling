const passportConfig = {
    credentials: {
        tenantName: 'lingsOrganization.onmicrosoft.com',
        clientID: 'b297e382-b013-4b6a-b71d-c5f8563090b7',
    },
    policies: {
        policyName: 'B2C_1_susi-ling',
    },
    metadata: {
        b2cDomain: 'lingsOrganization.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['tasks.read','tasks.write'],
                write: ['tasks.write'],
            },
        },
    },
};

module.exports = passportConfig;

