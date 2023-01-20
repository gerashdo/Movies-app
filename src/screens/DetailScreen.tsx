import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useDetails } from '../hooks/useDetails';
import { MovieDetails } from '../components/MovieDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'>{}

const { height: screenHeight} = Dimensions.get('screen')

export const DetailScreen = ( { route, navigation }: Props ) => {

  const { top } = useSafeAreaInsets()

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }` 

  const { isLoading, fullMovie, cast } = useDetails( movie.id )

  const handleBackPress = () => {
    requestAnimationFrame( () => navigation.pop() )
  }

  return (
    <>
    <ScrollView>
      <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={{ uri }}
            />
      </View>
      <View style={ styles.marginContainer }>
        <Text style={ styles.originalTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>
      {
        isLoading
        ? <ActivityIndicator size={ 35 } color="gray" style={{ marginTop: 35 }}/>
        : <MovieDetails fullMovie={ fullMovie! } cast={ cast }/>
      }
      <TouchableOpacity
        style={{ ...styles.backButton, top: top + 20 } }
        onPress={ handleBackPress }
      >
        <Icon 
          name="arrow-back-outline"
          size={ 50 }
          color="white"
        />
      </TouchableOpacity>
      
    </ScrollView>
    
    </>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red',
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 10,
  },
  image: {
    flex: 1
  },
  marginContainer: {
    marginTop: 15,
    marginHorizontal: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  originalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8
  },
  backButton:{
    position: 'absolute',
    left: 25,
  }
})