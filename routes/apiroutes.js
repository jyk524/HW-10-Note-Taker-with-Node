const note = JSON.parse(data);

// when user goes to api/notes it will give note objects
app.get("api/notes", function (req, res) {
  res.json(note);
});
