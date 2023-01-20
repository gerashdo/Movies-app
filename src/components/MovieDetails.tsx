import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { Cast } from '../interfaces/credits';
import { FullMovie } from '../interfaces/movie'

interface Props {
    fullMovie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ fullMovie, cast }: Props) => {

    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 15, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='star-outline' color="gray" size={ 16 }/>
                    <Text>
                        { fullMovie.vote_average }
                    </Text>
                    <Text style={{ marginLeft: 5 }}>
                        - { fullMovie.genres.map( gen => gen.name ).join(', ') }
                    </Text>
                </View>

                {/* Story */}
                <Text style={ styles.sectionTitle }>
                    Historia
                </Text>
                <Text style={ styles.sectionText }>
                    { fullMovie.overview }
                </Text>

                {/* budget */}
                <Text style={ styles.sectionTitle }>
                    Presupuesto
                </Text>
                <Text style={ styles.sectionText }>
                    { currencyFormatter.format(fullMovie.budget, { code: 'USD' })  }
                </Text>

            </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    sectionText: {
        fontSize: 16
    }

})
