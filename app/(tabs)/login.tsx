import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LoginForm from "@/components/LoginForm";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/partial-react-logo.png")} // Substitua com o caminho da sua logo
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Bem-vindo!</Text>
            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#001f3f", // azul marinho
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: 200,
        height: 100,
        marginBottom: 30,
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
