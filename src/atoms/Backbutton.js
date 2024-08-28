import { Text, TouchableOpacity, View } from "react-native";
import Backbuttonicon from "./svg/Backbuttonicon";
    
const Backbutton = ({handleBackButtonPress}) => {
    return(
        <View>
            <TouchableOpacity onPress={()=>handleBackButtonPress()}><Backbuttonicon/></TouchableOpacity>
        </View>
    )
}

export default Backbutton;