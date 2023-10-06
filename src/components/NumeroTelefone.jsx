import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  NumeroTelefoneProvider,
  useNumeroTelefoneContext,
} from './NumeroTelefoneContext';
import Primeira from './Primeira';

const DisplayImageConfirmed = () => {
  return (
    <View style={styles.containerImage}>
      <Image
        style={styles.image}
        source={require('../image/Confirmed.png')}
      />
    </View>
  );
};

export default function NumeroTelefone(props) {

  props.navigation.setOptions({
    headerTitle: null,
    headerShown: false,
  });

  const { numeroTelefone, setNumeroTelefone, isValid, setIsValid, formatPhoneNumber } = useNumeroTelefoneContext();
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Remova todos os espaços, hífens e pontos antes de validar
    const cleanedNumeroTelefone = numeroTelefone.replace(/\s|-|\.|\(|\)/g, '');

    // Atualize o estado com o número de telefone limpo
    setNumeroTelefone(cleanedNumeroTelefone);

    // Expressão regular para validar números de telefone brasileiros em vários formatos
    const regex = /^\d{11}$/; // /^inicio string, \d numeros 0 a 9, {11} contém 11 dígitos, $ final da string

    if (regex.test(cleanedNumeroTelefone)) {
      setIsValid(true);
      const formattedNumeroTelefone = formatPhoneNumber(cleanedNumeroTelefone);
      navigation.navigate('Principal', { numeroTelefone: formattedNumeroTelefone });
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.pageContainer}>

      {DisplayImageConfirmed()}

      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18}}>Insira o número de telefone</Text>

      <TextInput
        style={[styles.input, !isValid && styles.invalidInput]}
        keyboardType="numeric"
        placeholder="XX XXXXX-XXXX"
        value={numeroTelefone}
        onChangeText={(text) => setNumeroTelefone(text)}
      />

      {!isValid && <Text style={styles.errorText}>Número de telefone inválido.</Text>}

      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}
      >
     <Text style={styles.buttonText}>Validar</Text>
      </TouchableOpacity>

<View style={styles.buttonContainer}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('TelaInicial')}
      >
     <Text style={styles.buttonText}>Voltar a página inicial</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
  },
  containerImage: {
    alignItems: 'center',
    marginTop: 1,
    justifyContent: 'flex-start',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#522CDE',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 10,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#522CDE',
    borderRadius: 20, // Define o raio das bordas para deixar arredondada
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold', // Estilo do texto do botão (negrito)
    textAlign: 'center', // Alinhamento do texto
  },
  image: {
    marginBottom: 5,
    marginTop: 1,
    width: 300,
    height: 300,
    borderRadius: 100,
    overflow: 'hidden', // Faz com que a imagem seja cortada
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
});
