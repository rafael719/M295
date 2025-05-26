# Node.js Basics - Block 1

This directory contains a series of Node.js exercises that demonstrate fundamental concepts in Node.js programming. Each file represents a different exercise, arranged in order of increasing complexity.

## Exercise Files

### 1. hello-world.js
The classic "Hello World" program. Prints "HELLO WORLD" to the console.
- Uses `console.log()`
- Simplest possible Node.js program

### 2. baby-steps.js
A program that sums command-line arguments.
- Accesses command-line arguments via `process.argv`
- Converts strings to numbers and performs addition
- Demonstrates handling program inputs

### 3. my-first-io.js
Synchronous file reading example.
- Uses `fs.readFileSync()` to read a file
- Counts the number of newlines in the file
- Introduces the File System (fs) module

### 4. my-first-async-io.js
Asynchronous version of the previous exercise.
- Uses `fs.readFile()` for non-blocking file reading
- Demonstrates callback functions
- Shows the Node.js asynchronous programming model

### 5. filtered-ls.js
Directory filtering program.
- Uses `fs.readdir()` to list directory contents
- Filters files by extension
- Introduces the Path module for handling file extensions

### 6. make-it-modular.js & mymodule.js
Modular programming example.
- Splits functionality into separate modules
- Demonstrates module exports and requires
- Shows proper error handling in callbacks
- Implements the same directory filtering as before but in a reusable way

### 7. http-collect.js
HTTP client that collects complete responses.
- Uses the HTTP module to make requests
- Collects data across multiple events
- Demonstrates streaming data handling
- Uses the 'bl' package for Buffer handling

### 8. juggling-async.js
Advanced asynchronous programming example.
- Makes multiple HTTP requests simultaneously
- Manages multiple asynchronous operations
- Maintains order of responses
- Shows callback coordination

### 9. time-server.js
TCP time server implementation.
- Creates a TCP server using the Net module
- Formats dates according to specifications
- Handles network connections
- Demonstrates server-side network programming

## Running the Programs

Each program can be verified using the learnyounode verifier:
```powershell
learnyounode verify [filename]
```

For example:
```powershell
learnyounode verify hello-world.js
```

Most programs take command-line arguments. Check the individual file comments for specific usage instructions.
