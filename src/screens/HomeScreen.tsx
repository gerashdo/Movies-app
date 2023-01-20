
import React from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { ActivityIndicator, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { GradiantBackground } from '../components/GradiantBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

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
