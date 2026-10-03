const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Petición recibida en ${request.url}`);

        return {
            jsonBody: {
                text: "Hola desde la API en Azure Functions",
                fecha: new Date().toISOString()
            }
        };
    }
});