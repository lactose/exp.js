# #### #
# MAIN 
# 

$(document).ready ->
  draw()

draw = ->
  canvas = document.getElementById "exp"
  if canvas.getContext
    ctx = canvas.getContext "2d"
    
    ctx.fillStyle = "rgb(200,0,0)"
    ctx.fillRect 10, 10, 55, 50
  
