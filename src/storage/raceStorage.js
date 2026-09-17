import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@races_data';

export const getRaces = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao buscar corridas:', e);
    return [];
  }
};

export const saveRaces = async (races) => {
  try {
    const jsonValue = JSON.stringify(races);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar corridas:', e);
  }
};