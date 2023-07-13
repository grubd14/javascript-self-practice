// let user = {
//   name : "John",
//   surname : "Smith",
// }

// delete user.name;

//check emptiness

// let schedule = {};

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// function isEmpty(schedule) {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }

//sum of object properties

      // let salaries = {
      //   John: 100,
      //   Ann: 160,
      //   Pete: 130
      // }

      // let sum = 0;
      // for (let key in salaries) {
      //   sum += salaries[key];
      // }

      // alert(sum);
      // console.log(sum);

      let menu = {
        width: 200,
        height: 300,
        title: "My name",
      };

      function multiplyNumeric() {
        for (let key in menu) {
          if (menu[key] == "number") {
            obj[key] = obj[key] * 2;
          }
        }
      }
