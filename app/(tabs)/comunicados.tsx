import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';

const mockComunicados = [
    {
        id: '1',
        titulo: 'Cirex 004/2025-Informes Gerais',
        data: '14/02/2025',
        descricao: 'CCI Informa: Senhores Pais e Responsáveis, Compartilhamos a Cirex 004/2025...',
        imagem: require('@/assets/images/banner-cci.png')
    },
    {
        id: '2',
        titulo: 'Cirex 003/2025-Comunicação Escola&Família',
        data: '06/02/2025',
        descricao: 'Senhores Pais e Responsáveis, Compartilhamos a Cirex003/2025...',
        imagem: require('@/assets/images/banner-cci.png')
    },
    {
        id: '3',
        titulo: 'Cirex 002/2025-Informações Gerais',
        data: '06/02/2025',
        descricao: 'Senhores Pais e Responsáveis, Agradecemos pela parceria ao longo de 2024...',
        imagem: require('@/assets/images/banner-cci.png')
    }
];

export default function ComunicadosScreen() {
    const [searchText, setSearchText] = useState("");

    const filteredComunicados = mockComunicados.filter((item) =>
        item.titulo.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#001f3f', dark: '#001f3f' }}
            headerImage={
                <Image
                    source={require('@/assets/images/banner-cci.png')}
                    style={styles.unitHeaderImage}
                    resizeMode="cover"
                />
            }
        >
            <View style={styles.container}>
                <TextInput
                    placeholder="Pesquisar por título..."
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <FlatList
                    data={filteredComunicados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.meta}>Por: Coordenação — {item.data}</Text>
                            <Image source={item.imagem} style={styles.cardImage} resizeMode="cover" />
                            <Text style={styles.description}>{item.descricao}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    meta: {
        fontSize: 12,
        color: '#555',
        marginBottom: 8,
    },
    cardImage: {
        width: '100%',
        height: 45,
        borderRadius: 8,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    unitHeaderImage: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});
