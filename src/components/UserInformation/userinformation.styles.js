import { makeStyles } from '@material-ui/core/styles';

const userInformationStyles = makeStyles((theme) => ({
    userInformationContainer: {
        padding: theme.spacing(3, 0)
    },
    mainText: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default userInformationStyles;