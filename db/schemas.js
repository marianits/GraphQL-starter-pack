const {gql} = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql `
    type Curso {
        titulo: String
        tecnologia: String
    }
    type Titulo {
        titulo: String
    }
    type Tecnologia {
        tecnologia: String
    }
    input TituloInput {
        tecnologia: String
    }
    type Query {
        obtenerCursos: [Curso]
        #El signo (!) hace que sea obligatorio pedir el parámetro 
        obtenerTitulo(input: TituloInput!): [Titulo]
    }
`;

module.exports = typeDefs;