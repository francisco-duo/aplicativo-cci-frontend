import React, { useState } from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';

const mockAgenda = [
    {
        id: '1',
        titulo: 'Reunião de Pais',
        data: '25/04/2025',
        descricao: 'Reunião de pais e mestres na sala de eventos às 18h.',
        importante: true,
        imagem: require('@/assets/images/carteirinha.png')
    },
    {
        id: '2',
        titulo: 'Feriado - Dia do Trabalhador',
        data: '01/05/2025',
        descricao: 'Não haverá aula devido ao feriado nacional.',
        importante: false
    },
    {
        id: '3',
        titulo: 'Semana de Provas',
        data: '06/05/2025 a 10/05/2025',
        descricao: 'Aplicação das provas do 1º trimestre.',
        importante: true
    }
];

export default function AgendaScreen() {
    const [searchText, setSearchText] = useState("");

    const filteredAgenda = mockAgenda.filter((item) =>
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
                    placeholder="Pesquisar evento..."
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <FlatList
                    data={filteredAgenda}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        const CardContainer = item.imagem ? ImageBackground : View;
                        const cardProps = item.imagem ? { source: item.imagem, imageStyle: styles.cardBackground } : {};
                        return (
                            <CardContainer style={[styles.card, item.importante && styles.importantCard]} {...cardProps}>
                                <Text style={styles.title}>{item.titulo}</Text>
                                <Text style={styles.meta}>{item.data}</Text>
                                <Text style={styles.description}>{item.descricao}</Text>
                            </CardContainer>
                        );
                    }}
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
    importantCard: {

    },
    cardBackground: {
        borderRadius: 12,
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#000',
    },
    meta: {
        fontSize: 12,
        color: '#555',
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
