import { TextInput, View } from "react-native";

const Searchbar = ({getTextInput}) => {
    return(
        <View>
            <TextInput onChangeText={(text)=>{getTextInput(text)}} className="bg-gray-500 rounded-md" placeholder="Enter movie name..."></TextInput>
        </View>
    )
}

export default Searchbar;