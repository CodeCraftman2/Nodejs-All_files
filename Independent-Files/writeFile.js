const fs = require('fs');

function writeToFile(filePath, content) {
    // Use the writeFileSync function from the fs module for synchronous writing
    try {
        fs.writeFileSync(filePath, content);
        console.log(`Content successfully written to ${filePath}`);
    } catch (err) {
        // Handle any errors that occurred during the write operation
        console.error(`Error writing to file ${filePath}: ${err}`);
    }
}
// Call the function
writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...
