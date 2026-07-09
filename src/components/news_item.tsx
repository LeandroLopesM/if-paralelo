import URIS from "@/assets/images/URI";
import { News } from "@/conf";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NewsItem({item, isVisible, setVisible}: any) {
    const ni = item as News;

    return (
        <TouchableOpacity style={style.body} onPress={() => setVisible(true)}>
            <Text style={ style.title }>{ni.title}</Text>
            <Image style={[ style.image ]} resizeMode='stretch' source={{ uri: URIS[ni.image] as string }} />
            {ni.subtitle? (<Text style={style.subtitle}>{ni.subtitle}</Text>) : (<></>)}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    body: {
        width: '95%',
        margin: 'auto',
        padding: '4%',
        backgroundColor: '#DDD',
        borderRadius: 30,
        gap: 13,
        marginTop: '5%',
    },
    title: {
        fontFamily: 'RobotoSlab',
        fontWeight: 'bold',
        fontSize: 25,
    },
    subtitle: {
        fontFamily: 'RobotoSlab',
        fontSize: 15,
    },
    image: {
        minWidth: '100%',
        // height: 'auto',
        height: 300,
        borderRadius: 5,
    },
});