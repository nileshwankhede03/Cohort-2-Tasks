// console.log(this); // window

// function show() 
// {
//     console.log(this);
// }
// show(); // window

// const obj = {
//     name: "A",
//     show() 
//     {
//         console.log(this.name);
//     }
// };

// obj.show();

// const obj = {
//     name : "A",
//     show : () => {
//         console.log(this.name); // undefined
//     }
// };
// obj.show();

// const obj = {
//     name: "A",
//     outer() 
//     {
//         function inner() 
//         {
//             console.log(this.name);
//         }
//         inner();
//     }
// };
// obj.outer(); // window

// const obj = {
//     name: "A",
//     outer() 
//     {
//         const inner = () => {
//             console.log(this.name);
//         };
//         inner();
//     }
// };
// obj.outer(); // Obj

// function f() 
// {
//     console.log(this);
// }
// const fn = f.bind({x : 10});
// fn();

// function hi() 
// {
//     console.log(this.value);
// }
// hi.call({value: 50});