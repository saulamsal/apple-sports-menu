import { Stack } from 'expo-router';
import { TouchableOpacity, Text, View, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { tournaments } from './data/tournaments';
import { StatusBar } from 'expo-status-bar';
import ExpandableMenu from './components/ExpandableMenu';

export default function Home() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#015A00', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: screenHeight * 0.3, // Make gradient area slightly larger for smoother transition
        }}
      />
      
      <SafeAreaView className="flex-1">
        <Stack.Screen 
          options={{ 
            headerShown: false,
          }} 
        />
        
        <View className="px-4 pt-2">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-4 ">
            <View className="flex-row items-center">
              <AntDesign name="apple1" size={40} color="white" />
              <Text className="text-white text-3xl font-semibold ml-2">Sports</Text>
            </View>

            <View style={{ width: 140, height: 44 }}>
              <ExpandableMenu />
            </View>
            
            
          </View>

          {/* Search Bar */}
      
            <View className="mb-4">
              <BlurView intensity={20} tint="dark" className="overflow-hidden rounded-xl">
                <View className="flex-row items-center p-3">
                  <Ionicons name="search" size={20} color="white" className="mr-2" />
                  <TextInput 
                    placeholder="Leagues and Teams"
                    placeholderTextColor="#A0A0A0"
                    className="flex-1 text-white text-lg"
                  />
                  <Ionicons name="mic" size={20} color="white" />
                </View>
              </BlurView>
            </View>
     

          {/* Browse Sports */}
          <Text className="text-white text-2xl font-semibold mb-4">Browse Sports</Text>
          
          <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
            <View className="flex-row flex-wrap justify-between">
              {tournaments.map((tournament) => (
                <TouchableOpacity 
                  key={tournament.id}
                  className="w-[31%] mb-6 items-center"
                  onPress={() => router.push(`/tournament/${tournament.id}` as any)}
                >
                  <View className="w-20 h-20 bg-black/30 rounded-full items-center justify-center mb-2">
                    <Image 
                      source={{ uri: `https://img.sofascore.com/api/v1/team/${tournament.id}/image` }}
                      className="w-12 h-12"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-white text-center text-sm">{tournament.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
