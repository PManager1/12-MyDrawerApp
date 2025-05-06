import { Drawer } from 'expo-router/drawer';
import 'react-native-gesture-handler';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="home/index" options={{ title: 'Home' }} />
      <Drawer.Screen name="settings/index" options={{ title: 'Settings' }} />
    </Drawer>
  );
}