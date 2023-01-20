import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useDetails } from '../hooks/useDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'>{}

const { height: screenHeight} = Dimensions.get('screen')

export const DetailScreen = ( { route }: Props ) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }` 

  const { isLoading, fullMovie, cast } = useDetails( movie.id )

  console.log( fullMovie )

  return (
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
      
    </ScrollView>
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
  }
})