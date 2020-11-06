import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/appText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
const ListingDetailsScrean = () => {
    return (
        <View>
            <Image style={styles.image} source={'../assets/sofa_red.jpg'} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Sofa For Sale</AppText>
                <AppText style={styles.price}>$500</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={"tariq.png"}
                        title="Tariq Bashir"
                        subTitle="5 Listings"
                    >
                    </ListItem>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold "
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontWeight: "500",
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 30
    }
})
export default ListingDetailsScrean;
