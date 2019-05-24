// Friends (DATA)
// =============================================================
var person = [
    {
      "name": "Obi Wan Kenobi",
      "photo": "",
      "scores": [
        5, 4, 1, 1, 5, 8, 9, 10, 3, 7
      ]
    },
    {
      "name": "Darth Maul",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores": [
        5, 4, 1, 1, 5, 8, 9, 10, 3, 7
      ]
    },
    {
      "name": "Yoda",
      "photo": "",
      "scores": [
        5, 4, 1, 1, 5, 8, 9, 10, 3, 7
      ]
    }
  ];
  
  // Displays a single character, or returns false
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });