import React from 'react';
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen';
import {
    AppForm,
    AppFormField as FormField,
    SubmitButton,
    AppFormPicker as Picker
} from '../components/forms'
import defaultStyles from '../config/styles';
import CategoryPickerItem from '../components/CategoryPickerItem';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    title: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: 'Funiture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
    { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' }
];


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationShema={validationSchema}
            >
                <FormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />
                <FormField
                    width={120}
                    keyboardType='numeric'
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <Picker
                    width='50%'
                    items={categories}
                    name="category"
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <FormField
                    maxLength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: defaultStyles.colors.mediumGrey
    }
})
export default ListingEditScreen;