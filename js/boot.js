// Vikene :P JAVAJI codes :P 
// vigneash sundar @ live.com

function button_click()
{
	var canvas = document.getElementById("mydrawable");
	if(canvas.getContext)
	{
		var image = new Image();
		image.onload = function(){
			var context = canvas.getContext("2d");
			context.drawImage(image,0,0);
		

	
	
		}
		image.src="mypic.jpg";
	}

}
function gblur()
{
	var conv_mat=[1,2,1,2,4,2,1,2,1];
		var divisor =16
			convolution_matrix(conv_mat,divisor,0);

}
function edge()
{
	var mat =  [ 1,  1,  1, 1, -7,  1, 1,  1,  1];
			var divisor =  mat.reduce(function(a,b){return a+b || 1;});
			
			convolution_matrix(mat,divisor,0);
}

function sharpen()
{
	var mat = [ 0, -2,  0,-2, 11, -2, 0, -2,  0];
			var divisor =  mat.reduce(function(a,b){return a+b || 1;});
			convolution_matrix(mat,divisor,0);
}

function embross()
{
	var mat =   [ -1,  0,  -1, 0, 4,  0, -1,  0, -1];
			var offset = 127;
			//var divisor =  mat.reduce(function(a,b){return a+b || 1;});
			convolution_matrix(mat,1,offset);

}

function embross2()
{
		var mat=[ 1,  1, -1, 1,  3, -1, 1, -1, -1];
			var divisor =  mat.reduce(function(a,b){return a+b || 1;});
			convolution_matrix(mat,divisor,0);
}

function edge2()
{
		var mat =[-5,  0,  0, 0,  0,  0, 0,  0,  5];
			var divisor =  mat.reduce(function(a,b){return a+b || 1;});
			convolution_matrix(mat,divisor,0);
}


function redfilter(){
	var canvas = document.getElementById("mydrawable");
	if(canvas.getContext)
	{
		var display = canvas.getContext("2d");
		var image = new Image();
		image.onload = function()
		{
			
			display.drawImage(image,0,0);
			var dataobj = display.getImageData(0,0,image.width,image.height);
			for(var i=0;i<dataobj.data.length;i+=4)
			{
				dataobj.data[i+1]=0;
				dataobj.data[i+2]=0;
			}
			display.putImageData(dataobj,0,0);
		};
		image.src = "mypic.jpg";
	}
}

function greenfilter(){
	var canvas = document.getElementById("mydrawable");
	if(canvas.getContext)
	{
		var display = canvas.getContext("2d");
		var image = new Image();
		image.onload = function()
		{
			
			display.drawImage(image,0,0);
			var dataobj = display.getImageData(0,0,image.width,image.height);
			for(var i=0;i<dataobj.data.length;i+=4)
			{
				dataobj.data[i]=0;
				dataobj.data[i+2]=0;
			}
			display.putImageData(dataobj,0,0);

		};
		image.src = "mypic.jpg";
	}
}
function bluefilter(){
	var canvas = document.getElementById("mydrawable");
	if(canvas.getContext)
	{
		var display = canvas.getContext("2d");
		var image = new Image();
		image.onload = function()
		{
			
			display.drawImage(image,0,0);
			var dataobj = display.getImageData(0,0,image.width,image.height);
			for(var i=0;i<dataobj.data.length;i+=4)
			{
				dataobj.data[i]=0;
				dataobj.data[i+1]=0;
			}
			display.putImageData(dataobj,0,0);

		};
		image.src = "mypic.jpg";
	}
}

