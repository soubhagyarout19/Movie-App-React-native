import { useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import MovieCard from "../organisms/MovieCard";
import MovieDetails from "../organisms/MovieDetails";
import Custombutton from "../atoms/CustomButton";
import NoSearchResult from "../molecules/NoSearchResult";
import { apiKey } from "../Constants";

const SearchPage = ( ) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [noSearchResult, setNosearchResult] = useState(false);
    const [query, setQuery] = useState("");
    const [modalvisibility, setModalVisibility] = useState(false);
    const [movieDetailsData, setMovieDetailsData] = useState('');

    async function searchMovie(query) {
        
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
          );
    
          if (response.ok) {
            const data = await response.json();
            setMovies(data.results);
            setError("");
            if(data.results.length === 0){
              setError("No Results Found")
              setNosearchResult(true);
            }
          } else {
            setError("An error occurred while fetching movies.");
            setMovies([]);
          }
        } catch (error) {
          setError("An error occurred while fetching movies.");
          setMovies([]);
        }
      }
      const closeModalProp = () => {
        setModalVisibility(false);
      }

      const handleButtonPress = () => {
        searchMovie(query);
      }
    return(
        <View className="pt-2">
            <ScrollView>
            <View className="flex-row justify-center items-center gap-2 mb-2">
            <TextInput className="bg-gray-300 w-[90%] h-[50px] rounded-md text-black pl-2" onChangeText={(text)=>setQuery(text)} onSubmitEditing={()=>handleButtonPress()}></TextInput>
            <View className="absolute right-8 top-3">
              <Custombutton handleButtonPress={handleButtonPress}/>
            </View>
            </View>
            <View className="flex-row flex-wrap gap-2 justify-center">
            {
                movies.map((ele)=>{
                    return <TouchableOpacity onPress={()=>{setModalVisibility(true); setMovieDetailsData(ele)}} className="w-44 rounded-md bg-white" key={ele.id} style={{elevation: 2}}><MovieCard data={ele}/></TouchableOpacity>
                })
            }
            </View>
            </ScrollView>
            {
              noSearchResult && <NoSearchResult/>
            }
            <MovieDetails closeModalProp={closeModalProp} modalvisibility={modalvisibility} data={movieDetailsData}/>
        </View>
    )
}

export default SearchPage;