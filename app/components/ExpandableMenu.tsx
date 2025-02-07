import { useRef, useEffect } from "react"
import { View, TouchableOpacity, Text, TouchableWithoutFeedback, Animated, Platform } from "react-native"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"
import { Image } from "react-native"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { ScrollView } from "react-native-gesture-handler"

const menuItems = [
  { icon: "search-outline", label: "Search" },
  { icon: "trophy", label: "My Leagues" },
  { icon: "star", label: "My Teams" },
  { icon: "basketball-outline", label: "NBA" },
  { icon: "football-outline", label: "NFL" },
] as const

interface ExpandableMenuProps {
  isOpen: boolean
  onToggle: () => void
}

const ExpandedHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-2 ">
      <View className="flex-grow">
        <Image
          source={{ uri: "https://pbs.twimg.com/profile_images/1776070739319214080/TBARcp9C_400x400.jpg" }}
          className="w-10 h-10 rounded-full"
        />
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
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isOpen ? 1 : 0,
      tension: 50,
      friction: 9,
      useNativeDriver: false,
    }).start()
  }, [isOpen, animatedValue]) // Added animatedValue to dependencies

  const height = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 350],
  })

  const width = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [140, 250],
  })

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  })

  return (
    <>
    {/*  bg-black/25 add this for dark, but disabling for now to match Apple Sports */}
      {isOpen && (
        <TouchableWithoutFeedback onPress={onToggle}>
          <View className="absolute -top-[1000px] -left-[1000px] -right-[1000px]
           -bottom-[1000px] z-[99]" />
        </TouchableWithoutFeedback>
      )}
      <View className="absolute top-0 right-0 z-[100]">
        <Animated.View
          className="overflow-hidden"
          style={{
            height,
            width,
          }}
        >
          <BlurView intensity={isOpen ? 90 : 20} tint="dark" className="rounded-[30px] overflow-hidden border border-white/10 h-full">
              
            <TouchableWithoutFeedback
              onPress={(e) => {
                e.stopPropagation()
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={onToggle}
                  className="flex-row items-center justify-between px-4 py-2 rounded-full"
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

                <Animated.View style={{ opacity }}>
           
                    <ScrollView
                      bounces={true}
                      alwaysBounceVertical={true}
                      showsVerticalScrollIndicator={false}
                      overScrollMode="always"
                    >
                      <View style={{ minHeight: "100%" }}>
                        <ExpandedHeader />
                        {menuItems.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            className={`flex-row items-center py-2 mb-2 px-2 mx-2 rounded-full active:bg-white/10 ${item.icon === "search-outline" ? "bg-white/10" : ""}`}
                          >
                            <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
                              <Ionicons name={item.icon} size={18} color="white" />
                            </View>
                            <Text className="text-white text-lg font-semibold ml-4">{item.label}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
            
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </BlurView>
        </Animated.View>
      </View>
    </>
  )
}

