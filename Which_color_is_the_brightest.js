let colors = ['#000007', '#234567', '#00FF00', '#FFFF00', '#FF2200']

function brightest(colors) {

  let R, G, B;
  let res = [];
  let max = 0;

  for (let i = 0; i < colors.length; i++) {
    R = colors[i].slice(1,3);
    G = colors[i].slice(3,5);
    B = colors[i].slice(5,7);
    res.push([R, G, B].sort((a,b) => parseInt(b, 16) - parseInt(a, 16)));
  }

  for (let i = 0; i < res.length-1; i++) {
    if (res[max][0] < res[i+1][0]) max = i+1;
  }

  return colors[max];

}

console.log(brightest(colors));
