//IMPLICIT
// let myString = "shabeeh";
// let myNumber = 123;
// myString = 123               //Type 'number' is not assignable to type 'string'
// myNumber = "shabeeh"        //Type 'string' is not assignable to type 'number'
//----------------------------------------------------------------------------------------------------
//EXPLICIT
// let string:String = "hello"
// let number:Number = 123
// let boolean:Boolean = true
// let skills : String[] = ['JS','CSS','TS']
// let count : Number[] = [1,2,3]
// let emptyArray : [] = []
// let userDetails : {name:String; age:Number; salary:number} = {
//     name : "krishna prasad",
//     age : 21,
//     salary : 0
// }
// ----------------------------------------------------------------------------------------------------
//INTERFACE
// interface Details {
//     name : String;
//     age : Number;
//     salary : Number;
//     getName : () => void
// }
// let userData : Details = {
//     name : "shabeeh",
//     age : 18,
//     salary : 0,
//     getName(){
//         console.log(this.name);
//     }
// }
//-----------------------------------------------------------------------------------------------------
//Type
// type Details = {
//     name : String;
//     age : Number;
//     salary : Number;
//     getName : () => void
// }
// let userData : Details = {
//     name : 'krishna prasad',
//     age : 123,
//     salary : 100,
//     getName () {
//         console.log(this.name)
//     }
// }
//------------------------------------------------------------------------------------------------------
// Union operator
// let myVariable : String | Number;
// myVariable = "hello";
// myVariable = 123;
// myVariable = true //Type 'boolean' is not assignable to type 'String | Number'.
// function printID (id:Number | string){
//     console.log(id)
// }
// printID(123)
// printID("hello")
// printID(true) //Argument of type 'boolean' is not assignable to parameter of type 'string | Number'.
// interface Details {
//     name : String;
//     age : Number | string;
//     salary : Number;
//     getName : () => void
// }
// let userData : Details = {
//     name : "shabeeh",
//     age : "18",
//     salary : 0,
//     getName(){
//         console.log(this.name);
//     }
// }
//--------------------------------------------------------------------------------------------------------------
// optional operator
// interface Details {
//     name : String;
//     age : Number | string;
//     salary ?: Number;
//     getName ?: () => void
// }
// let userData : Details = {
//     name : "shabeeh",
//     age : "18",
//     // salary : 0,
//     // getName(){
//     //     console.log(this.name);   //it is  optional not show an error not to be enr=tered not an problem
//     // }
// }
//-----------------------------------------------------------------------------------------------------------------
// Functions
// type data = {
//     name : String;
//     age : Number | String;
//     work ?: Boolean;
//     place ?: String
// }
// let user : data ={
//      name : "krishnaprasad",
//      age : 20,
//      work : false,
//      place : "Palakkad"
// }
// 1st senario
// function getUserData (userData : data){
//        return userData.name
// }
// getUserData(user)
// 2nd senario
// function getUser ({name,age} : {name:string, age:Number }){
//     return name;
// }
// getUser({name:"kpk",age : 21})
// return type mentioning
// function getUserData (userData : data) : String{
//        return userData.name
// }
// let username = getUserData(user)
// username.//avilable so many string methods/propreties
// function getUserData (userData : data) : data{ // custom type
//        return userData
// }
// let username = getUserData(user)
// username.//avilable so many string methods/propreties
//----------------------------------------------------------------------------------------
// //named type / custom type
// type statusType = "pending" | "compeleted" | "failed";
// let currentStatus : statusType = "pending"
// const response = "pending";
// if(response === "pending"){
//     currentStatus = "pending";
// }
// type ToggleSwitch = "on" | "off";
// let toggleSwitch : ToggleSwitch = "on" ;
//----------------------------------------------------------------------------------------------
// function overLoaded
// Normal Function
// function add(num1:number,num2:number){
//     return num1 + num2
// }
// add(10,20)
// //this is not an properway 
// function add(num1: number | string, num2: number | string): number|string {
//     if (typeof num1 === "string" || typeof num2 === "string") {
//         return num1 + " " + num2;
//     }
//     return num1 + num2;
// }
// console.log(add(10, 20));   // Output: 30
// console.log(add('10', '20')); // Output: 10 20
// function add(num1: number, num2: number): number;
// function add(num1: string, num2: string): string;
// function add(num1: any, num2: any): any {
//     return num1 + num2;
// }
// add(2,3)
// add("2","3")
// add([],[]) // this is not addable that its the reason for we are additionally mentioned 2 functions that function is function overloaded....
//add({},{})// not valid
//-------------------------------------------------------------------------------------------------------------------
// Generics
// type Details = {
//     name : String;
//     age : Number;
// }
// let userData : Details = {
//     name : 'krishna prasad',
//     age : 123,
// }
// type admin = {
//     firstName : string;
//     role:string
// }
// let adminDeatail : admin ={
//    firstName :"debug media",
//    role : "admin"
// }
// function getDetail (Detail : Details) : Details{
//     return Detail
// }
// const userValue = getDetail(userData)
// const adminValue = getDetail(adminDeatail) //Argument of type 'admin' is not assignable to parameter of type 'Details'.
//   Type 'admin' is missing the following properties from type 'Details': name, age
//   that time we can use 3 methods
// 1 - we can use union opeartor    like function getDetail(Detail :Details|admin ):Details|admin 
// 2- function overloading method  like 
//     function getDetail(Detail :Details):Details;
//     function getDetail(Detail :admin):admin;
//     function getDetail(Detail :any):any{
//     return Detail
// }
// 3 - generic method
// function getDetail<T>(Detail:T):T{
//     return Detail
// }
// const userValue = getDetail(userData)
// const adminValue = getDetail(adminDeatail)
// userValue.age
// userValue.name
// adminValue.firstName
// adminValue.role
//------------------------------------------------------------------------
// merging same data types
// type Details = {
//     name : String;
//     age : Number;
// }
// type admin = Details        //type admin = {
//                             //  name: String;
//                             // age: Number;
//                             // }
// type admin = Details &{
//     role:string
// }
// let userData : Details = {
//     name : 'krishna prasad',
//     age : 123,
// }
// let adminDeatail : admin ={
//    name :"debug media",
// //    role : "admin",
//    age:20
// }
//-----------------------------------------------------------------------------
// Enums
// numeric value
// enum statusType {
//     PENDING,
//     COMPLETED,
//     FAILED
// }
// enum statusType {
//     PENDING = "pending",
//     COMPLETED = "completed",
//     FAILED = "failed"
// }
// function getStatus(orderId: string , status : statusType){
//    console.log(orderId , "==" , status)
// }
// getStatus("12345",statusType.COMPLETED)
//---------------------------------------------------------------------------------------------------
// Keyof type of
// const statusType = {
//   PENDING : "pending",
//   COMPLETED : "completed",
//   FAILED :"failed"
// }
// function getStatus(orderId : string , status : typeof statusType){  
//   console.log(orderId,"==",status);    //        that time only get in Keys of an objects and we can use keyof also then get values also                                                
//   } 
// const statusType = {
//   PENDING : "pending",
//   COMPLETED : "completed",
//   FAILED :"failed"
// }
// function getStatus(orderId : string , status :keyof typeof statusType){  //type of get object const statusType: {
//   console.log(orderId,"==",status);                                                            //   PENDING: string;
//   }                                                                                           //   COMPLETED: string;
//                                                                                               //   FAILED: string;
//                                                                                               // }
// getStatus("12345","COMPLETED")
// ===============================================================================================================
// utility types
// * readonly
// type user = {
//   name : string;
//   age : string
// }
// // const userData  = {
// //   name :"kpk",
// //   age : 20
// // }
// const userData: Readonly<user> = {
//   name: "kpk",
//   age: "20"
// };
// userData.name = "kp" // value is changble i want to read only that time we can use readonly
//* partial
// type user = {
//   name : string;
//   age : string
// }
// const userData : Partial < user > = {
//   name:"kpk"
// }                                       //it is  using to give an optional in data if you want you will add 
//* Required
// type user = {
//     name : string;
//     age ?: string  // i am given optional but i use require it wants to fill all data otherwise showing error
//   }
//   const userData : Required <user> = {
//     name : "kpk",
//     age : "20"
//   }
// *pick
// type user = {
//   name : string;
//   age : string;
//   salary : number;
// }
// const userData:Pick<user,'name'>={
//        name : "sigam" //it is only adding value in name field only no avilable in other keys
// }
//*omit
// type user = {
//   name : string;
//   age : string;
//   salary : number;
// }
// const userData:Omit<user,'salary'> ={
//    name : "kp",
//    age  : "20"
// }// expempt to salary field that will be use to an omit not include in salary
// * Exclude
// type statusType = "pending" | "completed" | "failed"
// const userData :Exclude <statusType,"pending"> = "completed"  //remove type from a union
//* Record
//Is a shortcut to defining an object type with specifird key type and value type
// type food = Record <string,string> 
// const Food:food ={
//   KFC:"chicken",
//   MANDHI : "beef"
// }
