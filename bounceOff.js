function bounceOff(obje1,obje2) {
    if (obje1.x - obje2.x < obje1.width/2 + obje2.width/2 
      && obje2.x - obje1.x < obje1.width/2 + obje2.width/2 ) {
      obje1.velocityX = obje1.velocityX * (-1) 
     obje2.velocityX = obje2.velocityX * (-1)
      }
      if (obje1.y - obje2.y < obje1.height/2 + obje2.height/2 
        && obje2.y - obje1.y < obje1.height/2 + obje2.height/2 ) {
        obje1.velocityY = obje1.velocityY * (-1) 
       obje2.velocityY = obje2.velocityY * (-1)
        }
     
  } 