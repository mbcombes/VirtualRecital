// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('button').click(function () {
        var search = $("#Search").val();
        alert(search);
        var get_request=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${search}%20Voice%20Recital&safeSearch=strict&type=video&key=AIzaSyCQWMxtkkDf5UzozMScXlBiS6jNITOqeqE`;
        console.log(get_request);
        $.get(get_request, search_results, "json");
        console.log("test");
    })
    
    $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=Voice%20Recital&safeSearch=strict&type=video&key=AIzaSyCQWMxtkkDf5UzozMScXlBiS6jNITOqeqE", voice, "json");
    $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=Violin%20Recital&safeSearch=strict&type=video&key=AIzaSyCQWMxtkkDf5UzozMScXlBiS6jNITOqeqE", string, "json");
    $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=Horn%20Recital&safeSearch=strict&type=video&key=AIzaSyCQWMxtkkDf5UzozMScXlBiS6jNITOqeqE", wind, "json");


})
function search_results(response) {
    console.log("test2")
    var html = ""
    for(var i=0; i<1; i++){
        html+=`<iframe class="ml-5" width="640" height="380" src="https://www.youtube.com/embed/${response.items[i].id.videoId}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    $('#body').html(html);
}

function voice(response) {
    var html = ""
    for(item in response.items){
        html += `<iframe class="ml-5" width="300" height="168" src="https://www.youtube.com/embed/${response.items[item].id.videoId}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    $('#vocal').html(html);
}

function string(response) {
    var html = ""
    for(item in response.items){
        html += `<iframe class="ml-5" width="300" height="168" src="https://www.youtube.com/embed/${response.items[item].id.videoId}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    $('#string').html(html);
}
function wind(response) {
    var html = ""
    for(item in response.items){
        html += `<iframe class="ml-5" width="300" height="168" src="https://www.youtube.com/embed/${response.items[item].id.videoId}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    $('#wind').html(html);
}