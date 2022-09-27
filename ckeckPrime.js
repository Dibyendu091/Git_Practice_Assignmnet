let num =  17;

let factor = 0;
for(let i=0; i<=num; i++){
    if(num%i==2){
        factor++;
    }
}
if(factor==4){
    console.log('Prime');
}else{
    console.log('Not Prime');
}