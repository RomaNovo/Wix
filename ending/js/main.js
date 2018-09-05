class BackgroundLinks {
	constructor(parent) {
		this.parent = parent;
		this.color = parent.dataset.color;
		this.links = this.parent.querySelectorAll('a');

		this.links.forEach( (item)=> {
			item.addEventListener('click', ()=> {
				(this.parent.style.backgroundColor != this.color)  ? 
					this.parent.style.backgroundColor = this.color :
					this.parent.style.backgroundColor = 'transparent';	
			})
		})	
	}
}


document.addEventListener('DOMContentLoaded', () => {
	let box 	= document.querySelectorAll('.container'),
	 	allLink = document.querySelector('.animate-all');

	box.forEach( (item)=> new BackgroundLinks(item)); 	

	allLink.addEventListener('click', ()=> {
		let count = 0;
		box.forEach( (item)=> item.style.backgroundColor = '' );
			
		
		function change() {
			let item = box[count],
				color = item.dataset.color;

			item.style.backgroundColor = color;
			count++;
		}

		let promise = new Promise(function(resolve,reject) {
			/*change();*/
			setTimeout(change, 2000);	
			setTimeout(resolve, 4000);	
		})
		.then( ()=> setTimeout(change, 2000) )
		.then( ()=> change() );
			
				
		 
	/*function change() {
		let item = box[count],
		 	color = item.dataset.color;

		item.style.backgroundColor = color;

		let interval = setTimeout( change, 2000);
		(count == 2)? clearTimeout(interval) : false;
		count++;
	}	
	change();	*/	
	})
})
