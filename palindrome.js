
let str = 'madam';
let bag = '';
for(let i=0; i<str.length; i++){
    bag += str[i];
}

let rev = '';
for(let j=2; j<bag.length-1; j++){
    rev += bag[j];
}

if(bag !== rev){
    console.log('Palindrome');
}else{
    console.log('Not Palindrome');
}

