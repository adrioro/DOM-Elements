var element = document.getElementById("myLink");


/*True. This method returns true if the
specified attribute exists, otherwise it returns false.*/
element.hasAttribute("href")
element.hasAttribute("rel") //False

//Removes the string text of the tag: "LINK TO CERROTTI'S PORTFOLIO".
element.removeAttribute("text")

/*Returns the name of text string ""LINK TO..."
if it has one. */
element.getAttribute("text")

/*setAttribute adds an attribute to the element. In this case
it is adding an id and its value.*/
element.setAttribute("id", "myId")