let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let textvalue='';
for (item of buttons){
	item.addEventListener('click',(e)=>{
		buttontext=e.target.innerText;
		//console.log('button text is',buttontext)
		if(buttontext=='X'){
			buttontext= '*';
			textvalue +=buttontext;
			screen.value=textvalue;
		}

		else if(buttontext=='C'){
			textvalue='';
				screen.value=textvalue;
		}
		else if(buttontext=='='){
			screen.value=eval(textvalue); 
		}
		else{
			textvalue+=buttontext;
			screen.value=textvalue;
		}
	})
}