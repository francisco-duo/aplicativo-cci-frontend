// app/carteirinha.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const mockUser = {
    nome: 'Francisco José de Oliveira Duó',
    matricula: '33291',
    funcao: 'Não Informada',
    instituicao: 'CCI',
    validade: '31/03/2026',
    foto: require('@/assets/images/react-logo.png'),
    logo: require('@/assets/images/react-logo.png'),
    fundo: require('@/assets/images/carteirinha.png'),
};

export default function CarteirinhaScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={mockUser.fundo} style={styles.fundo} resizeMode="cover" />
                <View style={styles.conteudo}>
                    <Image source={mockUser.foto} style={styles.foto} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Nome:</Text>
                        <Text style={styles.valor}>{mockUser.nome}</Text>

                        <Text style={styles.label}>Matrícula:</Text>
                        <Text style={styles.valor}>{mockUser.matricula}</Text>

                        <Text style={styles.label}>Instituição:</Text>
                        <Text style={styles.valor}>{mockUser.instituicao}</Text>

                        <Text style={styles.label}>Função:</Text>
                        <Text style={styles.valor}>{mockUser.funcao}</Text>
                    </View>
                    <Image source={mockUser.logo} style={styles.logo} />
                    <View style={styles.validade}>
                        <Text style={styles.validadeTexto}>Válida até {mockUser.validade}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        aspectRatio: 1.6,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
        position: 'relative',
    },
    fundo: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    conteudo: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        height: '100%',
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ddd',
    },
    info: {
        flex: 1,
        paddingHorizontal: 12,
    },
    label: {
        fontSize: 12,
        color: '#555',
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    logo: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 40,
        height: 40,
    },
    validade: {
        position: 'absolute',
        right: -30,
        top: '30%',
        backgroundColor: '#001f3f',
        transform: [{ rotate: '90deg' }],
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    validadeTexto: {
        color: '#fff',
        fontSize: 12,
    },
});
