
import React from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { ActivityIndicator, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel';
import { GradiantBackground } from '../components/GradiantBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColors';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
    
    if( isLoading ){
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator 
                    color="green"
                    size={ 100 }
                />
            </View>
        )
    }

    const getColors = async( index: number ) => {
        const movie = nowPlaying[ index ]
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
        const [ primary, secondary ] = await getImageColors( uri )
        console.log( primary, secondary )
    }


    return (
        <GradiantBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 430 }}>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem={ ({ item }: any) => <MoviePoster movie={ item }/>}
                            sliderWidth={ windowWidth }
                            itemWidth={ 250 }
                            inactiveSlideOpacity={ 0.9 }
                            onSnapToItem={ index => getColors( index )}
                        />
                    </View>

                    <HorizontalSlider 
                        movies={ popular }
                        title='Populares'
                        />
                    <HorizontalSlider 
                        movies={ topRated }
                        title='Top'
                        />
                    <HorizontalSlider 
                        movies={ upcoming }
                        title='Proximas'
                        />
                </View>
            </ScrollView>
        </GradiantBackground>
    )
}
