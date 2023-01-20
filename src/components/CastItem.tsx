import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/credits'

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`

    return (
        <View style={ styles.container }>
            {
                actor.profile_path && (
                    <Image 
                        source={{ uri }}
                        style={ styles.image }
                    />
                )
            }
            <View style={ styles.textContainer }>
                <Text style={ styles.actorName }>{ actor.name }</Text>
                <Text style={ styles.role }>{ actor.character }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 10,
        height: 50,
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 10,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    textContainer: {
        marginHorizontal: 8
    },
    actorName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    role: {
        fontSize: 16,
        opacity: 0.8
    }
})
