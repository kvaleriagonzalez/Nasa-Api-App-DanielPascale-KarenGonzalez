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
            $(".display-picture").append(htmlTOAppend).append(`<button id="info">learn more</button>`);
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

// nasaApp.welcomeText = function() {
//     $('#container').append(`
//         <h2 id="animatrix" class="hide">WELCOME TO THE GALAXY</h2>
//         <p class="hide">You will be able to go the space in just a few seconds.</p> 
//         <p class="hide">First click the button under the logo and a picture from the Nasa website will be display in the right side of the window.</p>
//         <p class="hide">If you like can find more information about this image once you click the button located under the picture.</p>`);
//         $('#animatrix').addClass('animate-typing');
// }

nasaApp.init = function () {
    nasaApp.welcomeText();
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
