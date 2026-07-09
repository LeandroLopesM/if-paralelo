import { StyleSheet, Text, View } from "react-native";

export default function Header({color, text}: any) {
    return (
        <View style={style.header}>
            <View style={style.row}>
                <Text style={style.ifpr}>IFP</Text>
                <Text style={style.title}>a</Text>
                <Text style={style.ifpr}>R</Text>
                <Text style={style.title}>alelo</Text>
            </View>
            <Text style={style.subtitle}>O lado escuro da Luhama</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: '9%',
        position: 'sticky',
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    subtitle: {
        color: 'white',
        fontFamily: 'RobotoSlab',
        margin: 'auto',
        marginBottom: '1%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 'auto',
        height: '100%',
        marginTop: '1%',
    },
    title: {
        color: "#DDD",
        fontFamily: "Elinkos",
        margin: 0,
        fontSize: 50,
        height: '50%',
    },
    ifpr: {
        color: "green",
        fontFamily: "Elinkos",
        // margin: 'auto',
        margin: 0,
        fontSize: 50,
        height: '50%',
    }
});