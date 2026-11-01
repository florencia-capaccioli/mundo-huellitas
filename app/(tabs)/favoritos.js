import { View, Text, StyleSheet } from 'react-native';

export default function Favoritos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis favoritos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5EEE7',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#795548',
    },
});