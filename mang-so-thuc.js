let array1 = [-3, 5, -17, -1, 6]

for(i =0; i < array1.length; i++){
    if(array1[i] < 0){
        array1[i] = array1[i] * -1
    }
}
console.log(array1)