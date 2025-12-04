// function kuchDerBaadChalega(fns)
// {
//     setTimeout(() => {
//         fns();
//     }, 3000);
// }

// kuchDerBaadChalega(function() { // callback
//     console.log('Heyyyy!');
// });

// function SimpleFunction(callback) 
// {
//     console.log("inside simple function");
//     callback();
// }

// function mineCallback() 
// {
//     setTimeout(() => {
//         console.log(" callback function...");
//     }, 3000);
// }

// SimpleFunction(mineCallback); // callback

// function profileLekarAaao(username , cb)
// {
//     setTimeout(() => {
//         cb({name : "harsh",age : 27, email : "huui@gmail.com"});
//     }, 3000);
// }

// profileLekarAaao("harsh",function(data) {
//     console.log(data);
// });

// promises

// let pr = new Promise(function(resolve , reject) {

//     setTimeout(() => {
//         let number = Math.floor(Math.random()*10);

//         if(number > 5)  
//         {
//             resolve("resolved with the value : "+number);
//         }
//         else
//         {
//             reject("rejected with the value : "+number);
//         }
//     }, 3000);
// });

// pr.then(function(value) {
//     console.log(value);
// }).catch(function(value) {
//     console.log(value);
// });

// try catch Async await : then & catch cha replacement aahe & cleaner way aahe.
// steps : 
// make 1 function
// function cha aadhi async keyword lihave
// fns madhe await liha and tyapudhe (koi bhi line jo chalani ho) here pr chalana hai.
// await means pr cha wait kara joparynt pr cha answer nahi yet.next line nahi chalu denar.
// async kehta hai apne andar ke code ko try-catch me rakho.
// resolved asen trr CODE TRY madhe liha otherwise catch madhe liha.

let pr = new Promise(function(resolve , reject) {

    setTimeout(() => {
        let number = Math.floor(Math.random()*10);

        if(number > 5)  
        {
            resolve("resolved with the value : "+number);
        }
        else
        {
            reject("rejected with the value : "+number);
        }
    }, 1000);
});

async function abcd() 
{
    try 
    {
        let value = await pr;
        console.log(value);
    } 
    catch (error)  // rejected value error variable madhe yenar.
    {
        console.log(error);
    }
}

abcd();