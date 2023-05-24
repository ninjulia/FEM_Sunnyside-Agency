# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](./screenshot.PNG?raw=true)

### Links

- Solution URL: [https://github.com/ninjulia/FEM_Sunnyside-Agency](https://github.com/ninjulia/FEM_Sunnyside-Agency/)
- Live Site URL: [https://ninjulia.github.io/FEM_Sunnyside-Agency](https://ninjulia.github.io/FEM_Sunnyside-Agency/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I focused on keeping my CSS organized, and leveraging custom properties wherever possible. With this project, I practiced with using :clamp() since I initially didn't understand how to determine a middle value between the smallest and the largest values. While reading up on how clamp works, I discovered it's important to include a rem/em/px unit in the middle value for accessibility concerns. Rem/em/px units scale when a user zooms in on the page, while viewport units do not.

I also swapped out the provided "hamburger" icon for one provided by Font-Awesome and included one of their icons for the close button as well.

### Continued development

I wasn't able to determine how to nest my CSS outside of SCSS. In a production environment, I'd need to compile and minify the multiple CSS files included here. I also need to investigate how to target the a:linked, :visited, etc states. I got the impression there's a way to do this with :is() or :has() that is much cleaner and easier to work with.

### Useful resources

- [clamp() calculator](https://chrisburnell.com/clamp-calculator/) - I set up several headings and some padding using clamp. This website was really useful to help me determine the mid-value.

- [Responsive navbar tutorial using HTML CSS & JS](https://www.youtube.com/watch?v=HbBMp6yUXO0) - Followed along to Kevin Powell's Youtube video and modified the styling to work for this design.

- [Font Awesome Icons](https://fontawesome.com/) - Used their hamburger and close button in the navigation bar on mobile views.

## Author

- Frontend Mentor - [@ninjulia](https://www.frontendmentor.io/profile/ninjulia)
