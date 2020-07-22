import { useFormik } from 'formik';
import * as Yup from 'yup';


const FormikValidation = () => {
    const formik = useFormik({
        initialValues: {
            loginEmail: '',
            loginPassword: '',
            repeatLoginPassword: ''
        },
        validationSchema: Yup.object({
            loginEmail: Yup.string()
                .email('Incorrect email address.')
                .required('Please enter your emaill address.'),
            loginPassword: Yup.string()
                .required('Please enter your password.')
                .min(2, 'Your password is to short...')
                .max(25, 'Your password is to long...')
                .oneOf([Yup.ref('loginPassword'), null], 'Passwords must match.')
        })
    })

    return formik;
}

export default FormikValidation;