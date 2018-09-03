// Loops practical Example !!

// let links = document.getElementsByTagName('a');
//
//
// for(let i=0; i < links.length; i++) {
//
//       links[i].className = 'link-' + i; // this will give all the link a clssName of link-1, link-2 etc..
//
//
//
// }

//
// function plusOne(one, two){
//   let addThem = one + two;
//   return addThem;
// }


// let Car = function(maxSpeed, driver) {
//   this.maxSpeed = maxSpeed;
//   this.driver = driver;
//   this.drive = function(speed, time) {
//     console.log('My speed is : ' + speed * time);
//   };
//   this.logDriver = function(){
//     console.log('driver name is ' + this.driver);
//   };
// }
//
// let myCar1 = new Car(80, 'mikko ninja');
// let myCar2 = new Car(22, 'janine ninja');
// let myCar3 = new Car(55, 'miranda ninja');
// let myCar4 = new Car(66, 'panaguiton ninja');
// let myCar5 = new Car(77, 'mikko ninja');
//
//
//
// myCar1.drive(40, 2);
// myCar1.logDriver();
//
// myCar2.drive(66, 2);
// myCar2.logDriver();
//
// myCar3.drive(77, 2);
// myCar3.logDriver();
//
// myCar4.drive(25, 2);
// myCar4.logDriver();
//
// myCar5.drive(62, 2);
// myCar5.logDriver();


//The date object

// let myDate = new Date();
//
// console.log(myDate);

//
// let birthday = new Date(1985, 0, 15, 11, 15, 25);
//
// // get the month of the date ( 0 - 11)
// console.log(birthday.getMonth());
//
// // get the full year (yyyy)
// console.log(birthday.getFullYear());
//
// //get the date of the month (1 - 31)
// console.log(birthday.getDate());
//
// // get the day of the week (0 - 6)
// console.log(birthday.getDay());
//
// //get the hour of the date (0 - 23)
// console.log(birthday.getHours());
//
// //get the number of miliseconds since 1st Jan 1996 (0 - 23)
// console.log(birthday.getTime());

let toggleNavStatus = false;


let toggleNav = function() {
  let getSideBar = document.querySelector(".nav-sidebar");
  let getSideBarUl = document.querySelector(".nav-sidebar ul");
  let getSideBarTitle = document.querySelector(".nav-sidebar span");
  let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "300px";
    getSideBarTitle.style.opacity = "0.5";


    let arrayLength = getSideBarLinks.length;
    for(let i=0; i < arrayLength; i++) {
      getSideBarLinks[i].style.opacity = "1";

    }

toggleNavStatus = true;
  }
    else if (toggleNavStatus === true) {
      getSideBarUl.style.visibility = "hidden";
      getSideBar.style.width = "60px";
      getSideBarTitle.style.opacity = "0";


      let arrayLength = getSideBarLinks.length;
      for(let i=0; i < arrayLength; i++) {
        getSideBarLinks[i].style.opacity = "0";
      }

  toggleNavStatus = false;
    }
}
