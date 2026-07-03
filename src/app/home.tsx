import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/nav_bar";
import NewsList from "@/components/news_list";
import { globalStyle } from "@/conf";
import { View } from "react-native";

export default function Home() {
    return (
        <View style={globalStyle.main}>
            <Header />
                <NavBar />
                <NewsList />
            <Footer />
        </View>
    )
}