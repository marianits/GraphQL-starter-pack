
//Base de Datos de preba
const cursos = [
    {
        titulo:'Curso de Javascript',
        tecnologia:'Javascript'
    },
    {
        titulo:'Curso de React',
        tecnologia:'React'
    },
    {
        titulo:'Curso de Node.sj',
        tecnologia:'Node.js'
    },
    {
        titulo:'Curso de React Avanzado',
        tecnologia:'React'
    }
];

const resolvers = {
    Query: {
        obtenerCursos: () => cursos,
        obtenerTitulo: (_,{input},ctx) => {
            console.log(ctx);
            const resultados = cursos.filter(curso => curso.tecnologia === input.tecnologia);
            return resultados;
        }

    }
}

module.exports = resolvers;