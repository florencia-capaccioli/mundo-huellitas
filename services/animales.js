const MAX_ANIMALES = 5;

const animalesDisponibles = [
    {
        nombre: 'Luna',
        especie: 'Perro',
        raza: 'Golden retriever',
        edad: 0,
        descripcion: 'Es muy cariñosa y juguetona. Busca una familia que le dé mucho amor.',
        sexo: 'Hembra',
        imagen: 'https://images.unsplash.com/photo-1611003229186-80e40cd54966?auto=format&fit=crop&w=800&q=80'
    },
    {
        nombre: 'Oreo',
        especie: 'Gato',
        raza: 'Mestizo',
        edad: 2,
        descripcion: 'Es tranquilo, curioso y le encanta dormir al sol.',
        sexo: 'Macho',
        imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    },
    {
        nombre: 'Canela',
        especie: 'Perro',
        raza: 'Caniche',
        edad: 3,
        descripcion: 'Es sociable y disfruta mucho de los paseos.',
        sexo: 'Hembra',
        imagen: 'https://images.unsplash.com/photo-1630250348519-173c58a3dad4?auto=format&fit=crop&w=800&q=80'
    },
    {
        nombre: 'Simba',
        especie: 'Gato',
        raza: 'Mestizo',
        edad: 2,
        descripcion: 'Es dulce y un poco tímido al principio.',
        sexo: 'Macho',
        imagen: 'https://images.unsplash.com/photo-1628793784919-9b7f599f6931?auto=format&fit=crop&w=800&q=80'
    },
    {
        nombre: 'Cookie',
        especie: 'Roedor',
        raza: 'Cobayo',
        edad: 0,
        descripcion: 'Es tranquilo y muy sociable.',
        sexo: 'Macho',
        imagen: 'https://images.unsplash.com/photo-1681141289794-ff2f3b2002c3?auto=format&fit=crop&w=800&q=80'
    },
];

const crearAnimal = (index) => {
    const animal = animalesDisponibles[index % animalesDisponibles.length];

    return {
        id: index + 1,
        ...animal,
        idUsuario: 'refugio1'
    };
};

const animales = Array.from(
    { length: MAX_ANIMALES },
    (_, index) => crearAnimal(index)
);

const getAnimales = () => {
    // TODO: Implementar la logica para obtener los animales desde una API.
    // Por ahora, devolvemos los animales hardcodeados.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(animales);
        }, 1000);
    });
};

export { getAnimales };
