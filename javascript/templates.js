var url = 'http://hp-api.herokuapp.com/api/characters';
var container = document.querySelector(".product-container");
var temp = [];
var search = document.getElementById("tt");

  search.addEventListener( "keyup" ,(e) => {
       var searchstring = e.target.value.toLowerCase();
       temp.forEach(user => {

            var isvisible = user.name.toLowerCase().includes(searchstring);
            console.log(isvisible);
            temp.element.classList.toggle("hide", !isvisible)
                  });
               
  })

  async function loadTemplates() {
   try {

      templates = await (await fetch(url)).json();
    throw("error");

    
   } catch (error) {
        console.log(error)
   } 
   temp = templates 
         .map(user => {
          var plates = document.querySelector('.data-container').content.cloneNode(true).children[0];
          var productImage = plates.querySelector(".product-image");
          var productText = plates.querySelector(".p-text");
  
          productImage.src = user.image;
          productText.innerHTML = user.name;
          container.append(plates);
          return { user: user.name, image: user.image, element: plates}
      })
     }

loadTemplates();