import { Text, TouchableOpacity, View } from "react-native";
import SearchIcon from "./svg/SearchIcon";
    
const Custombutton = ({handleButtonPress}) => {
    return(
        <View>
            <TouchableOpacity onPress={()=>handleButtonPress()}><SearchIcon/></TouchableOpacity>
        </View>
    )
}

export default Custombutton;