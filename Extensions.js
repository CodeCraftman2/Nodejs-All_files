const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Extract the file extension using path module
    const actualExtension = path.extname(filePath).toLowerCase();

    // Check if the actual extension matches the expected extension
    if (actualExtension === expectedExtension.toLowerCase()) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.jpg', '.png');

