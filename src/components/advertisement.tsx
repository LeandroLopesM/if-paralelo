import { globalStyle } from "@/conf";
import { useState } from "react";
import { Linking, Modal, Text, TouchableOpacity, View } from "react-native";

export default function AdvertisementPopup({isVisible, setVisible}: any){
    const [worthy, setWorthy] = useState(true);

    return (
        <Modal 
            transparent={true}
            onRequestClose={() => setVisible(!isVisible)}
            visible={isVisible}>
                <View style={[globalStyle.main, {backgroundColor: '#000000aa', position: 'absolute'}]}>
                    <View style={{ backgroundColor: '#ddd', margin: 'auto', padding: '5%' }}>
                        <Text style={{ fontFamily: 'RobotoSlab', fontSize: 25 }}>Gostou da notícia?</Text>
                        <Text style={{ fontFamily: 'RobotoSlab', fontSize: 15 }}>Se inscreva agora para ajudar propagar a verdade!</Text>
                        <Text>Para se inscrever: pegue o primeiro vôo para Xique-Xique (BH), um carro irá estar te esperando<br/>O motorista, um homem chamado Aldair vai te dar um comprimido e uma garrafa d'água. Aguarde mais instruções no local.</Text>
                        <View
                            style={{ flexDirection: 'row', width: '100%', gap: '60%' }}>
                            <TouchableOpacity 
                                onPress={() => {
                                    Linking.canOpenURL('https://fauux.neocities.org/pattern')
                                        .then(can => {
                                            if (can) {
                                                Linking.openURL('https://fauux.neocities.org/pattern')
                                                    .catch(_ => { setWorthy(false) });
                                            } else {
                                                setWorthy(false);
                                            }
                                        }).catch(e => { console.log(e); setWorthy(false); })
                                }}>
                                <Text style={{ marginRight: 'auto', color: 'blue', textDecorationLine: 'underline'}}>Saiba mais</Text>
                            </TouchableOpacity>
                            {
                                worthy? <></> : <Text style={{ margin: 'auto', color: 'red'}}>Não queremos seu dinheiro</Text>
                            }
                            <TouchableOpacity onPress={ _ => setVisible(false) }>
                                <Text style={{ marginLeft: 'auto', color: 'green', fontWeight: 'bold' }}>Melhor não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    )
}