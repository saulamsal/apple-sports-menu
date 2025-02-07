import { Stack } from 'expo-router';
import { TouchableOpacity, Text, View, TextInput, Image, ScrollView, Dimensions, TouchableWithoutFeedback, Animated, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef } from 'react';
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000000'  , position: 'relative', overflow: Platform.OS === "web" ? 'scroll' : undefined   }}>
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
      
   

      <SafeAreaView className={`flex-1 max-w-[767px] mx-auto w-full`}>
        <Stack.Screen 
          options={{ 
            headerShown: false,
          }} 
        />
        
        <View className="px-4 pt-2 relative">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-4 relative" style={{ zIndex: 10 }}>
            <View className="flex-row items-center">
              <AntDesign name="apple1" size={30} color="white" />
              <Text className="text-white text-4xl  pt-2 relative">Sports</Text>
            </View>

            <ExpandableMenu isOpen={showMenu} onToggle={toggleMenu} />
          </View>

          {/* Search Bar */}
      
    
            <View className="mb-4">
            <BlurView intensity={20} tint="light" className="overflow-hidden rounded-xl">
              <View className="flex-row items-center px-2 ">
                <Ionicons name="search" size={20} color="white" className="mr-2" />
                <TextInput 
                  placeholder="Leagues and Teams"
                  placeholderTextColor="#A0A0A0"
                  className="flex-1 text-white text-lg active:outline-none outline-none py-2.5"
                />
                <Ionicons name="mic" size={20} color="white" />
              </View>
            </BlurView>
          </View>
        

          
          <ScrollView showsVerticalScrollIndicator={false} className={`space-y-4 ${showMenu ? '-z-10' : ''}`}>

                      {/* Browse Sports */}
          <Text className="text-white text-2xl font-semibold mb-4">Browse Sports</Text>


            <View className="flex-row flex-wrap justify-between">
              {tournaments.map((tournament) => (
                <TouchableOpacity 
                  key={tournament.id}
                  className="w-[31%] mb-6 items-center"
                  onPress={() => router.push(`/tournament/${tournament.id}` as any)}
                >
             
                  <View className="w-20 h-20  rounded-full items-center justify-center mb-2 bg-white/10">
                    <Image 
                      source={{ uri: `https://img.sofascore.com/api/v1/unique-tournament/${tournament.id}/image/dark` }}
                      className="w-12 h-12"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-gray-400 text-center font-semibold text-sm">{tournament.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
