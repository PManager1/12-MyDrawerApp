import { Drawer } from 'expo-router/drawer';
import 'react-native-gesture-handler';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="home" options={{ title: 'Home' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' }} />
    </Drawer>
  );
}