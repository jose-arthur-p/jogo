import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { RaceForm } from '../components/RaceForm';
import { RaceCard } from '../components/RaceCard';
import { getRaces, saveRaces } from '../storage/raceStorage';

export const HomeScreen = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getRaces();
    setRaces(data);
  };

  const handleAddRace = async (name, distance) => {
    const newRace = {
      id: Date.now().toString(),
      name,
      distance,
      completed: false
    };
    const updatedRaces = [...races, newRace];
    setRaces(updatedRaces);
    await saveRaces(updatedRaces);
  };

  const handleToggleComplete = async (id) => {
    const updatedRaces = races.map(race => 
      race.id === id ? { ...race, completed: !race.completed } : race
    );
    setRaces(updatedRaces);
    await saveRaces(updatedRaces);
  };

  const handleDelete = async (id) => {
    const updatedRaces = races.filter(race => race.id !== id);
    setRaces(updatedRaces);
    await saveRaces(updatedRaces);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Gestão de Corridas</Text>
      <RaceForm onAddRace={handleAddRace} />
      <FlatList
        data={races}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RaceCard
            race={item}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma corrida cadastrada.</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 16, color: '#333', textAlign: 'center' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 24 }
});