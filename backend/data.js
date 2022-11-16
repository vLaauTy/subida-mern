import bcrypt from 'bcryptjs'


const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234'),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: "1",
            name: "Nurofen",
            precio: 600,
            slug: 'nurofen',
            category: "dolor de cabeza",
            image: "https://phx-nurofen-es-prod.s3.eu-central-1.amazonaws.com/media/tmkpyred/rb_nurofen_carton_400mg_rbl2008042_top_v1.jpg",
            description: "es un medicamento cuyo principio activo es el ibuprofeno, por eso actúa efectivamente aliviando el dolor leve a moderado",
            stock: 10,
            receta: false,
            day: true
        },
        {
            // _id: "2",
            name: "Mesalazina",
            precio: 600,
            slug: 'mesalazina',
            category: "dolor de panza",
            image: "https://www.casasco.com.ar/wp-content/uploads/2015/09/Pack_web-35_condu500-1.jpg",
            description: "La mesalamina se usa para tratar la colitis ulcerosa (una afección que provoca hinchazón y llagas en el revestimiento del colon [intestino grueso] y el recto) y también para mantener la mejora de los síntomas de la colitis ulcerosa",
            stock: 15,
            receta: true,
            day: false,
        },
    ],
};

export default data;