import { Text, View } from "react-native";

const NoSearchResult = () => {
    return(
        <View className="mx-5 h-[500px] flex-row justify-center items-center">
            <Text className="text-black text-2xl">No search result</Text>
        </View>
    )
}

export default NoSearchResult;