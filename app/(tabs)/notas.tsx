import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';

const mockNotas = [
    { id: '1', disciplina: 'Matemática', nota: 8.5, cor: '#3498db' },
    { id: '2', disciplina: 'Português', nota: 9.0, cor: '#e74c3c' },
    { id: '3', disciplina: 'História', nota: 7.5, cor: '#f39c12' },
    { id: '4', disciplina: 'Geografia', nota: 8.0, cor: '#2ecc71' },
];

export default function NotasScreen({ route }) {
    const unidade = route?.params?.unidade || 'cci';
    const [periodoSelecionado, setPeriodoSelecionado] = useState(unidade.toLowerCase() === 'cci' ? '1º Trimestre' : '1º Semestre');

    const periodos = unidade.toLowerCase() === 'cci'
        ? ['1º Trimestre', '2º Trimestre', '3º Trimestre']
        : ['1º Semestre', '2º Semestre'];

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#001f3f', dark: '#001f3f' }}
            headerImage={require('@/assets/images/banner-cci.png')}
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Notas - {periodoSelecionado}</Text>

                <View style={styles.filtrosContainer}>
                    {periodos.map((periodo) => (
                        <TouchableOpacity
                            key={periodo}
                            style={[styles.filtroBotao, periodo === periodoSelecionado && styles.filtroSelecionado]}
                            onPress={() => setPeriodoSelecionado(periodo)}
                        >
                            <Text style={[styles.filtroTexto, periodo === periodoSelecionado && styles.filtroTextoSelecionado]}>
                                {periodo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <FlatList
                    data={mockNotas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardNota, { borderLeftColor: item.cor }]}>
                            <Text style={styles.disciplina}>{item.disciplina}</Text>
                            <Text style={styles.nota}>Nota: {item.nota}</Text>
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#001f3f',
    },
    filtrosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    filtroBotao: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#001f3f',
    },
    filtroSelecionado: {
        backgroundColor: '#001f3f',
    },
    filtroTexto: {
        color: '#001f3f',
        fontSize: 14,
    },
    filtroTextoSelecionado: {
        color: 'white',
    },
    cardNota: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    disciplina: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    nota: {
        fontSize: 14,
        color: '#555',
    },
});
