// callback : kuch kaam ho jaane ke baad function chala do

// steps :  1.  Accept a function in a Function call (which is callback).
//          2.  opposite side la (jyacha argument madhe function pass kelay) tyacha (parameter madhe) fns/callback accept krun block madhe tyala call kara
// 3. repeat 3/4 times mg to callback-hell ready hoil.

// Final simple steps : 
// 1.   jithe function call aahe tithe function pass kara (tech callback aste)
// 2.   opposite side la jithe function parameter chi jaga ahe tithe callback accept krun tycha body madhe call kara 
// 3. step 1 : madhe khali jo parameter aahe tyat details accept karu shakto aapan.

// Example no : 1

// function harshSeDetailsLaao(address , cb) 
// {
//     // logic for details puche & laane ki
//     // details ka toh aachar nahi daaloge na to function me paas krrdo
//     cb({lan : 23.32 , lang : 24.42}); 
// }

// // function ke parameter me details accept hoti hai hamesha
// harshSeDetailsLaao("Morane Dhule",function(details) {
//     console.log(details);
//     // ye function is a callback
// })

// callback HELL example

function abcd(cb1) 
{
    cb1(function(cb3) {
        cb3(function(cb5) {
            cb5();
        });
    });
}

abcd(function(cb2) {
    cb2(function(cb4) {
        cb4(function() {
            console.log('jirli ka?');
            
        });
    });
})