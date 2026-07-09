import AdvertisementPopup from "@/components/advertisement";
import Header from "@/components/header";
import NewsList from "@/components/news_list";
import { globalStyle } from "@/conf";
import { useState } from "react";
import { View } from "react-native";

export default function Home() {
    const [adVisible, setAdVisible] = useState(false);

    return (
        <View style={globalStyle.main}>
            <Header />
            <AdvertisementPopup isVisible={adVisible} setVisible={setAdVisible} />
            <NewsList isVisible={adVisible} setVisible={setAdVisible} />
        </View>
    )
}