import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export const RaceForm = ({ onAddRace }) => {
  const [name, setName] = useState('');
  const [distance, setDistance] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !distance.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    onAddRace(name, distance);
    setName('');
    setDistance('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome da corrida (ex: Treino 5k)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Distância (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Cadastrar Corrida</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 16, elevation: 2 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 4, padding: 10, marginBottom: 10 },
  addButton: { backgroundColor: '#2196F3', padding: 12, borderRadius: 4, alignItems: 'center' },
  addButtonText: { color: '#FFF', fontWeight: 'bold' }
});