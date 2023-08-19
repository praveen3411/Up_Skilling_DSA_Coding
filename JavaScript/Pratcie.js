let one = (y) => {
  console.log("hello");
  y();
};
one(
  (y = () => {
    console.log("Bollo");
  })
);

function Bollo(a) {
  console.log(a);
}
function Ram(a, b) {
  return a + b;
}
Bollo(Ram(10, 20));

document.getElementById("one").addEventListener("click", () => {
  console.log("You clicked me!");
});
