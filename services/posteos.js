const MAX_POSTEOS = 5;

const publicaciones = [
    {
        titulo: 'Luna busca una familia',
        texto: 'Esta hermosa perrita está buscando un hogar donde pueda recibir mucho amor.',
        imagen: 'https://images.unsplash.com/photo-1611003229186-80e40cd54966?auto=format&fit=crop&w=800&q=80',
        fecha: '25/10/2026'
    },
    {
        titulo: 'Conocé a Oreo',
        texto: 'Este gatito es muy cariñoso y está esperando encontrar a su nueva familia.',
        imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        fecha: '27/10/2026'
    },
    {
        titulo: 'Canela busca un hogar',
        texto: 'Canela es una perrita muy sociable. Le encanta jugar y salir a pasear.',
        imagen: 'https://images.unsplash.com/photo-1630250348519-173c58a3dad4?auto=format&fit=crop&w=800&q=80',
        fecha: '29/10/2026'
    },
    {
        titulo: 'Simba está en adopción',
        texto: 'Este gatito es dulce y tranquilo. Busca una familia que lo cuide.',
        imagen: 'https://images.unsplash.com/photo-1628793784919-9b7f599f6931?auto=format&fit=crop&w=800&q=80',
        fecha: '30/10/2026'
    },
    {
        titulo: 'Cookie busca familia',
        texto: 'Este pequeño cobayo es muy tranquilo y está listo para encontrar un hogar.',
        imagen: 'https://images.unsplash.com/photo-1681141289794-ff2f3b2002c3?auto=format&fit=crop&w=800&q=80',
        fecha: '1/11/2026'
    }
];

const crearPosteo = (index) => {
    const publicacion = publicaciones[index % publicaciones.length];

    return {
        id: index + 1,
        idAnimal: index + 1,
        idUsuario: 'refugio1',
        ...publicacion
    };
};

const posteos = Array.from(
    { length: MAX_POSTEOS },
    (_, index) => crearPosteo(index)
);

const getPosteos = () => {
    // TODO: Implementar la logica para obtener los posteos desde una API.
    // Por ahora, devolvemos los posteos hardcodeados.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posteos);
        }, 1000);
    });
};

export { getPosteos };
