// Selecting the container element
var el = document.querySelector('.my-text');

// All the possible options (these are the default values)
// Remember that every option (except individualDelays) can be defined as single value or array
var options = {
    size: 200,         // Font size, defined by the height of the letters (pixels)
    weight: 6,         // Font weight (pixels)
    rounded: false,    // Rounded letter endings
    color: '#5F6062',  // Font color
    duration: 5,       // Duration of the animation of each letter (seconds)
    delay: [0, 0.05],  // Delay animation among letters (seconds)
    fade: 0.5,         // Fade effect duration (seconds)
    easing: d3_ease.easeCubicInOut.ease,   // Easing function
    individualDelays: true,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
};

// Initializing the text (Letters parameters: container-element, options)
var myText = new Letters(el, options);

myText.show();

// Selecting the container element
var el = document.querySelector('.my-text2');

// All the possible options (these are the default values)
// Remember that every option (except individualDelays) can be defined as single value or array
var options = {
    size: 40,         // Font size, defined by the height of the letters (pixels)
    weight: 2,         // Font weight (pixels)
    rounded: false,    // Rounded letter endings
    color: '#5F6062',  // Font color
    duration: 2,       // Duration of the animation of each letter (seconds)
    delay: [0, 0.05],  // Delay animation among letters (seconds)
    fade: 0.5,         // Fade effect duration (seconds)
    easing: d3_ease.easeCubicInOut.ease,   // Easing function
    individualDelays: true,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
};

// Initializing the text (Letters parameters: container-element, options)
var myText2 = new Letters(el, options);

myText2.show();