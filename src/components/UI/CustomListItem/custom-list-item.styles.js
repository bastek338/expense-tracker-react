const { makeStyles } = require("@material-ui/core");


const listItemStyles = makeStyles((theme) => ({
    CustomListActiveLink: {
        backgroundColor: '#F4F5F7',
        textDecoration: 'none',
        borderRadius: '10px',
        '& > *': {
            color: '#192131'
        }
    },
    CustomListContainer: {
        fontFamily: 'Circular Std Book',
        margin: theme.spacing(1, 0),
        '&:hover': {
            borderRadius: '10px'
        }
    }
}))

export default listItemStyles;