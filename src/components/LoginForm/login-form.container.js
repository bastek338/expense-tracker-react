import React from 'react';
import useStyles from './login-form.styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import CustomTextField from '../UI/CustomTextField/custom-text-field.component';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as FacebookIcon } from '../../assets/SVG/login-social-icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/SVG/login-social-icons/google.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import useFormikValidation from '../../validation/formik.validation';
import { googleSignIn, facebookSignIn, gitHubSignIn, auth } from '../../firebase/firebase';

const LoginFormComponent = () => {
    const classes = useStyles();
    const formik = useFormikValidation(); 
    
    const signIn = () => {
        auth.signInWithEmailAndPassword(formik.values.loginEmail, formik.values.loginPassword)
        .catch(err => console.log(err))
    }

    return (
        <Box component="form" className={classes.LoginFormContainer}>
            <Box className={classes.LoginFormInputs}>
                <CustomTextField 
                    size="small" 
                    label="Email" 
                    id="loginEmail" 
                    name="loginEmail"
                    variant="outlined" 
                    value={formik.values.loginEmail} 
                    error={formik.touched.loginEmail && formik.errors.loginEmail}
                    helperText={formik.touched.loginEmail && formik.errors.loginEmail ? formik.errors.loginEmail : null}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <CustomTextField
                    size="small" 
                    label="Hasło" 
                    id="loginPassword"
                    name="loginPassword" 
                    variant="outlined"
                    value={formik.values.loginPassword} 
                    type="password" 
                    helperText={formik.touched.loginPassword && formik.errors.loginPassword ? formik.errors.loginPassword : null}
                    error={formik.touched.loginPassword && formik.errors.loginPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}    
                    
                />
            </Box>
            <Box className={classes.LoginFormButtons}>
                <Button variant="contained" size="large" color="primary" onClick={signIn}>Zaloguj się</Button>
            </Box>
            <Box py={2} className={classes.LoginFormSocialText}>
                Or you can join with
            </Box>
            <Box className={classes.LoginFormSocialIcons}>
                <IconButton className={classes.SocialIcon} onClick={googleSignIn}>
                    <GoogleIcon/>
                </IconButton>
                <IconButton className={classes.SocialIcon} onClick={gitHubSignIn}>
                    <GitHubIcon/>
                </IconButton>
                <IconButton className={classes.SocialIcon} onClick={facebookSignIn}>
                    <FacebookIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default LoginFormComponent;