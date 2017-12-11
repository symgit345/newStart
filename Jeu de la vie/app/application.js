function createGeneration(width, height) {
  var generation2 = new Array(height);
  for(var y = 0; y < height; y++) {
    generation2[y] = [];
    for(var x = 0; x < width; x++) {
      generation2[y][x] = Math.floor(Math.random() * 2);
    }
  }
  console.log('generation2' + generation2);
  return generation2;
}


function draw(context2d, generation) {
  var height = generation.length; // longueur du tableau
  var width = generation[0].length; 

  context2d.fillStyle = 'pink'; // créer un tableau global vert
  context2d.fillRect(0, 0, 100, 100); // dimensions du tableau créé

  context2d.fillStyle = 'white'; // on va afficher en blanc
  for(var y = 0; y < height; y++) { // Pour chaque longueur (100 fois)
    for(var x = 0; x < width; x++) { // Pour chaque largeur (100 fois)
      if(generation[x][y] === 1) { // Si c'est un élément à valeur 1
        context2d.fillRect(x, y, 1, 1);
      }
      
    }
  }

}


function nextCellState(neighborhood) {
  var result = neighborhood.reduce(function(a, b) {
    return a + b
  }, 0);

  if(result === 3)
    return 1;
  else if(result === 4)
    return neighborhood[4];
  else
    return 0;
}

function extractNeighborhood(generation, x, y) {
  return [
    generation[y-1][x-1], generation[y-1][x], generation[y-1][x+1],
    generation[y][x-1], generation[y][x], generation[y][x+1],
    generation[y+1][x-1], generation[y+1][x], generation[y+1][x+1] ];
}




(function() {
  var generation = createGeneration(100, 100); // le tableau à 2 dimensions de 0 et 1
  var c = document.getElementById('canvas'); // récupérer le dom canvas
  var ctx = c.getContext('2d'); // ca devient le contexte

  draw(ctx, generation); // on lance la fonction avec le contexte et le tableau
})()