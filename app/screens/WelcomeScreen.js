import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={{
                uri: "https://images.unsplash.com/photo-1532618448574-fa71ec0b6df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagline}>Sell What you dont need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color="secondary" ></AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        padding: 20,
        color: colors.white
    }
})
export default WelcomeScreen;
