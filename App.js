import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>👨‍⚕️ VetPro AI</Text>
    <Text style={styles.subtitle}>Seu assistente veterinário inteligente</Text>
    <Button title="Entrar" onPress={() => navigation.navigate('Login')} />
    <Button title="Criar Conta" onPress={() => navigation.navigate('Cadastro')} />
  </View>
);

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Entrar</Text>
    <TextInput placeholder="E-mail" style={styles.input} />
    <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
    <Button title="Entrar" onPress={() => alert('Login simulado')} />
    <Button title="Voltar" onPress={() => navigation.goBack()} />
  </View>
);

const CadastroScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Criar Conta</Text>
    <TextInput placeholder="Nome" style={styles.input} />
    <TextInput placeholder="CRMV ou Documento" style={styles.input} />
    <TextInput placeholder="E-mail" style={styles.input} />
    <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
    <Button title="Cadastrar" onPress={() => alert('Cadastro simulado')} />
    <Button title="Voltar" onPress={() => navigation.goBack()} />
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen name="BoasVindas" component={WelcomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6
  }
});