$(document).ready(function(){
    // $.get("http://localhost:3000/addanimal", function(data){
    //     // console.log(data);
    // })
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/animals",
        dataType: "json",
        contentType: "application/json",
        data: {
            format: 'json'
        },

            success:function(data){
                
                $('#searchIt').click(function(event){
                    event.preventDefault();
                    var inputText=$('#searchInput').val();
                    var animals=data;
                    var output = '';
                        for (var i=0; i<animals.length; i++){
                            if(inputText.toLowerCase()===animals[i].animalname.toLowerCase()){
                                console.log('working')
                                $('#showanimals').append('<div><img src= '+animals[i].imgUrl+'></div>');
                                $('#animaldetails').append('<h5> Animal Name: ' + animals[i].name+'</h5>');
                                $('#animaldetails').append('<h5> Specie: ' + animals[i].species+'</h5>');
                                $('#animaldetails').append('<h5> Pet Name: ' + animals[i].lifeSpan+'</h5>');
                                $('#animaldetails').append('<h5> Condition: ' + animals[i].description+'</h5>');
                                
                            }
                        }

                })
            }
 })

})






// $(document).ready(function(){



//     $.ajax({
//         type:"GET",
//         url: "http://localhost:3000/animals",
//         cache: false,
//         data:{
//             format:'json'
//         },
//         success: function(html){
    
//             $('#searchIt').click(function(event){
//                 event.preventDefault();
//                 var input= $('#searchInput').val();

//             })
//          // $("#results").append(html);
//          console.log(html)
//          html.forEach(el => {
//             if (input === data[el].name){
//              let col = $('<div></div>').addClass("col-sm")
//              let img = $('<img />').attr({'src': el.imgUrl, 'width': "250px"})
//              let card = $('<div></div>').addClass("card")
//              let cardText2 = $('<p></p>').addClass("card-text").text("Life Span: " + el.lifeSpan)
//              let cardText3 = $('<p></p>').addClass("card-text").text("Species: " + el.species)
//              let cardText = $('<p></p>').addClass("card-text").text("Description: " + el.description)
//              let cardBody = $('<div></div>').addClass("card-body")
//              let  cardTitle = $('<h4></h4>').addClass("card-title").text(el.name)
//              cardBody.append(cardText3,cardText2,cardText)
//              card.append(cardTitle, cardBody)
//              col.append(img, card)
    
//              $('.target').append(col)
//             }
//          })
//         }
//     })
//     })