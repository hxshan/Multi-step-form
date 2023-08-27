# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://github.com/hxshan/Multi-step-form)
- Live Site URL: [Add live site URL here](https://multistep-form-hxshan.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
### What I learned

In the development process of this challenge i learned a new psuedo class call ```css :has()```.
I was also challenged with writing more efficient js code 
```js
function tabChange(tabNum){
    stepsArr.forEach(element=>{
        element.classList.remove("active")
    })
    stepsArr[tabNum-1].classList.add("active")

    if(tabNum!=5){
        stepNumsArr.forEach(element=>{
            element.classList.remove("current")
        })
        stepNumsArr[tabNum-1].classList.add("current")
    }
}
```
Im particulary proud of how i was able to optimise this function which was previously 63 lins to what is shown above.


### Continued development
There is still more ways i could make my js more efficent and my css more 'DRY' and i will continue to work on this as i keep progressing and learning new things 

### Useful resources

- [Stack overflow](https://stackoverflow.com/a/1014958) - This is where i discoverd ```css :has()```

## Author
- Frontend Mentor - [@hxshan](https://www.frontendmentor.io/profile/hxshan)
- LinkedIn - [Galgodage Heshan Gimhana](www.linkedin.com/in/heshan-gimhana)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments
-[Ayesh Karunaratne](https://aye.sh/blog/sri-lankan-phone-number-regex)
for the regular expression used to validate phone numbers
-my friend gautham  for helping me optimise my js code
-[LinkedIn]((https://www.linkedin.com/in/gautham-kulasingham-223bb2257/))
