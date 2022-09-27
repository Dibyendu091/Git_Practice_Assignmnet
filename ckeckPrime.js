let num =  17;

let factor = 0;
for(let i=0; i<=num; i++){
    num%i==0? factor++ : null     
}
factor==2? console.log('Prime') : console.log('Not Prime')
   