import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { tournaments } from '../data/tournaments';

export default function TournamentDetail() {
  const { id } = useLocalSearchParams();
  const tournament = tournaments.find(t => t.id === Number(id));

  if (!tournament) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-white">Tournament not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <LinearGradient 
      colors={['#8B0000', '#000000']} 
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView className="flex-1">
        <Stack.Screen 
          options={{ 
            headerShown: true,
            headerTitle: tournament.name,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#8B0000',
            },
          }} 
        />
        
        <View className="p-4">
          <Text className="text-white text-lg">Category: {tournament.category.name}</Text>
          <Text className="text-white text-lg">Sport: {tournament.category.sport.name}</Text>
          <Text className="text-white text-lg">Followers: {tournament.userCount.toLocaleString()}</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
} 