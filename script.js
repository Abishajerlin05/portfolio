// function add(a,b){
//     console.log(a+b);
// }
// add(5,6);
// function boxes(){
//     for (let i=1;i<=5;i++){
//         let user = prompt();
//         console.log(user);
//         let com = math.floor(math.random()*10);
//         if(user==com){
//             alert("win");
//             return;
//         }else{
//             alert("lose");
//         }
//     }
// }
// function bgcolor(){
//     colors=["green","red","yellow","purple"];
//     let color =math.floor(math.random()*colors.length);
//     console.log(colors[color]);
//     document.body.style.background=color[color];
// }
// bgcolor();
// function bgcolor(){
//     colors=["green","red","yellow","purple"];
//    let u = prompt();
//     document.body.style.background=color[color];
// }
// bgcolor();
// function randomPassword(){
//     let pass ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password="";
//     for(let i =1;i<=12;i++){
//         password=+Math.floor(Math.random()*pass.length);       
//     }
//      console.log(password);
// }
// randomPassword();
// function signbtn(){
//     let usermail = document .getElementById("email").value;
//     let userpass = document . getElementById("pass").value;
//     console.log(useremail);
//     console.log(userpass);
//     if(useremail==="" || userpass===""){
//         alert("Please enter the email and password");
//     }
//     else if(!useremail.includes("@gmail.com")){
//         alert("Invalid Email");
//     }
//     else if(userpass.length<8){
//         alert("Min 8 digit");
//     }
//     else{
//     alert("sucessfully....!");
//     }
// }
// const thief = document.gotElementById("thief");
// thief.addEventListener("mouseover",()=>{
//    console.log(window.innerWidth);
//    console.log(thief.offsetwidth);
//    let x = Math.random()*(window.innerwidth-thief.offsetwidth);
//    let y = Math.random()*
//    console.log(x+" "+y);
//    thief.style.left=x+"px";
//    thief.style.top=y+"px";
// }) 
// const thief = document.getElementById("thief");
// thief.addEventListener("mouseover",()=>{
//       console.log(window.innerWidth);
//       console.log(thief.offsetWidth);
      // 1000  344 
//       let x = Math.random()*(window.innerWidth-thief.offsetWidth);
//       let y = Math.random()*(window.innerHeight-thief.offsetHeight);
//       console.log(x+" "+y);
//       thief.style.left=x+"px";//477
//       thief.style.top=y+"px";
// })
// function t(){
//     alert("Win");
// }
function functionNme(parameters){
    return value;//optional
}
function greet(name){
    return"Hello"+name;
}
console.log(greet("Alice"));
console.log(greet("Bob"));