//Importar
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schemas');
const resolvers = require('./db/resolvers');

//Crear una variable llamada Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ()=> {
        const usuarioId = 20;
        return {
          usuarioId
        }
    }
});

//Arrancar el servidor
server.listen().then(({url})=>{
    console.log(`Servidor listo en la URL ${url}`);
});
