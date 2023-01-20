import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movie'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ 
        height: title ? 250: 220 
    }}>
        {
            title && (
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{ title }</Text>
            )
        }
        <FlatList 
            data={ movies }
            renderItem={ ({ item }) => (
                <MoviePoster 
                    movie={ item }
                    width={ 140 }
                    height={ 200 }
                />
            )}
            keyExtractor={ ( item ) => item.id.toString() }
            showsHorizontalScrollIndicator={ false }
            horizontal={ true }
        />
    </View>
  )
}
