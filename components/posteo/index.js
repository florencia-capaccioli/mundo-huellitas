import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const colors = {
    card: '#FFFCF8',
    primary: '#795548',
    secondary: '#8A776B',
    background: '#F4E9DF',
};

const Posteo = ({ posteo, animal }) => {

    useEffect(() => {
        console.log('Posteo renderizado', posteo.titulo);

        return () => {
            console.log('Posteo desmontado', posteo.titulo);
        };
    }, []);

    return (
        <View style={styles.card}>
            {posteo.imagen ? (
                <Image
                    source={{ uri: posteo.imagen }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : null}

            <View style={styles.content}>
                <Text style={styles.titulo}>
                    {posteo.titulo}
                </Text>

                {animal && (
                    <View style={styles.animalInfo}>
                        <Text style={styles.animalName}>
                            {animal.nombre}
                        </Text>

                        <Text style={styles.animalType}>
                            {animal.especie}
                        </Text>
                    </View>
                )}

                <Text style={styles.texto}>
                    {posteo.texto}
                </Text>

                <Text style={styles.fecha}>
                    {posteo.fecha}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 16,
        overflow: 'hidden',
        margin: 12,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 190,
    },
    content: {
        padding: 16,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },
    animalInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    animalName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
    },
    animalType: {
        backgroundColor: colors.background,
        color: colors.secondary,
        padding: 6,
        borderRadius: 10,
        fontSize: 12,
    },
    texto: {
        fontSize: 14,
        color: colors.secondary,
        lineHeight: 21,
    },
    fecha: {
        fontSize: 12,
        color: colors.secondary,
        marginTop: 14,
    },
});

export default Posteo;
