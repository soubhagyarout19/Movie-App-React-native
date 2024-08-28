import { View } from "react-native";

const Shimmer = () => {
    return(
        <View className="h-[240px] w-44 bg-gray-500 rounded-md">
            <View className="h-3 bg-gray-600 mt-[175px] mx-2 rounded-md"></View>
            <View className="h-3 bg-gray-600 mt-[10px] mx-2 w-20 rounded-md"></View>
            <View className="h-3 bg-gray-600 mt-[10px] mx-2 w-10 rounded-md"></View>
        </View>
    )
}

export default Shimmer;