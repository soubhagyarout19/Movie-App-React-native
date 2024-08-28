import { Text, TouchableOpacity, View } from "react-native";

const LoadMoreButton = ({loadMoreHandler}) => {
    return(
        <View className="bg-black h-10 w-28 justify-center items-center rounded-md">
            <TouchableOpacity onPress={()=>loadMoreHandler()}><Text className="text-white">Load more...</Text></TouchableOpacity>
        </View>
    )
}

export default LoadMoreButton;