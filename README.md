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


