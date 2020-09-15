// creating app object
const nasaApp= {};

nasaApp.key = 'CmoGbgUEgJjjmGuGvzJxBuTRbVm7NcHWyPxBlDOX';
// create a function that gets nasa data
nasaApp.getImage = function (query) {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${nasaApp.key}`,
        method: 'GET',
        dataType: 'json',
        data: {
            q: query,
        }
    }).then((data) => {
      console.log(data)
            const htmlTOAppend = `
            <img src="${data.url}">
    
        `
            $(".display-picture").append(htmlTOAppend);
    })
}

nasaApp.init = function () {
   

    $('button').on('click', function () {
        nasaApp.getImage()
        
    })
}

// document ready

$(function () {
    nasaApp.init();
})