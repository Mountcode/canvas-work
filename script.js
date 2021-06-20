function draw(){
  let canvas = document.getElementById('canvas-img');

  if (canvas.getContext){
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.beginPath();
    ctx.moveTo(75,75);
    ctx.lineTo(200,140);
    ctx.lineTo(200,10);
    ctx.fill();

    // let i = 0;
    // let drowAnim = setInterval(function(){
    //   ctx.fillStyle = "rgb(200,0,0)";
    //   ctx.fillRect (0, 0, 88, i);
    //   i++
    //   if(i > 150){
    //     clearInterval(drowAnim);
    //   }
    // },10)

  }
}



document.onload = draw();