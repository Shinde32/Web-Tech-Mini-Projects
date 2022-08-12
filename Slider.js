function sliderColor()
          {
            var red = parseInt(document.getElementById('red').value);
            var green =parseInt(document.getElementById('green').value);
            var blue =parseInt(document.getElementById('blue').value);

            var redval = (red<16) ? "0" + red.toString(16) : red.toString(16);
            var greenval = (green<16) ? "0" + green.toString(16) : green.toString(16);
            var blueval = (blue<16) ? "0" + blue.toString(16) : blue.toString(16);

            var colorbox = "#" + redval + greenval + blueval;

            document.getElementById('codedisplay').innerHTML = "RGB ColorCode : " + colorbox;
            var box = document.getElementById('box').style.backgroundColor= colorbox;

          }