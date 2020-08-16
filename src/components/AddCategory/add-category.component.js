import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from './add-category.styles';
import { useCategory } from '../../context/CategoryList/category-list.context';
import { useModal } from '../../context/Modal/modal.context';
import { categoryAction } from '../../reducers/category-expenses/category-expenses.action';
import { db, firebaseApp } from '../../firebase/firebase';
import { useUser } from '../../context/User/user.context';
import uniqid from 'uniqid';
import { SnackbarContext } from '../../context/Snackbar/snackbar.context';
import { randomHexColor } from '../../utils/randomColor';
import { Select, MenuItem } from '@material-ui/core';
import { checkExtension } from '../../utils/checkExtension';
import ColorPicker from '../UI/ColorPicker/color-picker.component';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const AddCategory = () => {
    const classes = useStyles();
    const [categoryName, setCategoryName] = useState('');
    const [categoryColor, setCategoryColor] = useState('#000000');
    const { handleAlertOpen } = useContext(SnackbarContext);
    const { dispatchCategory } = useCategory();
    const { handleClose } = useModal();
    const { user } = useUser();
    const [ file, setFile ] = useState('');
    const [uploadInfo, setUploadInfo] = useState({state: null, msg: ''});
    
    const isExist = Object.keys(user.categoryList).includes(categoryName);

    const handleChangeComplete = (categoryColor) => setCategoryColor(categoryColor.hex);

    const addNewCategory = () => {
        if(isExist){
            handleAlertOpen('This category already exist', 'error');
        } else {
            db.collection('users').doc(user.id).set({
                categoryList: {
                    [categoryName.toLowerCase()]: {
                        id: uniqid(),
                        amountSpent: 0,
                        name: categoryName,
                        icon: file,
                        color: categoryColor,
                    }
                }
            }, {merge: true})
            .then(() => dispatchCategory({ type: categoryAction.ADD_CATEGORY, categoryList: user.categoryList }));
        }
        handleClose();
    }

    const uploadFile = e => {
        const file = e.target.files[0];
        if(checkExtension(e.target.files[0].name)){
            const storageRef = firebaseApp.storage().ref();
            const fileRef = storageRef.child('icons/' + file.name);
            fileRef.put(file).then(() => {
                fileRef.getDownloadURL().then(file => setFile(file));
                setUploadInfo({state: true, msg: 'Uploaded.'});
            })
        } else {
            setUploadInfo({state: false, msg: 'Error, check extension file'});
        }
    }
 
    return (
            <form className={classes.AddCategoryContainer}>
                <TextField id="add-category-name" label="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                <input className={classes.AddCategoryInputFile} id="contained-button-file" type="file" accept="image/*" onChange={uploadFile}/>
                <ColorPicker
                    handleColor={handleChangeComplete} 
                    categoryColor={categoryColor}
                />
                <Box className={classes.AddCategoryUploadContainer}>
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span"  className={classes.AddCategoryUploadButton}>upload icon</Button>
                        </label>
                    <Box display="flex" alignItems="center" mt="10px" mx="auto" fontSize="12px">
                        {
                            (uploadInfo.state === true && <DoneIcon style={{color: '#4CAF50'}}/>) || 
                            (uploadInfo.state === false && <ClearIcon style={{color: '#db000e'}}/>)
                        }
                        {uploadInfo.msg}
                    </Box>
                </Box>
                <Box className={classes.AddCategoryButton}>
                    <Button variant="contained" color="primary" onClick={addNewCategory}>Dodaj</Button>
                </Box>  
            </form>
    )
}

export default AddCategory;