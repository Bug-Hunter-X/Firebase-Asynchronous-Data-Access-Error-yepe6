# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase applications: attempting to access data before it has finished loading from an asynchronous operation.

The `firebaseBug.js` file contains code that attempts to access data from Firestore immediately after initiating a query, resulting in an error.  The `firebaseBugSolution.js` file shows the corrected code, employing Promises or async/await to handle asynchronous data loading correctly.

## How to Reproduce the Bug
1.  Clone this repository.
2.  Set up a Firebase project and configure the necessary credentials.
3.  Run `firebaseBug.js`.  Observe the error message.
4.  Run `firebaseBugSolution.js`.  Observe the successful data retrieval.

## Solution
Always use Promises or async/await with Firebase asynchronous operations to ensure the data is fully loaded before attempting to access it.