function imageflip(){
	var canvas = document.getElementById("mydrawable");
	if(canvas.getContext)
	{
		var display = canvas.getContext("2d");
		var image = new Image();
		image.onload = function(){
			display.drawImage(image,0,0);
			var imageData = display.getImageData(0,0,image.width,image.height);
			var oldimagedata = display.getImageData(0,0,image.width,image.height);
			for(var i=0;i<imageData.data.length;i+=4)
			{
				imageData.data[imageData.data.length - i] = oldimagedata.data[i];
				imageData.data[imageData.data.length - i+1] = oldimagedata.data[i+1];
				imageData.data[imageData.data.length - i+2] = oldimagedata.data[i+2];
				imageData.data[imageData.data.length - i+3] = oldimagedata.data[i+3];

			}
			display.putImageData(imageData,0,0);

		};
		image.src = "mypic.jpg";


	}
}
function Grayscale(){


		var canvas = document.getElementById("mydrawable");
		if(canvas.getContext){
			var object = canvas.getContext("2d");
			var image = new Image();
			image.onload= function(){
				object.drawImage(image,0,0);
				var dataobj = object.getImageData(0,0,image.width,image.height);
				var thers = 50;
				for(var i =0;i<dataobj.data.length;i+=4)
				{
					
					
					dataobj.data[i+1]=dataobj.data[i];
					dataobj.data[i+2]=dataobj.data[i];
					

					
					

				}
				object.putImageData(dataobj,0,0);

			};
			image.src = "mypic.jpg";
		}
	}
function snoweffect(){
		var canvas = document.getElementById("mydrawable");
		if(canvas.getContext){
			var object = canvas.getContext("2d");
			var image = new Image();
			image.onload= function(){
				object.drawImage(image,0,0);
				var dataobj = object.getImageData(0,0,image.width,image.height);
				var thers = 50;
				for(var i =0;i<dataobj.data.length;i+=4)
				{
					if(dataobj.data[i]>thers &&dataobj.data[i+1]>thers && dataobj.data[i+2]>thers)
					{
						dataobj.data[i] = 244;
						dataobj.data[i+1] = 244;
						dataobj.data[i+2] = 244;
						
					}
				}
				object.putImageData(dataobj,0,0);

			};
			image.src = "mypic.jpg";
		}
	}
	function invert()
	{
		var canvas = document.getElementById("mydrawable");
		if(canvas.getContext)
		{
			var dat = canvas.getContext("2d");
			var image = new Image();
			image.onload = function(){
				dat.drawImage(image,0,0);

				var imageData = dat.getImageData(0,0,image.width,image.height);
				for(var i=0;i<imageData.data.length;i+=4)
				{
					imageData.data[i] = 255 - imageData.data[i];
					imageData.data[i+1] = 255 - imageData.data[i+1];
					imageData.data[i+2] = 255 - imageData.data[i+2];
					imageData.data[i+3] = 255 ;
				}
				dat.putImageData(imageData,0,0);
			}
			image.src="mypic.jpg";
		}
	}

function convolution_matrix(conv_mat,divisor,offset)
{

		
		var canvas = document.getElementById("mydrawable");
		var object = canvas.getContext("2d");
		var image = new Image();
		image.onload = function(){
			object.drawImage(image,0,0);
			var oldimageData = object.getImageData(0,0,image.width,image.height);
			var oldimagepx = oldimageData.data;
			  var newdata = object.createImageData(oldimageData);
			var newimagepx= newdata.data;
			var len = newimagepx.length;
			var res = 0;
			var width = image.width;
			
			for(var i=0;i<len;i++)
			{
				//preventing alpha value change 
				if((i+1)%4 === 0)
				{
					newimagepx[i] = oldimagepx[i];
					continue;
				}
				var these = [
      oldimagepx[i - width * 4 - 4] || oldimagepx[i],
      oldimagepx[i - width * 4]     || oldimagepx[i],
      oldimagepx[i - width * 4 + 4] || oldimagepx[i],
      oldimagepx[i - 4]         || oldimagepx[i],
      oldimagepx[i],
      oldimagepx[i + 4]         || oldimagepx[i],
      oldimagepx[i + width * 4 - 4] || oldimagepx[i],
      oldimagepx[i + width * 4]     || oldimagepx[i],
      oldimagepx[i + width * 4 + 4] || oldimagepx[i]
    ];
    for (var j = 0; j < 9; j++) {
      res += these[j] * conv_mat[j];
    }

    res /= divisor;
    if(offset)
    {
    	res += offset;
    }
    newimagepx[i] = res;
   	//alert("am running");
			}
			object.putImageData(newdata,0,0);
				

				
			};

		
		image.src = "mypic.jpg";
}

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
  $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });