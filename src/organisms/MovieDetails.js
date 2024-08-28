import { Dimensions, Image, Modal, ScrollView, StatusBar, Text, View } from "react-native";
import { IMAGE_URL } from "../Constants";
import Backbutton from "../atoms/Backbutton";
import { useEffect, useState } from "react";

const MovieDetails = ({modalvisibility, data, closeModalProp}) => {
    console.log(data);
    
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const onChange = ({ window: { width, height } }) => {
            setScreenWidth(width);
            setScreenHeight(height);
        };

        const subscription = Dimensions.addEventListener('change', onChange);

        return () => {
            subscription.remove();
        };
    }, []);

    const handleBackButtonPress = () => {
        closeModalProp();
    }
    return(
        <Modal visible={modalvisibility} onRequestClose={()=>closeModalProp()}>
            <View className="">
            <View className="">
            <Image height={screenHeight} width={screenWidth} className="rounded-tl-md rounded-tr-md" source={{ uri: IMAGE_URL + data?.backdrop_path }} alt="POSTER"></Image>
            </View>

                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', height: screenHeight, width: screenWidth}} className="absolute px-4 pt-2">
                    <View className="flex-row items-center">
                    <Backbutton handleBackButtonPress={handleBackButtonPress}/>
                    <Text className="text-white text-[25px] px-10 font-bold">{data?.original_title}</Text>
                    </View>
                    <View className="flex-row pt-2 gap-4 mt-2">
                    <Image className="rounded-md" height={300} width={200} source={{ uri: IMAGE_URL + data?.backdrop_path }} alt="POSTER"></Image>
                    <View>
                    <Text className="text-white font-medium text-lg mt-2">{data?.release_date}</Text>
                    <Text className="text-white font-medium text-lg mt-2">⭐ {data?.vote_average?.toFixed(2)}</Text>
                    <Text className="text-white font-medium text-lg mt-2">{data?.vote_count}</Text>
                    </View>
                    </View>
                    <View className="mt-2">
                    <Text className="text-white text-2xl">{data?.original_title}</Text>
                    <Text className="text-white text-xl font-medium mt-2">Overview</Text>
                    <Text className="text-white font-medium mt-2">{data?.overview}</Text>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default MovieDetails;