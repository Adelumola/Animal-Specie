$.ajax({
    type:"GET",
    url: "http://localhost:3000/animals",
    cache: false,
    success: function(html){
     // $("#results").append(html);
     console.log(html)
     html.forEach(el => {
        
         let col = $('<div></div>').addClass("col-sm")
         let img = $('<img />').attr({'src': el.imgUrl, 'width': "250px", 'height':"200px", "border-radius":"50%"}).addClass("zoom")
      
         let card = $('<div></div>').addClass("card cardcon")
         let cardText2 = $('<p></p>').addClass("card-text").text("Life Span: " + el.lifeSpan)
         let cardText3 = $('<p></p>').addClass("card-text").text("Species: " + el.species)
         let cardText = $('<p></p>').addClass("card-text").text("Description: " + el.description)
         let cardBody = $('<div></div>').addClass("card-body")
         let  cardTitle = $('<h4></h4>').addClass("card-title").text(el.name)
         cardBody.append(cardText3,cardText2,cardText)
         card.append(cardTitle, cardBody)
         col.append(img,card)
         

         $('.target').append(col)
     })
    }
})
{/* <div class="col-sm">
        <img src="img/par.jpg" class="d-block w-100" alt="...">
        <div class="card">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div> */}