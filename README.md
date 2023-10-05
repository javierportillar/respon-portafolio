# Portafolio Javier Portilla Rosero

## steps

To start with **index.html**, inside head it was linked the necessary fonts for this project.

### Body

Inside the body element in **index.html** it was created the first section with class name *hero*, wich contains the toggle mode button, profile picture with an aditional div for making future adjustments, under that picture, there is also the name, and job prefereces, there are 3 icons that pulls up the information related, (ex, github icon pulls personal gitbuh account).

The second section has a name class *experience*, wich contains experience information and time related that experience.

The third section has a name class *cta*, this contains two buttons with name class download-btn and contact-btn.
download-btn contains an pdf about the cv, contact-btn has mailto:personal@email.com to get in contact with the email written.

The fourth section has a name class *portafolio-skills*, contains portafolio and skills buttons, these have the function of change the information related below.

The fifth section with class *portafolio* have the picture of the projects developed, this pictures are inside an *a* element, that should pulls the link for your projects.

There is a sixth section class name *skills* that containt two divs for each topic, in this case there is just Frontend and Backend, under each div there are listed n p element, the individual skills for each topic.

The last section contains fotter that has the c icon, the personal name and the actual year.

### CSS

For css code, some variables were declarated for the respective modes (Ligth and Dark mode). most of the parents elements were center, for tittles (h1,h2,h3) it was assigned *cursor:default*, for btn, links it was *pointer*, de distribution of the elementes is flex, each element has gap to create a space bettwen icons, pictures and text. it was created one media quiery, that is over 850px, in that case the distribution of the projects under portafolio is showed 2 by 2, fixed with *flex-direction*
