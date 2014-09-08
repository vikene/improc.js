function convolution_matrix(image,matrix,divisor,offset)
{

	alert("hey running");
	var canvas = document.getElementById("mydrawable");
	var context= canvas.getContext("2d");
	var oldData = context.getImageData(0,0,image.width,image.height);
	var olddataPx = oldData.data;
	var newImageData = context.createImageData(oldData);
	var newImagePx = newImageData.data;
	var length = newImagePx.length;
	var width = image.width;
	var res=  0;

	for(i=0;i<length ; i++)
	{
		if((i+1)%4 === 0)
		{
			newImagePx[i] = olddataPx[i];
			continue();
		}

		var values = [
			olddataPx[i - width *4 -4] || olddataPx[i],
			olddataPx[i- width*4] || olddataPx[i],
			olddataPx[i- width*4 + 4] || olddataPx[i],
			olddataPx[i- 4] || olddataPx[i],
			olddataPx[i],
			olddataPx[i+4] || olddataPx[i],
			olddataPx[i+  width*4 - 4] || olddataPx[i],
			olddataPx[i+ width*4 ] || olddataPx[i],
			olddataPx[i + width*4 + 4] || olddataPx[i]

		];
		for(j =  0 , j<9,j++){
			res += values[j] * matrix[j];
		}

		res /= divisor;
		if(offset){
			res += offset;
		}
		newImagePx[i] = res;

	}
	context.putImageData(newImageData,0,0);
}