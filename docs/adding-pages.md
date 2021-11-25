# How to Add Pages to Our Web App
1. Add an html file to the `frontend` directory
2. Open app.js
3. Add the following code snippet in app.js
```
app.get('/<#url path to page#>', function (req, res) {
    res.sendFile(frontendPath + '<#file name#>')
})
```
