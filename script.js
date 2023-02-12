

$(document).ready(function () {
    $("#summernote").summernote({
        height: "70vh",
        focus: true,
    });
    $('#summernote').summernote('code',

        '<h1 style="text-align: center; "><u>भर्साय पसच भसइ ग्रुप</u></h1><p style="text-align: center; "><br></p><p style="text-align: center; "><br></p>'
    );
});

function handleSave() {
    // Get the specific web view element
    const webview = document.querySelector('.note-editable');

    // Check that the web view element is valid
    if (!webview) {
        console.error('Could not find web view element');
        return;
    }

    // Create a new Canvas element
    const canvas = document.createElement('canvas');

    // Set the dimensions of the Canvas element to match the web view element
    canvas.width = webview.clientWidth;
    canvas.height = webview.clientHeight;

    // Use html2canvas to convert the web view into an image
    html2canvas(webview).then(function (image) {
        // Get the 2D rendering context of the Canvas element
        const context = canvas.getContext('2d');

        // Draw the image onto the Canvas element
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Get the Base64 encoded image from the Canvas element
        const dataUrl = canvas.toDataURL();

        // Create a new Image object and set its src attribute to the Base64 encoded image
        const downloadImage = new Image();
        downloadImage.src = dataUrl;

        // Once the Image object has loaded, you can use it as you would any other image
        downloadImage.onload = function () {
            // Create a new anchor tag
            const link = document.createElement('a');

            // Set the download attribute to the desired file name
            link.download = 'my-image.png';

            // Set the href attribute to the Base64 encoded image
            link.href = dataUrl;

            // Click the link to download the image
            link.click();
        };
    });

}
