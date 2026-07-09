import { NEWS } from "@/conf";
import { FlatList } from "react-native";
import Footer from "./footer";
import NewsItem from "./news_item";

export default function NewsList({isVisible, setVisible}: any) {
    return (
        <FlatList
            style={{width: '100%', height: '100%', flex: 1, flexDirection: 'column'}}
            data={NEWS}
            renderItem={({item}) => (
                <NewsItem item={item} isVisible={isVisible} setVisible={setVisible} />
            )}
            ListFooterComponent={() => (<Footer />)}/>
    )
}