import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Aqui vai a lógica de autenticação
        console.log("Usuário:", username);
        console.log("Senha:", password);
    };

    const handleForgotPassword = () => {
        // Aqui você pode navegar pra uma tela de recuperação ou abrir um alerta
        alert("Redirecionar para recuperação de senha");
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgot}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <Button title="Entrar" onPress={handleLogin} color="#0074D9" />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: "100%",
    },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    forgot: {
        color: "#ccc",
        marginBottom: 20,
        textAlign: "right",
        textDecorationLine: "underline",
    },
});
