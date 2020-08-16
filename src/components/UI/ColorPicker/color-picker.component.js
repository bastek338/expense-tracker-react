import React from 'react'
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useStyles from './color-picker.styles';

const ColorPicker = ({handleColor, categoryColor}) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => setOpen(!open);
    
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Box className={classes.ColorPickerButton}>
                <Button onClick={handleClick} variant="contained" color="primary">pick color</Button>
                <Box component="span" style={{backgroundColor: categoryColor}} className={classes.ColorPickerPreview}></Box>
                <Box>{categoryColor}</Box>
            </Box>
            {open ? (
                <Box className={classes.ColorPickerPopover}>
                <Box className={classes.ColorPickerCover} onClick={handleClose}/>
                    <ChromePicker
                        color={categoryColor}
                        onChange={handleColor}
                        onChangeComplete={handleColor}
                    />
                </Box>
            ) : null}
        </div>
    )
}

export default ColorPicker
