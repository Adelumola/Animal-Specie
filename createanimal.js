$(document).ready(function(){

    function resetAdd(){
        $('#nameAdd').val('');
        $('#speciesAdd').val('');
        $('#lsAdd').val('');
        $('#imgAdd').val('');
        $('#desAdd').val('');
    }

    $('#subAdd').click(function(event){
        event.preventDefault();
        const animalName = $('#nameAdd').val();
        const animalLifeSpan = $('#lsAdd').val();
        const animalSpecies = $('#speciesAdd').val();
        const animalImg = $('#imgAdd').prop('files')[0];
        const animaldescription = $('#desAdd').val();

        animalData = {
            name: animalName,
            lifeSpan: animalSpecies,
            species: animalLifeSpan,
            imgUrl: animalImg.name,
            description: animaldescription
        }

        $.post("http://localhost:3000/animals", animalData, function(){
            alert("Animal Added")
        })
        resetAdd();
    })
})