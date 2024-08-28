import { Image, Text, View } from "react-native"
import { IMAGE_URL } from "../Constants";

const MovieCard = ({data}) => {
    return(
        <View>
            <Image className="rounded-tl-md rounded-tr-md w-[100%] text-black" height={220} source={{ uri: IMAGE_URL + data.poster_path }} alt="POSTER"></Image>
            <View className="pl-3 py-1">
            <Text className="text-black font-medium">{data.original_title}</Text>
            <Text className="text-gray-600 text-[12px]">{data.release_date}</Text>
            <Text className="text-gray-600 text-[12px]">⭐ {(data.vote_average).toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default MovieCard;