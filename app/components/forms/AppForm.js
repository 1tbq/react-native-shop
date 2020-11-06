import React from 'react';
import { Formik } from 'formik';

function AppForm({ initialValues, onSubmit, validationShema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationShema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}

export default AppForm;