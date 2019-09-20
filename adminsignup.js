
$(document).ready(function(){
$.get(" http://localhost:3000/admin", function(data, status){

$('.adminform').click(function(){
    let a = $("#exampleInputEmail1").val();
    for (i = 0; i < data.length; i++){
             if (a ===data[i].email){
               window.location.assign("/photogalleryAdmin.html");
             }
    }
    
  })
  
})
});
  
  
