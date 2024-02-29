const { exec } = require('child_process');

function execute(command) {
    const isWindows = process.platform === 'win32';

    if (isWindows) {
        command = command.replace('ls -la', 'dir'); // Replace 'ls -la' with 'dir' on Windows
    }

    exec(command, (error, stdout) => {
        if (error) {
            console.log(`Error: ${error}`);
            return;
        }

        console.log(`Command output:\n${stdout}`);
    });
}

const customCommand = 'ls -la';

execute(customCommand);
execute('echo "Hello, Node.js!"');
