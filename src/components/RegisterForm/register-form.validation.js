import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../firebase/firebase';
import { checkUserInDatabase } from '../../firebase/firebase';

const useFormikValidation = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            registerEmail: '',
            registerPassword: '',
            repeatRegisterPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Please enter your first name to recognize you.')
                .min(2, 'First name is to short.'),
            lastName: Yup.string()
                .required('Please enter your last name.')
                .min(2, 'Last name is to short.'),
            registerEmail: Yup.string()
                .email('Incorrect email address')
                .required('Please enter your emaill address'),
            registerPassword: Yup.string()
                .required('Please enter your password')
                .min(2, 'Your password is to short...')
                .max(25, 'Your password is to long...'),
            repeatRegisterPassword: Yup.string()
                .required('Please enter your password again')
                .min(2, 'Your password is to short...')
                .max(25, 'Your password is to long...')
                .oneOf([Yup.ref('registerPassword'), null], 'The password is different from the above')
        }),
        onSubmit: ({ registerEmail, registerPassword, firstName, lastName }) => {
            auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
            .then(userData => {
                checkUserInDatabase(userData.user, firstName, lastName)
            })
            .catch(err => console.log(err))
        }
    })

    return formik;
}

export default useFormikValidation;