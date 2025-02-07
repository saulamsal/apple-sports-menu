import { View, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const menuItems = [
    { icon: 'search-outline', label: 'Search' },
    { icon: 'trophy', label: 'My Leagues' },
    { icon: 'star', label: 'My Teams' },
    { icon: 'basketball-outline', label: 'NBA' },
    { icon: 'football-outline', label: 'NFL' },
] as const;

interface ExpandableMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

const ExpandedHeader = () => {
    return (
        <View className="flex-row items-center justify-between px-4 py-2 ">

            <View className="flex-grow"> 
            <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1776070739319214080/TBARcp9C_400x400.jpg' }} className="w-10 h-10 rounded-full" />

            </View>


            <View className="flex-row gap-4">    

            <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
            <FontAwesome6 name="sliders" size={16} color="#fff" />
                                    </View>


            <View className="rounded-full bg-white/10 items-center justify-center">
            <Text className="text-white text-lg font-medium mx-4 ">Edit</Text>
            </View>
            </View>
        </View>
    )
}

export default function ExpandableMenu({ isOpen, onToggle }: ExpandableMenuProps) {
    const animation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

    useEffect(() => {
        Animated.spring(animation, {
            toValue: isOpen ? 1 : 0,
            useNativeDriver: false,
            tension: 40,
            friction: 8
        }).start();
    }, [isOpen]);

    const menuHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [44, 420]
    });

    const menuWidth = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [140, 320]
    });

    const opacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1]
    });

    return (
        <Animated.View
            style={{
                height: menuHeight,
                width: menuWidth,
                overflow: 'hidden',
                zIndex: 101,
                position: 'absolute',
                right: 0,
                top: 0,
            }}
        >
            <BlurView intensity={isOpen ? 60 : 20} tint="light" className={`rounded-[30px] overflow-hidden
      border-hairline border-white/${isOpen ? '70' : '30'} ${isOpen ? 'h-auto' : 'h-full'}
      `}>
                <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                    <View className="">
                        <TouchableOpacity
                            onPress={onToggle}
                            className="flex-row items-center justify-between px-4 py-2  rounded-full "
                        >

                            {!isOpen && (
                                <View className="flex-row items-center">
                                    <Ionicons name="search-outline" size={20} color="white" />
                                    <Text className="text-white text-lg font-medium mx-2 flex-1">Search</Text>
                                    <Ionicons
                                        name={isOpen ? "close-outline" : "menu-outline"}
                                        size={20}
                                        color="white"
                                        style={{ opacity: 0.6 }}
                                    />
                                </View>
                            )}

                        </TouchableOpacity>

                        <Animated.View style={{ opacity }} className="-mt-2">
                            <ExpandedHeader />
                            {menuItems.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    className={`flex-row items-center py-2 my-2 px-2 mx-2 rounded-full active:bg-white/10 ${item.icon === 'search-outline' ? 'bg-white/10' : ''}`}
                                >
                                    <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
                                        <Ionicons name={item.icon} size={18} color="white" />
                                    </View>
                                    <Text className="text-white text-lg font-semibold ml-4">{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </BlurView>
        </Animated.View>
    );
} 