
import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade()

    return (
        <View style={{ flex: 1, backgroundColor:'gray', justifyContent: 'center', alignItems:'center' }}>
            <Animated.View 
                style={{
                    width: 100,
                    height: 100,
                    borderColor: 'white',
                    backgroundColor: 'green',
                    borderWidth: 10,
                    opacity: opacity
                }}
            />    
            <Button 
                title='FadeIn'
                onPress={ () => fadeIn() }
            />
            <Button 
                title='FadeOut'
                onPress={ () => fadeOut() }
            />
        </View>
    )
}
