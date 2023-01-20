
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movie'
import { RootStackParamList } from '../navigation/Navigation';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({ movie, height = 400, width = 250 }: Props) => {

    const navigator = useNavigation<StackNavigationProp<RootStackParamList>>()

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    
    return (
        <TouchableOpacity 
            style={{
                width,
                height,
                marginHorizontal: 6,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={ 0.9 }
            onPress={ () => navigator.navigate('DetailScreen', movie )}
        >
            <View style={ styles.posterContainer }>
                <Image
                    style={ styles.image }
                    source={{
                        uri
                    }}
                />
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    posterContainer:{
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,

        elevation: 10,
    },
    image:{
        flex: 1,
        borderRadius: 20
    }
})
