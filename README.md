# acme-explosives  
Exercise in promises and complex data structures  
## Description  
Project was an exercise in accessing nested data using promises.  
We used a series of modules to create Promises which each accessed and extracted a layer from our data and which then built that data int a cohesive nested structure.  
We then created a final function which chained those promises together and passed the resulting data into a function which built that data into an HTML string of cards and printed that string to the page.  
Webpack was used as our task runner, ES Lint as our linter, and Bootstrap and SASS for basic styling.  
## Screenshots  
![Screenshot of page on load showing title and 18 product cards with titles and product info](https://raw.githubusercontent.com/sarahjulesthorne/acme-explosives/master/src/assets/images/screenshot.png "Screenshot of page on load showing title and 18 product cards with titles and product info")  
## Installation Instructions  
* Clone down this repo  
* At the root of the project, run `npm install`  
## How To Run  
* In terminal, type `npm start`  
* To make a production build of this project, in terminal type `npm run build`--creates folder called build with all necessary minified code  
## Author  
Sarah Thorne  
