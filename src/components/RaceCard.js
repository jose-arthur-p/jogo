import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const RaceCard = ({ race, onToggleComplete, onDelete }) => {
  return (
    <View style={[styles.card, race.completed && styles.cardCompleted]}>
      <View style={styles.info}>
        <Text style={[styles.title, race.completed && styles.textCompleted]}>
          {race.name}
        </Text>
        <Text style={styles.details}>Distância: {race.distance} km</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.button, race.completed ? styles.btnUndo : styles.btnDone]} 
          onPress={() => onToggleComplete(race.id)}
        >
          <Text style={styles.btnText}>{race.completed ? 'Refazer' : 'Concluir'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.btnDelete]} 
          onPress={() => onDelete(race.id)}
        >
          <Text style={styles.btnText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', elevation: 2 },
  cardCompleted: { backgroundColor: '#E8F5E9' },
  info: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  details: { fontSize: 14, color: '#666', marginTop: 4 },
  textCompleted: { textDecorationLine: 'line-through', color: '#888' },
  actions: { flexDirection: 'row', alignItems: 'center' },
  button: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 4, marginLeft: 8 },
  btnDone: { backgroundColor: '#4CAF50' },
  btnUndo: { backgroundColor: '#FF9800' },
  btnDelete: { backgroundColor: '#F44336' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 }
});