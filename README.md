# functionssszzssszzzszzz

since i'm finally gonna do computer science in school next year (starting a-levels this september) i thought i may as well write a little program. this is still wip btw.

what it does is it takes user input, a maths function, and it turns it into somethign js can read.

e.g:

user inputs `4x^2+3x-2`, and x = 7

first, it turns that into `4*x**2+3*x-2`<!--, extra brackets to enhance readability: `4*(x**2)+3*(x)-2`-->.

then, it uses a function constructor so it can substitute the values of x.

if you wanted your solution, first set all the things like f(x), g(x), x = , and the prefrence (doesn't do anything rn), then open the console and use the `calc()` function in this manner:

`calc(<any integer or x here>, funcx)`

and it will apply that number to the fucntion `f(x)` that you have defined

i abandoned programming in like june 2024 glad to be back

### TODO (order most to least complexity i think)
- give solutions for f(x) and g(x) after clicking the submit button instead of just regurgitating what the user already gave us
- add support for composite functions
- add support for inverse functions
- allow user to define their own functions and variables and in turn allow them to request the calculator to do whatever they want for them, e.g. they should be able to do wild stuff like f(g(h(f(h(i(j(k(x)))))))) if they wanted
- add algebraic manipulation support so they can solve for x and stuff (this is the only one i have completely no idea what i'm meant to do)
