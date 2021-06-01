# etch-a-sketch

A grid painting program that allows the user to paint over squares, and change the grid size.

Simple : Write a program that allows the user to draw over a grid, and allows them to change the grid size.

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
Yes, there is a user interface. The interface will be simple, only the painting grid and a button and prompt that allows changing of the grid size.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?
The inputs will come from the grid size prompt, and user's mouse. Inputs will come directly from user.

What’s the desired output?
From the prompt, a size in the grid size. From the user's mouse, a color change of the grid squares.

Given your inputs, what are the steps necessary to return the desired output?

Add an eventlistner to a button element that calls a function,
Function prompts user to enter a number between 1 and 32,
check if prompt value is a number and that its within the asked range,
call function with prompt value as parameter that sets up grid and removes previous divs if they exist,
create css styles for grid canvas with display set to grid,
in function that sets up canvas, set property of both rows and columns to 'repeat' with value of prompt,
create function that takes the propmt value squared and creates divs inside of canvas with div style applied to each in for loop,
create a for loop that adds event listners to divs in canvas that trigger function when hovered over,
create function that creates random hexa code for color, and pass back to event listner
