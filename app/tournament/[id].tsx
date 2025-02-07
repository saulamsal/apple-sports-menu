import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { tournaments } from '../data/tournaments';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function TournamentDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const tournament = tournaments.find(t => t.id === Number(id));
  const [selectedTab, setSelectedTab] = useState('Today');
  const [isFavorite, setIsFavorite] = useState(false);

  if (!tournament) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-white">Tournament not found</Text>
      </SafeAreaView>
    );
  }

  const tabs = ['Yesterday', 'Today', 'Upcoming'];

  return (
    <View style={{ flex: 1, backgroundColor: '#000000', position: 'relative', }}>
      <LinearGradient 
        colors={[tournament.primaryColorHex, '#000000']} 
        style={{ height: 300, position: 'absolute', top: 0, left: 0, right: 0 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <SafeAreaView className="flex-1 max-w-[767px] mx-auto w-full mt-4">
        <View className="flex-row justify-between px-4">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="bg-black/30 rounded-full w-10 h-10 justify-center items-center"
          >
            <Ionicons name="close" size={26} color="white" />
          </TouchableOpacity>

          <View className="flex-1 items-center">
            <View className="w-14 h-14 rounded-sm items-center justify-center mb-2">
              <Image 
                source={{ uri: `https://img.sofascore.com/api/v1/unique-tournament/${tournament.id}/image/dark` }}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text className="text-white text-2xl font-semibold">{tournament.name}</Text>
          </View>

          <TouchableOpacity 
            onPress={() => setIsFavorite(!isFavorite)}
            className="bg-black/30 rounded-full w-10 h-10 justify-center items-center"
          >
            <Ionicons 
              name={isFavorite ? "star" : "star-outline"} 
              size={20} 
              color="white" 
            />
          </TouchableOpacity>
        </View>

        <View className=" mx-4 mt-4 bg-white/10 rounded-3xl h-40">
          <View className="rounded-xl p-1 flex-row border-b border-white/10">
            {tabs.map((tab) => (
              <Pressable
                key={tab}
                onPress={() => setSelectedTab(tab)}
                className="flex-1 py-2 px-4 rounded-lg"
              >
                <Text 
                  className={`text-center text-base ${
                    selectedTab === tab 
                      ? 'text-white font-semibold' 
                      : 'text-white/60'
                  }`}
                >
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="items-center justify-center flex-1">
            <Text className="text-white text-xl">No Games {selectedTab}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
} 