import '../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
          name="tournament/[id]" 
          options={{ 
            headerShown: false,
            presentation: 'containedModal',
            animation: 'slide_from_bottom',
            
          }} 
        />
        </Stack> 
    </GestureHandlerRootView>
  );
}
