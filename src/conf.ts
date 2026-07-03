import { Dimensions, StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: '7%',
        position: 'fixed',
    }
});