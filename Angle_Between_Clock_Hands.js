let date = 'Wed Sep 14 2022 10:00:55 GMT+0000 (Coordinated Universal Time)'

function handAngle(date) {

  let time = new Date(date),
    hours = time.getUTCHours(),
    minutes = time.getUTCMinutes(),
    grad;

  if (hours === 12) hours = 0;

  grad = Math.abs((hours +(minutes / 60)) * 30 - minutes*6);

  if (grad > 180) grad = 360 - grad;

  return grad * Math.PI / 180;

}

console.log(handAngle(date));
