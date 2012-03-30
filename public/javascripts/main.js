(function() {
  var draw;

  $(document).ready(function() {
    return draw();
  });

  draw = function() {
    var canvas, ctx;
    canvas = document.getElementById("exp");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgb(200,0,0)";
      return ctx.fillRect(10, 10, 55, 50);
    }
  };

}).call(this);
