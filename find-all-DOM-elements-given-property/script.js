const getComputedColor = (colorCode) => {
  // create a new element
  const div = document.createElement("div");

  // apply the color to the e,ement
  div.style.color = colorCode;

  // append the div element to body
  document.body.appendChild(div);

  // get the computed stye of the div
  const computedStyles = window.getComputedStyle(div);
  const { color } = computedStyles;

  // remove the div
  document.body.removeChild(div);
  return color;
};

// console.log(`getComputedColor ${getComputedColor("#ff0000")}`);

const findEle = (root, colorCode) => {
  // convert input color code to hexa value
  const standardColor = getComputedColor(colorCode);

  // store the output
  const output = [];

  // helper function to traverse the DOM elements
  const search = (ele) => {
    // get color value of emement
    const eleColor = ele.style.color;

    // convert the value to hexa value
    const eleComputedColor = getComputedColor(eleColor);

    // condition to check if both hexa value match
    // store to output
    if (eleComputedColor === standardColor) {
      output.push(ele);
    }

    // iterate and recursively search for each child of the element
    for (let child of ele.children) {
      search(child);
    }
  };

  // start the search by calling
  search(root);

  //return the output
  return output;
};

const root = document.getElementById("root");
console.log("root", root);

console.log(findEle(root, "#f00"));
console.log(findEle(root, "red"));
