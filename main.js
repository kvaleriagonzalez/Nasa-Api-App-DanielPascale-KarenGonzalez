// creating app object
const nasaApp = {};


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
            const htmlTOAppend = `
            <img src="${data.url}" class="fit-content">
        `
            $(".display-picture").append(htmlTOAppend).append(`<button class="read-more" id="info">learn more</button>`);
        nasaApp.learnMore(data);
    })
}

nasaApp.learnMore = function (data) {
    $('#info').on('click', function () {
        const explanation = `<p class="learn-more-text">${data.explanation}</p>`
        $('#description').append(explanation);
        $('#info').attr('disabled', true)
    })
}



nasaApp.init = function () {
   
    $('button').on('click', function () {
        $('.hide').hide();
        nasaApp.getImage();
        $('#display-none').hide();
    })
}

// document ready

$(function () {
    nasaApp.init();
})

// Add 'moreInfo' button under <img>
// Add event listener to moreInfo button-click to allow user to get information about the <img>

// POSSIBLE button disable after initial click OR date randomizer to access new photos
