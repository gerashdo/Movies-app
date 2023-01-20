import ImageColors from "react-native-image-colors"

export const getImageColors = async( uri: string ) => {
    const colors = await ImageColors.getColors( uri, {} )
    let primary = ''
    let secondary = ''

    switch ( colors.platform ) {
        case 'android':
          // android result properties
          primary = colors.dominant!
          secondary = colors.average!
          break
        case 'ios':
          // iOS result properties
            primary = colors.primary
            secondary = colors.secondary
          break
        default:
          primary = '#067987',
          secondary = '#549DA6'
    }

    return [ primary, secondary ]
}