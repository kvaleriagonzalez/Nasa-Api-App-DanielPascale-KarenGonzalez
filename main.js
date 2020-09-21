// creating app object
const nasaApp = {};

// API key
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
    // Get data from API, then append new data to the page
    }).then((data) => {
            const htmlTOAppend = `
            <img src="${data.url}" alt="${data.title}" class="fit-content">
        `
        // display image on the page
        $(".display-picture").append(htmlTOAppend).append(`<button class="read-more" id="info">learn more</button>`);
        // run nasaApp.learnMore function
        nasaApp.learnMore(data);
     console.log (data)
    })
    nasaApp.submitButton(data);

}




nasaApp.submitButton = function (data){
    //get the value of the user input 
    $('form').submit(function () {
    //create variable to store value
    const dateInput = $(this).val();
    const dataApi = "${data.date}";
    
    if (date === dataAPI) {
        const html =`
            <img src="${data.url}" alt="${data.title}" class="fit-content">
        `
        $(".picture").append(html)
        
    }

    else {
        //do nothing
    }

    //create variable to get data 

    //display picture after obtaining value and data 
    });


// create a function that displays information about the NASA image to the page
nasaApp.learnMore = function (data) {
    // create an event listener for a 'click' on the button
    $('#info').on('click', function () {
        // create a variable to append to the page
        const explanation = `<p class="learn-more-text">${data.explanation}</p>`
        $('#description').append(explanation);
        // After the button has been clicked, disable it
        $('#info').attr('disabled', true)
    })
}

// Create an app initialization function
nasaApp.init = function () {
    // Create an event listener for a 'click' on the button
    $('button').on('click', function () {
        // hide the welcome message and 'getImage' button (with a class of .hide)
        $('.hide').hide();
        // run nasaApp.getImage function to get and display photo
        nasaApp.getImage();
    })
}

// document ready
$(function () {
    nasaApp.init();

})
}
