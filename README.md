## Readme
## Answer to the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans:getElementById finds an element by its unique id attribute and getElementsByClassName finds all elements with the given class name.
   querySelector finds the first element that matches a CSS selector and querySelectorAll finds all elements that match a CSS selector this is the difference.
2. How do you **create and insert a new element into the DOM**?
 Ans:Use createElement() to make an element.Fill it with text/attributes.Insert it with append, prepend, before, or after depending on where you want it.
3. What is **Event Bubbling** and how does it work?
  Ans:When an event happens on an element (like a button click), it first runs on that element and then “bubbles up” to its parent elements, one by one, until it reaches the document.
4. What is **Event Delegation** in JavaScript? Why is it useful?
  Ans:Event delegation is a technique where you add one event listener to a parent element instead of adding separate listeners to multiple child elements.It works because of event bubbling (events move upward in the DOM).
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:preventDefault() stops the default browser behavior of an event and stopPropagation() stops the event from bubbling/capturing to parent elements.
