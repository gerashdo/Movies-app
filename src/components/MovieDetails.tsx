import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { Cast } from '../interfaces/credits';
import { FullMovie } from '../interfaces/movie'
import { CastItem } from './CastItem';

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

            {/* actors */}
            <View style={ styles.actorsContainer }>
                <Text style={{ ...styles.sectionTitle, marginLeft: 15 }}>
                    Actores
                </Text>
                <FlatList 
                    data={ cast }
                    renderItem={ ({ item }) => <CastItem actor={ item }/> }
                    keyExtractor={ ( item ) => item.id.toString() }
                    showsHorizontalScrollIndicator={ false }
                    horizontal={ true }
                    style={ styles.actorsList }
                />
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
    },
    actorsContainer: {
        marginBottom: 30,
    },
    actorsList:{
        height: 80
    }
})
