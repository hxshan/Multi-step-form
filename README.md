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
![Screen Shot 2023-08-27 at 14 59 18](https://github.com/hxshan/Multi-step-form/assets/85825544/076a354e-fa5d-4414-be02-731e72194ac5)
![Screen Shot 2023-08-27 at 14 59 12](https://github.com/hxshan/Multi-step-form/assets/85825544/00e623a7-3133-47e7-9672-bbadf08c6115)
![Screen Shot 2023-08-27 at 14 58 33](https://github.com/hxshan/Multi-step-form/assets/85825544/33c87c90-81ff-4671-9252-69438037a4e9)
![Screen Shot 2023-08-27 at 14 58 22](https://github.com/hxshan/Multi-step-form/assets/85825544/4e426ad2-e97d-4889-9c1d-a112df4f5e34)
![Screen Shot 2023-08-27 at 14 54 41](https://github.com/hxshan/Multi-step-form/assets/85825544/8390ed2c-3813-4c47-9eda-f78f2a890638)

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

my friend gautham  for helping me optimise my js code
-[LinkedIn]((https://www.linkedin.com/in/gautham-kulasingham-223bb2257/))
