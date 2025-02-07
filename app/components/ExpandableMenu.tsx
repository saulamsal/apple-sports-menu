import { View, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  { icon: 'search-outline', label: 'Search' },
  { icon: 'trophy-outline', label: 'My Leagues' },
  { icon: 'star-outline', label: 'My Teams' },
  { icon: 'basketball-outline', label: 'NBA' },
  { icon: 'football-outline', label: 'NFL' },
] as const;

export default function ExpandableMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);
    
    Animated.spring(animation, {
      toValue,
      useNativeDriver: false,
      tension: 40,
      friction: 8
    }).start();
  };

  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [44, 280]
  });

  const menuWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [140, 280]
  });

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1]
  });

  const backdropOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5]
  });

  return (
    <>
      {isOpen && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <Animated.View 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
              opacity: backdropOpacity,
              zIndex: 1
            }}
          />
        </TouchableWithoutFeedback>
      )}
      <Animated.View 
        style={{ 
          height: menuHeight,
          width: menuWidth,
          overflow: 'hidden', 
          zIndex: 2,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <BlurView intensity={20} tint="dark" className="rounded-3xl h-full overflow-hidden">
          <TouchableOpacity
            onPress={toggleMenu}
            className="flex-row items-center justify-between px-4 py-2 border rounded-3xl border-white/10"
          >
            <Ionicons name="search-outline" size={16} color="white" />
            <Text className="text-white text-base mx-2 font-bold">Search</Text>
            <Ionicons 
              name={isOpen ? "close-outline" : "menu-outline"} 
              size={14} 
              color="white" 
              className="opacity-35"
            />
          </TouchableOpacity>

          <Animated.View style={{ opacity }} className="px-2">
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-3 mx-2 my-1 rounded-xl active:bg-white/10"
              >
                <Ionicons name={item.icon} size={24} color="white" />
                <Text className="text-white text-lg ml-3">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </BlurView>
      </Animated.View>
    </>
  );
} 