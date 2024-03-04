/* Storage */

/* localStorage */
/* sessionStorage */

// 1.localStorage.setItem
// 2.localStorage.getItem
// 3.localStorage.removeItem
// 4.localStorage.clear
// 5.localStorage.key

// localStorage.setItem('Info', 'Nermin')
// let a = localStorage.getItem('Info')
// console.log(a);
// localStorage.removeItem('aaj')
// localStorage.clear()

// localStorage.setItem('age', 12)

// let b = localStorage.key(1)
// console.log(b);

// let info = {
//   name: "narmin",
//   city: "baku",
// };

// localStorage.setItem("userInfo", JSON.stringify(info));

// let a = JSON.parse(localStorage.getItem("userInfo"));
// console.log(a);

// localStorage.setItem("DarkMode", JSON.stringify(true));
// let c = JSON.parse(localStorage.getItem("DarkMode"));
// console.log(c);

let btn = document.querySelector("button");
let myDarkMode = localStorage.getItem("DarkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("DarkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("DarkMode", null);
};

if (myDarkMode == "enable") {
  enableDarkMode();
}

const toggleMode = () => {
  let myDarkMode = localStorage.getItem("DarkMode");
  if (myDarkMode == "enable") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

btn.addEventListener("click", toggleMode);
