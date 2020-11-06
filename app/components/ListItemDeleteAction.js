import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    }
})
export default ListItemDeleteAction;