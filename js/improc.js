/* ImProc javascript library to perform real time image processing in Web browser
    or any HTML 5 enables device. 
    This  is the main file which is for image processing.
    
    
    
    
    */ 

var Improc ={

    // yet to code 

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