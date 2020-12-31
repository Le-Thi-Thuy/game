import * as firebase from 'firebase';
import Categories from '../component/home/Categories';

var firebaseConfig = {
  apiKey: "AIzaSyDkTCVsLibWiwEj6jdCIQ0srv0qE5lQYAA",
  authDomain: "game-39747.firebaseapp.com",
  databaseURL: "https://game-39747-default-rtdb.firebaseio.com",
  projectId: "game-39747",
  storageBucket: "game-39747.appspot.com",
  messagingSenderId: "582002105657",
  appId: "1:582002105657:web:a0a98488d7f4c79db65ce8",
  measurementId: "G-W7GLBQN8C8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var categoryList =[];
var userList =[];
var products = [];
var i = 0;

function getProductsa() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('products').on('value', (product) => {
     // console.log(product)
     const productList = [];
      product.forEach(element => {
        productList[i] = element.val();
        productList[i].key = element.key;
        i++;

      });
      console.log(productList);
      resolve(productList)
    })
  })

}
function getCategories() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('categories').on('value', (category) => {
      category.forEach(element => {
        categoryList.push(element.val()) ;
      });
      console.log(categoryList);
      resolve(categoryList)
    })
  })

}
function getUsers() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('users').on('value', (user) => {
      user.forEach(element => {
        userList.push(element.val()) ;
      });
      resolve(userList)
    })
  })

}


const dataGame = firebase.database();

export { dataGame , getProductsa , getCategories , getUsers };

