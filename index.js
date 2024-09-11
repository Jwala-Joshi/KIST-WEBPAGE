var i = 0; // Start Point for slideshow
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/slider/5115087ad4f97866b35905241573274c6c39ad2a1704185507.jpg";
images[1] = "https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/slider/fa42fea71f9375af23ee1de960fda855cbe21c221686707885.jpg";
images[2] = "https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/slider/76acab12eb54e3aa471a240475b8aa40f1ad67f51686708122.jpg";
images[3] = "https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/slider/1c6fc3cae7d6ac373edd0d72b3124ad33c9ed9731719381729.jpg";

// Change Image
function changeImg() {
    document.getElementById('slide').src = images[i];
    
    // Increment index and reset if necessary
    i = (i + 1) % images.length;
}

// Change Slide
function changeSlide(e) {
    i = (i + e + images.length) % images.length;
    changeImg();
}

// Set up slideshow
window.onload = function() {
    changeImg(); // Show first image
    setInterval(changeImg, time); // Change image every 'time' milliseconds
}
