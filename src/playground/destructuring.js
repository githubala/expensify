person = {
    location: 'hyderabad',
    age: '42',
    address: {
        hno:'1-5-617',
        roadno:'6',
        pincode:'500060'
    }
}

const {location: place ='bangalore', age} = person;

console.log(`he is of location ${place} and age of ${age}` );

const book = {
    title:'ego is the enemy',
    author:'ryan holiday',
    publisher:{
//name:'penguin'
    }
}
const {name:publishername='self-published'} = book.publisher
console.log(`the publisher name ${publishername}`);

