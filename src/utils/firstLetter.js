function getFirstLetters(name){
    const firstLetters = name.split(' ').map(val => val.chartAt(0).toUpperCase()).join('');
    return firstLetters
}