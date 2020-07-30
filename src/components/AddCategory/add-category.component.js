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

const AddCategory = () => {
    const classes = useStyles();
    const [categoryName, setCategoryName] = useState('');
    const [initialAmount, setInitialAmount] = useState(0);
    const { handleAlertOpen } = useContext(SnackbarContext);
    const { dispatchCategory } = useCategory();
    const { handleClose } = useModal();
    const { user } = useUser();
    const [ file, setFile ] = useState('');
    const [uploadInfo, setUploadInfo] = useState('');
    
    const isExist = Object.keys(user.categoryList).includes(categoryName);

    const addNewCategory = () => {
        if(isExist){
            handleAlertOpen('This category already exist', 'error');
        } else {
            db.collection('users').doc(user.id).set({
                categoryList: {
                    [categoryName.toLowerCase()]: {
                        id: uniqid(),
                        amountSpent: !initialAmount ? 0 : parseInt(initialAmount),
                        name: categoryName,
                        icon: file,
                        color: randomHexColor(),
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
                setUploadInfo('The file was uploaded successfully');
            })
        } else {
            setUploadInfo('Invalid extension type');
        }
    }
 
    return (
            <form className={classes.AddCategoryContainer}>
                <TextField id="add-category-name" label="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                <TextField id="add-category-initial-amount" label="Initial Amount" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)}/>
                <input className={classes.AddCategoryInputFile} id="contained-button-file" type="file" accept="image/*" onChange={uploadFile}/>
                <label htmlFor="contained-button-file"> 
                    <Button variant="contained" color="primary" component="span"  className={classes.AddCategoryUploadButton}>upload icon</Button>
                </label>
                    {uploadInfo && <span className={classes.AddCategoryErrorMsg}>{uploadInfo}</span>}
                <Box className={classes.AddCategoryButton}>
                    <Button variant="contained" color="primary" onClick={addNewCategory}>Dodaj</Button>
                </Box>
                
            </form>
    )
}

export default AddCategory;