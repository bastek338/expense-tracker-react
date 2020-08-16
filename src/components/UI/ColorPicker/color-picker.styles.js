const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(() => ({
    ColorPickerCover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    },
    ColorPickerPopover: {
        position: 'absolute',
        zIndex: '2',
    },
    ColorPickerPreview: {
        display: 'block',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        margin: '0 auto'
    },
    ColorPickerButton: {
        display: 'flex',
        alignItems: 'center'
    }
}))

export default useStyles;