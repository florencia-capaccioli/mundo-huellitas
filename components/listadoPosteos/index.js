import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Posteo from '../posteo';
import { getPosteos } from '../../services/posteos';

const ListadoPosteos = () => {
    const [posteos, setPosteos] = useState([]);

    useEffect(() => {
        getPosteos().then(posteos => {
            setPosteos(posteos);
        });
    }, []);

    return (
        <FlatList
            data={posteos}
            renderItem={({ item }) => <Posteo posteo={item} />}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default ListadoPosteos;