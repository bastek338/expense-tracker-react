const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(() => ({
    ClipLoaderContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '40%',
        left: '50%'
    }
}))

export default useStyles;