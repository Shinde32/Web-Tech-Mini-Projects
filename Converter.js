function converterDec()
			{
				var dec = parseInt(document.getElementById("decimal").value);
				var bin = dec.toString(2);
				var hex = dec.toString(16);
				document.getElementById("binary").value = bin;
				document.getElementById("hexadec").value = hex;
			}
function converterBin()
			{
				var dbin = document.getElementById("binary").value;
				var bin = parseInt(dbin,2);
				var dec = bin.toString(10);
				var hex = bin.toString(16);
				document.getElementById("decimal").value = dec;
				document.getElementById("hexadec").value = hex;
			}
function converterHex()
			{
				var dhex = document.getElementById("hexadec").value;
				var hex = parseInt(dhex,16);
				var dec = hex.toString(10);
				var bin = hex.toString(2);
				document.getElementById("decimal").value = dec;
				document.getElementById("binary").value = bin;
			}
