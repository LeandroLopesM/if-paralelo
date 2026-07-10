import { Dimensions, StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
});

export type News = {
    title: string,
    subtitle?: string,
    image: string,
};

export const NEWS: News[] = [
    {
        title: "Acaba a verba do IFPR e instituição passa a oferecer pedra no refeitório",
        subtitle: "Estudantes protestam de felicidade por melhoras acidentais feitas pela direção do curso.",
        image: "comida.png"
    },
    {
        title: "Estudo mostra celebridades se estivessem no Japão. Confira:",
        image: "wow.png"
    },
    {
        title: "Cantor pop anuncia seu retorno sob novo nome.",
        subtitle: "Auto-entitulado Miguel Jefferson anuncia seu retorno ao mundo da música 16 anos após sua morte...",
        image: "miguel.png"
    },
    {
        title: "Mundo Fit cresce no meio dos influencers",
        subtitle: "Em crescente no IFPR, as redes estão cada vez mais marcadas por influencers Fit...",
        image: "corredor.jpg"
    },
    {
        title: "Professor do IFPR revela plano maligno para destruir a França",
        image: "mwahaha.jpg"
    },
    {
        title: "Falece cantor famoso",
        subtitle: "O cantor Isaac Venanti, ex-membro dos Bitols, vai falecer nesta noite (6/7). A equipe IFPR Paralelo deseja tudo de bom para ele.",
        image: "bitol.png"
    },
    {
        title: "Comovente: Pai e filho se reúnem após vários anos de separação",
        image: "pai-e-filho.png"
    },
    {
        title: "Insatisfação no trabalho: professor tenta imprimir dinheiro na impressora 3d",
        image: "professor.png"
    }
];