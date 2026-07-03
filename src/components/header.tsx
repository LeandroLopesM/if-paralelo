import { globalStyle } from "@/conf";
import { StyleSheet, Text, View } from "react-native";

export default function Header({color, text}: any) {
    return (
        <View style={[globalStyle.header, { backgroundColor: '#000' }]}>
            <View style={style.row}>
                <Text style={style.ifpr}>IFP</Text>
                <Text style={style.title}>a</Text>
                <Text style={style.ifpr}>R</Text>
                <Text style={style.title}>alelo</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 'auto',
        height: '100%',
        width: '100%',
    },
    title: {
        color: "#DDD",
        fontFamily: "Elinkos",
        margin: 0,
        fontSize: 40,
    },
    ifpr: {
        color: "green",
        fontFamily: "Elinkos",
        // margin: 'auto',
        margin: 0,
        fontSize: 40,
    }
});