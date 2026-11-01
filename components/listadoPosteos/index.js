import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Posteo from '../posteo';
import { getPosteos } from '../../services/posteos';
import { getAnimales } from '../../services/animales';

const ListadoPosteos = () => {
    const [posteos, setPosteos] = useState([]);
    const [animales, setAnimales] = useState([]);

    useEffect(() => {
        getPosteos().then(posteos => {
            setPosteos(posteos);
        });

        getAnimales().then(animales => {
            setAnimales(animales);
        });
    }, []);

    return (
        <FlatList
            data={posteos}
            renderItem={({ item }) => {
                const animal = animales.find(
                    animal => animal.id === item.idAnimal
                );

                return <Posteo posteo={item} animal={animal} />;
            }}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default ListadoPosteos;