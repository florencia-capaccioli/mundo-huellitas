import { useState, useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const colors = {
    card: '#FFFCF8',
    primary: '#795548',
    secondary: '#8A776B',
    background: '#F4E9DF',
    accent: '#C98276',
    white: '#FFFFFF',
};

const Animal = ({ animal }) => {
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        console.log('Animal renderizado', animal.id);

        return () => {
            console.log('Animal desmontado', animal.id);
        };
    }, []);

    return (
        <View style={styles.card}>
            <View style={styles.hero}>
                <Image
                    source={{ uri: animal.imagen }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <Pressable
                    style={styles.fav}
                    onPress={() => setFavorito(!favorito)}
                >
                    <MaterialIcons
                        name={favorito ? 'favorite' : 'favorite-border'}
                        size={24}
                        color={colors.accent}
                    />
                </Pressable>
            </View>

            <View style={styles.content}>
                <Text style={styles.nombre}>
                    {animal.nombre}
                </Text>

                <View style={styles.details}>
                    <Text style={styles.tag}>
                        {animal.especie}
                    </Text>

                    <Text style={styles.tag}>
                        {animal.raza}
                    </Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoText}>
                        Edad: {animal.edad} {animal.edad === 1 ? 'año' : 'años'}
                    </Text>

                    <Text style={styles.infoText}>
                        Sexo: {animal.sexo}
                    </Text>
                </View>

                <Text style={styles.descriptionTitle}>
                    Sobre mí
                </Text>

                <Text style={styles.description}>
                    {animal.descripcion}
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
    hero: {
        height: 190,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    fav: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: 16,
    },
    nombre: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },
    details: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,
    },
    tag: {
        backgroundColor: colors.background,
        color: colors.primary,
        padding: 7,
        borderRadius: 12,
        fontSize: 12,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    infoText: {
        fontSize: 14,
        color: colors.secondary,
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: colors.secondary,
        lineHeight: 20,
    },
});

export default Animal;
