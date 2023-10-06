import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const DisplayImagePrimeira = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../image/meninaMSG.png')}
      />
    </View>
  );
};

export default function Primeira(props) {

  props.navigation.setOptions({
    headerTitle: null,
    headerShown: false,
  });

  return (
    <View style={styles.pageContainer}>

      {DisplayImagePrimeira()}

      <View style={styles.textContainer}>
        <Text style={styles.text}>Conecte aos seus familiares e amigos, não importa onde</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={{ color: 'black', fontWeight: 'bold'}}>Termos e Privacidade</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('SegundaTela')}
        >
          <Text style={styles.buttonText}>Comece já</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    alignItems: 'center',
    marginTop: 1,
  },
  image: {
    marginBottom: 5,
    marginTop: 1,
    width: 300,
    height: 400,
    borderRadius: 100,
    overflow: 'hidden', // Faz com que a imagem seja cortada
  },
  text: {
    color: '#522CDE',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Alinha o conteúdo ao final da página
    marginBottom: 20,
    alignItems: 'center',
  },
});