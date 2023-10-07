# Portafolio Javier Portilla Rosero

## steps

To begin with **index.html** inside the *<head>* section, necessary fonts were linked for this project.

### Body

Inside the *<body>* element in **index.html**, the first section with the class name hero was created. It contains the toggle mode button, a profile picture with an additional div for future adjustments. Under that picture, there is also the name and job preferences. There are 3 icons that provide related information; for example, the GitHub icon links to a personal GitHub account.

The second section has the class name *experience*, which contains information about experience and its associated time frame.

The third section has a name class *cta*, which includes two buttons with the class names download-btn and contact-btn. download-btn provides a link to a PDF containing the CV, while contact-btn uses *mailto:personal@email.com* to facilitate contact via email.

The fourth section has the class name *portafolio-skills*, containing buttons for portafolio and skills. These buttons have the function of changing the related information below.

The fifth section, with the class name portafolio, displays images of the projects developed. These images are within an *<a>* element, which should link to your projects.

There is a sixth section with the class name *skills* that contains two divs for each topic. In this case, there are only Frontend and Backend. Under each div, there is a list of *<p>* elements with individual skills for each topic.

The last section contains a footer with the copyright icon, the personal name, and the current year.

### CSS

For the CSS code, some variables were declared for the respective modes (Light and Dark mode). Most parent elements were centered. For titles (h1, h2, h3), *cursor: default* was assigned, while for buttons and links, *cursor: pointer* was used. The distribution of elements uses flexbox, and each element has a gap to create space between icons, pictures, and text. A media query was created, which activates for screens over 850px. In this case, the distribution of projects under the portfolio section is displayed in a 2x2 grid, fixed with flex-direction.

### JavaScript

To develop Js code it was needed to declarate the variables according the name class elements, with events listener it was possible to show and hide the skills or the portafolio, it was created an listener event wich is resposible of set the dark or ligth theme, for that it was created the class name elements acording to HTML, also two objets that contains the directory for the icons theme. It was declared isDark variable wich is setted once the theme button is clicked, it check the status of that variable and in case that the variable has an true status, it will apply the class dark-theme in case that the varibale is true and in case that the variable has false status, it will apply the standar icons theme and will not apply the class name dark-theme.

## Firebase

Firebase Was used to deploy the project on an live server, it was needed to download by npm the information needed, under the next link there are the steps to follow to deploy the project using ->[firebaseweb](https://firebase.google.com/docs/hosting?authuser=0&_gl=1*61ulvf*_ga*MTcwOTE2MDA1Ni4xNjk2NjA3ODU2*_ga_CW55HF8NVT*MTY5NjY4OTk1OS4yLjEuMTY5NjY4OTk4NC4zNS4wLjA.&hl=es-419#implementation_path).