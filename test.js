// Creating the Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Declaring the New People
var myFather = new Person("tom", "senior", 50, "blue");
var myMother = new Person("emma", "Rally", 48, "green");
// Functions including the person Functions
testPrompt = () => {
  var name = document.getElementById("input").value;
  // Comparing the Values against the Person Object FirstName
  if (name == myFather.firstName || name == myMother.firstName) {
    document.getElementById("testone").textContent = name;
    document.getElementById("input").value = "";
  } else {
    alert("error");
    document.getElementById("input").value = "";
  }
};
// Decalring the button as a Variable
var btn = document.getElementById("submit");
// Adding Event listener to the button
btn.addEventListener("click", () => {
  testPrompt();
});
