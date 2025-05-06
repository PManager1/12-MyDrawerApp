

import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingLeft: 20 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Home Screen</Text>
    </View>
  );
}