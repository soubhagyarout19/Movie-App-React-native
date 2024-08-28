import { useEffect, useState } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import MovieCard from "../organisms/MovieCard";
import Shimmer from "../molecules/Shimmer";
import LoadMoreButton from "../atoms/LoadMoreButton";
import MovieDetails from "../organisms/MovieDetails";
import { authorizationToken } from "../Constants";

const Home = () => {
    const [globalArray, setGlobalArray] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [modalvisibility, setModalVisibility] = useState(false);
    const [movieDetailsData, setMovieDetailsData] = useState('');
    const [errorText, setError] = useState('');
    const dummyArray = [1,2,3,4,5,6,7,8,9,0];
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: authorizationToken
        }
      };
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${pageNo}`, options);
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setGlobalArray(prevArray => [...prevArray, ...data.results]);
            setError(null);
          } catch (err) {
            console.error('Fetch error:', err);
            if (err.name === 'TypeError' && err.message === 'Network request failed') {
              setError('Network request failed. Please check your connection or try again later.');
            } else {
              setError('Failed to fetch data. Please try again later.');
            }
          }
        };
    
        fetchData();
      }, [pageNo]);
      const loadMoreHandler = () => {
        setPageNo(pageNo + 1);
      }
      
      const closeModalProp = () => {
        setModalVisibility(false);
      }

    return(
        <ScrollView>
        <View className="flex-row flex-wrap justify-center pt-2 gap-2">
        {
            globalArray.length === 0 ? dummyArray.map((ele, index)=> <View key={index} className="rounded-md"><Shimmer /></View>) :
            globalArray.map((ele)=>{
                return <TouchableOpacity onPress={()=>{setModalVisibility(true), setMovieDetailsData(ele)}} className="w-44 rounded-md bg-white" key={ele.id}><MovieCard data={ele}/></TouchableOpacity>
            })
        }
        </View>
        <View className="flex-row justify-center my-3">
          <LoadMoreButton loadMoreHandler={loadMoreHandler}/>
        </View>
        <View>
          <MovieDetails closeModalProp={closeModalProp} modalvisibility={modalvisibility} data={movieDetailsData}/>
        </View>
        </ScrollView>
    )
}

export default Home;