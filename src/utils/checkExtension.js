export function checkExtension(file){
    console.log(file)
    if(/\.(jpe?g|png|gif|svg)$/i.test(file)) {
        return true
    } 
    return false;
}
