// creating app object
const nasaApp = {};

// API key
nasaApp.key = 'CmoGbgUEgJjjmGuGvzJxBuTRbVm7NcHWyPxBlDOX';

// create a function that gets nasa data
nasaApp.getImage = function () {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${nasaApp.key}`,
        method: 'GET',
        dataType: 'json',
    // Get data from API, then append new data to the page
    }).then((data) => {
            const htmlTOAppend = `
            <img src="${data.url}" alt="${data.title}" class="fit-content">
        `
        // display image on the page
        $(".display-picture").append(htmlTOAppend).append(`<button class="read-more" id="info">learn more</button>`);
        // run nasaApp.learnMore function
        nasaApp.learnMore(data);
    })

}

// create function to get Birthday photo on user input
nasaApp.getDate = function (query) {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${nasaApp.key}&date=${query}`,
        method: "GET",
        dataType: "json",
        data: {
            date: query,
        },
     // Get data from API, then append new data to the page
    }).then((data) => {
        const html = `
            <img src="${data.url}" alt="${data.title}" class="fit-content"><h2>Happy Birthday!</h2><p>There are trillions of stars in our universe, but today the brightest one is you!</p>
        `;
        // empty the image container and append a new image based on User input
        $(".picture").empty().append(html).append(`<p class="learn-more-text">created at<a href="https://junocollege.com/"> Juno College<a/></p>`);
        // run nasaApp.learnMore function
        nasaApp.learnMore(data);
    });
};

nasaApp.submitButton = function (data){
    $('form').submit(function (e) {
        // prevent the form submit from refreshing the page
        e.preventDefault();
        //get the value of the user input on submit
        const date = $("#date").val();
        // call the getDate function 
        nasaApp.getDate(date);
    });
}


// create a function that displays information about the NASA image to the page
nasaApp.learnMore = function (data) {
    // create an event listener for a 'click' on the button
    $('#info').on('click', function () {
        // create a variable to append to the page
        const explanation = `<p class="learn-more-text">${data.explanation}</p>`
        $('#description').append(explanation).append(`<p class="learn-more-text">created at<a href="https://junocollege.com/"> Juno College<a/></p>`);
        // After the button has been clicked, disable it
        $('#info').attr('disabled', true)
    })
}

// Create an app initialization function
nasaApp.init = function () {
    // Create an event listener for a 'click' on the button
    $('#new-pic').on('click', function () {
        // hide the welcome message and 'getImage' button (with a class of .hide)
        $('.hide').hide();
        // run nasaApp.getImage function to get and display photo
        nasaApp.getImage();
    })
    nasaApp.submitButton();
}

// document ready
$(function () {
    nasaApp.init();
})

