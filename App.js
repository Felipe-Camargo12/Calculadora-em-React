import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('0');

  return (
    <SafeAreaView style={[estilos.conteiner, { backgroundColor: 'white' }]}>
      <TextInput
        style={[estilos.display, { backgroundColor: 'white' }]}
        value={display}
        editable={false}
      />

      <View style={estilos.botaoContainer}>
        <View style={estilos.botaoRow}>
          <TouchableOpacity style={estilos.botaoLimpar}>
            <Text style={estilos.botaoTexto}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoOperador}>
            <Text style={estilos.botaoTexto}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.botaoRow}>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoOperador}>
            <Text style={estilos.botaoTexto}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.botaoRow}>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoOperador}>
            <Text style={estilos.botaoTexto}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.botaoRow}>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoNumero}>
            <Text style={estilos.botaoTexto}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.botaoOperador, estilos.botaoResultado]}>
            <Text style={estilos.botaoTexto}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.botaoRow}>
          <TouchableOpacity style={estilos.botaoNumeroZero}>
            <Text style={estilos.botaoTexto}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoOperador}>
            <Text style={estilos.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 70,
  },
  display: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 48,
    textAlign: 'right',
    padding: 10,
    marginBottom: 10,
  },
  botaoContainer: {
    flex: 1,
  },
  botaoRow: {
    flex: 1,
    flexDirection: 'row',
  },
  botaoNumero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  botaoNumeroZero: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  botaoOperador: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  botaoLimpar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'red',
  },
  botaoResultado: {
    flex: 1,
    backgroundColor: 'green',
  },
  botaoTexto: {
    fontSize: 24,
  },
});
