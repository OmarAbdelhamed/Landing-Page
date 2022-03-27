// first =>
    // here i made my global variables that i need .
    // sections to select all the sections by the tag name .
    // mainList to select the ul that already exists by its Id.
    // frag to make a new fragment to add the new elements to it to improve the page performance.

    const sections = document.querySelectorAll("section");
    const mainList = document.querySelector("#navbar__list");
    const frag = document.createDocumentFragment();

    /*second =>
    i made a forEach loop to loop on all the sections that i selected 
    and get the attribute of the data-nav , create a textNode , create a link element 
    , create list element li , add the textNode to the link , add the link to the list element 
    then add all the list items to the fragment that i made (after adding the event to it**) */

    sections.forEach( function(element, index){
      lText = element.getAttribute("data-nav");
      textNode = document.createTextNode(lText);
      let nLink = document.createElement("a");
      let nLi = document.createElement("li");
      nLink.appendChild(textNode);
      nLi.appendChild(nLink);

      // here im gonna add an event to scroll when clicking on the element smoothly by scrollIntoView function  

      nLi.addEventListener("click", ()=> {
        element.scrollIntoView({behavior:"smooth"});
      });
      // here i did add the style class to my links to activate the class 
      nLink.classList.add('menu__link')
      //here i appended the list items to the main ul.
      frag.appendChild(nLi);
    });
    
    mainList.appendChild(frag);
    /*here i made a function that specifies the scrollPosition
    then makes a forEachloop to go through the sections and get thier 
    mesurments and the data-nav and if the top from the mesurments is 
    higher than 0 and lower than 300 then its in the viewport 
    so it adds the active class to it but first it checks if there is 
    any section that having it from the beggining then it removes the class
    from it and do its work */
  onscroll = function(){
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sNav = section.getAttribute('data-nav');
    
      if (rect.top > 0 && rect.top < 300) {
        sections.forEach( (aSection)=>{
          if (aSection.classList.contains('your-active-class'))

          aSection.classList.remove('your-active-class');
        });
      
      section.classList.add('your-active-class');
      /*here i did the same for the links but i did add a style to it not a class
        when the linked section is in the viewPort*/
      const lnks = document.querySelectorAll('a');

  lnks.forEach((alnks)=> {

    if (alnks.innerText == sNav) {

      lnks.forEach( (delLnk)=>{
        delLnk.style.background = '#eee';
        delLnk.style.color = 'black';

      })

      alnks.style.background = "#333";
      alnks.style.color = "white";
    }
  });
      };
    });
  };
/* here i did add a botton on the html and its style in the css file and this is the js code.
first i did select my botton.
then added an event scroll to it with a function.
then in the function if we scrolled from the top 30 it will have a show class then it will appear with a nice animation from the right .
then i did add a onclick property to it with an anonymous function to scroll to the top with a nice smooth effect with the great window.scrollto method.
*/
  mybtn = document.getElementById("myBtn");

  window.addEventListener("scroll", ()=> {scrollFunction()});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.classList.add('show');
  } else {
    mybtn.classList.remove('show');
  }
};
mybtn.onclick = function(){
  window.scrollTo({
    top:0,
    behavior: "smooth",
  })
}
