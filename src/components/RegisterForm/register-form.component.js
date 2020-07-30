import React from 'react';
import { Box } from '@material-ui/core';
import CustomTextField from '../UI/CustomTextField/custom-text-field.component';
import Button from '@material-ui/core/Button';
import useStyles from './register-form.styles';
import { useFormikValidation } from './register-form.validation';
import { useUser } from '../../context/User/user.context';


const RegisterForm = () => {
    const classes = useStyles();
    const { formik } = useFormikValidation();
    const { error } = useUser(); 

    return (
        <Box component="form">
            <Box className={classes.RegisterFormInputs}>
                <CustomTextField 
                    size="small" 
                    variant="outlined" 
                    label="First Name" 
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && formik.errors.firstName}
                    helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                />
                <CustomTextField 
                    size="small" 
                    variant="outlined" 
                    label="Last Name" 
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && formik.errors.lastName}
                    helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                />
                <CustomTextField 
                    size="small" 
                    variant="outlined" 
                    label="Email" 
                    id="registerEmail"
                    name="registerEmail"
                    placeholder="e.g. andrew123@gmail.com"
                    value={formik.values.registerEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.registerEmail && formik.errors.registerEmail}
                    helperText={formik.touched.registerEmail && formik.errors.registerEmail ? formik.errors.registerEmail : null}
                />
                <CustomTextField 
                    size="small" 
                    variant="outlined" 
                    label="Password"
                    id="registerPassword"
                    name="registerPassword"
                    type="password"
                    value={formik.values.registerPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.registerPassword && formik.errors.registerPassword}
                    helperText={formik.touched.registerPassword && formik.errors.registerPassword ? formik.errors.registerPassword : null}
                />
                <CustomTextField 
                    size="small" 
                    variant="outlined" 
                    label="Repeat password"
                    id="repeatRegisterPassword"
                    name="repeatRegisterPassword"
                    type="password"
                    value={formik.values.repeatRegisterPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.repeatRegisterPassword && formik.errors.repeatRegisterPassword}
                    helperText={formik.touched.repeatRegisterPassword && formik.errors.repeatRegisterPassword ? formik.errors.repeatRegisterPassword : null}
                />
            </Box>
            <Box className={classes.RegisterFormErrorMessage}>{error}</Box>
            <Box className={classes.RegisterFormButtons}>
                <Button size="large" variant="contained" elevation={0} onClick={formik.handleSubmit}>register</Button>
            </Box>
        </Box>
    )
}

export default RegisterForm;

