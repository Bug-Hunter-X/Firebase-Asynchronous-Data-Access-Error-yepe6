The solution is to properly handle the asynchronous nature of Firebase operations.  Use `.then()` for Promises or `async/await` to ensure the data is available before accessing it.  Here's an example using `async/await`:

```javascript
async function getData() {
  try {
    const querySnapshot = await db.collection('yourCollection').get();
    querySnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error getting documents:', error);
  }
}

getData();
```

This code ensures that the `getData()` function waits for the query to complete before processing the results. The `try...catch` block handles potential errors during the asynchronous operation.