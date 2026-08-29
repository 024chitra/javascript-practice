## JavaScript Events & Event Handling

1. **Handle a button click.**
   Create a button and use `addEventListener()` to display `"Button clicked!"` when it is clicked.

2. **Change text on click.**
   Create a paragraph and a button. When the button is clicked, change the paragraph's text.

3. **Change an element's style on click.**
   When a button is clicked, change the background color and font size of a `<div>`.

4. **Attach multiple event listeners.**
   Add two different `click` event listeners to the same button. Make each listener perform a different action.

5. **Use a named event handler.**
   Create a function called `handleClick()` and attach it to a button using `addEventListener()`.

---

6. **Remove a click event listener.**
   Create a button that changes its text when clicked. Add another button that removes the click listener.

7. **Enable and disable a button listener.**
   Create `Start` and `Stop` buttons. `Start` should attach a click listener to another button, while `Stop` should remove it.

8. **Remove a specific event handler.**
   Create a counter button whose click handler increments a number. Add a second button that removes the increment functionality.

9. **Why doesn't this work?**

   ```js
   button.addEventListener("click", () => {
       console.log("Clicked");
   });

   button.removeEventListener("click", () => {
       console.log("Clicked");
   });
   ```

   Explain why the event listener is not removed and fix the code.

---

10. **`click` event**
    Create a button that increments a counter every time it is clicked.

11. **`input` event**
    Create a text input and paragraph. Display the user's text in the paragraph **as they type**.

12. **`change` event**
    Create a `<select>` containing three colors. Display the selected color whenever the selection changes.

13. **`submit` event**
    Create a login form with username and password fields. Display the entered values when the form is submitted.

14. **`mouseover` event**
    Create a `<div>` that changes its background when the mouse moves over it.

15. **`keyup` event**
    Create an input field that displays the last key pressed whenever the user releases a keyboard key.

16. **Combine multiple events.**
    Create a text input that:

    * Shows the current character count using `input`
    * Shows the last key pressed using `keyup`
    * Changes its border when the mouse enters using `mouseover`

---

17. **Explore the event object.**
    Add a click listener to a button and print the event object to the console.

18. **Use `event.target`**
    Create three buttons. When any button is clicked, display the text of the clicked button using `event.target`

19. **Use `event.type`**
    Create a button with both `click` and `mouseover` listeners. Display which event occurred using `event.type`

20. **Use `event.preventDefault()`.**
    Create a form and prevent it from submitting/reloading the page using `event.preventDefault()`.

21. **Prevent a link from navigating.**
    Create an `<a>` element pointing to another page. Use `preventDefault()` to stop navigation and display `"Navigation prevented!"`.

22. **Inspect the target and event type.**
    Create a page containing buttons, inputs, and a select element. Add appropriate event listeners and display:

    ```text
    Event: click
    Target: BUTTON
    ```

23. **Form validation with the event object.**
    Create a registration form. If the username is empty, prevent submission and display an error message.

---

24. **Observe event bubbling.**
    Create a nested structure:

    ```html
    <div id="parent">
        <button id="child">Click Me</button>
    </div>
    ```

    Add click listeners to both elements. Click the button and observe the order in which the events execute.

25. **Three-level bubbling.**
    Create:

    ```text
    grandparent
        ↓
      parent
        ↓
      child
    ```

    Add click listeners to all three and determine the order in which they execute.

26. **Stop event bubbling.**
    Modify the previous example so that clicking the child does **not** trigger the parent's event handler using:

    ```js
    event.stopPropagation();
    ```

27. **Understand `event.target` vs `event.currentTarget`**
    Create nested elements with click listeners and determine the difference between:

    ```js
    event.target
    event.currentTarget
    ```

---

28. **Observe event capturing.**
    Create nested elements with click listeners and use:

    ```js
    addEventListener("click", handler, true);
    ```

    Observe the order in which the events execute.

29. **Compare capturing and bubbling.**
    Create nested elements and attach listeners using both:

    ```js
    true
    ```

    and

    ```js
    false
    ```

    Explain the difference in execution order.

30. **Create a capturing-phase demonstration.**
    Build a nested:

    ```text
    DIV
      → SECTION
          → BUTTON
    ```

    Show the event flow from the outermost element to the clicked button.

31. **Control event propagation.**
    Create an example where an event travels through the capturing phase but is stopped before reaching the target.

---

32. **Basic event delegation.**
    Create a `<ul>` containing five `<li>` elements. Add **one** event listener to the `<ul>` that detects which list item was clicked.

33. **Dynamic list items.**
    Create a button that dynamically adds new `<li>` elements to a list. Use event delegation so that newly created items are also clickable without adding individual listeners.

34. **Delete list items using delegation.**
    Create:

    ```text
    Item 1 [Delete]
    Item 2 [Delete]
    Item 3 [Delete]
    ```

    Use a single event listener on the parent to delete the clicked item.

35. **Todo list with event delegation.**
    Build a todo list where each item contains:

    ```text
    Learn JavaScript    [Complete] [Delete]
    ```

    Use event delegation to handle both buttons.

36. **Event delegation with `event.target`**
    Create a list where clicking an item changes its background. Handle all items using one listener on the parent.

37. **Event delegation with nested elements.**
    Create buttons containing an icon:

    ```html
    <button>
        <span>Delete</span>
    </button>
    ```

    Use event delegation to correctly detect that the delete button was clicked even when the user clicks the `<span>`.

---

## Challenge Questions 🔥

38. **Counter with Start/Stop**

    Build a counter with:

    ```text
    [Start] [Stop] [Reset]
    Counter: 0
    ```

    Use `addEventListener()` and `removeEventListener()` to control the counter.

39. **Live character counter**

    Create a textarea that displays:

    ```text
    Characters: 25
    ```

    Update the count using the `input` event.

40. **Interactive color selector**

    Create a `<select>` containing multiple colors. When the user selects a color, change the page background.

    Requirements:

    * Use `change`
    * Use `event.target`
    * Do not use inline event handlers.

41. **Interactive form**

    Build a registration form that:

    * Validates input on `submit`
    * Prevents submission using `preventDefault()`
    * Displays errors
    * Uses `input` for live validation
    * Uses `keyup` to detect keyboard input

42. **Todo application with event delegation**

    Build a complete todo list with:

    * Add todo
    * Delete todo
    * Mark todo as completed
    * Dynamic todo creation
    * One parent event listener
    * `event.target`
    * Event delegation

43. **Event propagation playground**

    Create three nested elements:

    ```text
    Grandparent
       ↓
     Parent
       ↓
     Child
    ```

    Add controls that let the user switch between:

    * Bubbling
    * Capturing
    * `stopPropagation()`

    Display the order in which each event handler executes.

44. **Build a mini event inspector**

    Create a page containing buttons, inputs, links, and a select element. Whenever the user interacts with an element, display:

    ```text
    Event Type: click
    Target: BUTTON
    ```

    The inspector should demonstrate:

    * `event.target`
    * `event.type`
    * `preventDefault()`
    * Multiple event types
    * Event delegation
