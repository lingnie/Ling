const passportConfig = {
    credentials: {
        tenantName: 'lingsOrganization.onmicrosoft.com',
        clientID: 'b297e382-b013-4b6a-b71d-c5f8563090b7',
    },
    policies: {
        policyName: 'B2C_1_susi-ling',
    },
    metadata: {
        b2cDomain: 'fabrikamb2c.b2clogin.com',
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
            endpoint: 'http://localhost:5000/hello',
            delegatedPermissions: {
                read: ['https://lingsOrganization.onmicrosoft.com/tasks-api/tasks.read'],
                write: ['https://lingsOrganization.onmicrosoft.com/tasks-api/tasks.write'],
            },
        },
    },
};

module.exports = passportConfig;

