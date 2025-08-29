1:What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:  getElementById returns a single value with a specific unique id or getElementsByClassName returns a live collection of all elements with a specific class  and querySelector gives you the first element that matches a specific css selector or querySelectorAll gives you all elements that match a specific css selector in a static collection.


2:How do you create and insert a new element into the DOM?
ans: Create the element with createElement() and insert it using appendChild()


3:What is Event Bubbling and how does it work?
ans :Event Bubbling means the event happens on the target element first, then moves up to its parent elements.


4:What is Event Delegation in JavaScript? Why is it useful?
ans : Event Delegation means we put a single event listener on a parent element and use it to handle events on its child elements.

Why it is useful:

1:Saves memory: No need to add listeners to every child element.

2:Works for new elements: Even if new child elements are added later, the parent listener will handle them.

3:Efficient: Fewer event listeners make the code faster and cleaner.


5:What is the difference between preventDefault() and stopPropagation() methods?
ans:preventDefault() stops the browser’s default action.

stopPropagation() stops the event from bubbling up (or capturing) to parent elements.
