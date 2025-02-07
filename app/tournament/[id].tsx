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
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <LinearGradient 
        colors={[tournament.primaryColorHex, '#000000']} 
        style={{ height: 300 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView className="flex-1">
          <View className="flex-row items-center justify-between px-4 py-2">
            <TouchableOpacity 
              onPress={() => router.back()}
              className="bg-black/30 rounded-full p-2"
            >
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
            <View className="flex-1 items-center">
              <View className={`w-14 h-14 rounded-sm items-center justify-center mb-2`}>
                <Image 
                  source={{ uri: `https://img.sofascore.com/api/v1/team/${tournament.id}/image` }}
                  style={{ width: 40, height: 40 }}
                  tintColor="white"
                />
              </View>
              <Text className="text-white text-2xl font-semibold">{tournament.name}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => setIsFavorite(!isFavorite)}
              className="bg-black/30 rounded-full p-2"
            >
              <Ionicons 
                name={isFavorite ? "star" : "star-outline"} 
                size={24} 
                color="white" 
              />
            </TouchableOpacity>
          </View>

          <View className="mx-4 mt-4">
            <View className="bg-[#1C1C1E] rounded-xl p-1 flex-row">
              {tabs.map((tab) => (
                <Pressable
                  key={tab}
                  onPress={() => setSelectedTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    selectedTab === tab ? 'bg-white/10' : ''
                  }`}
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
          </View>
        </SafeAreaView>
      </LinearGradient>

      <SafeAreaView className="flex-1" >
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-xl">No Games {selectedTab}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
} 