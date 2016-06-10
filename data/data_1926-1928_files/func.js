function cache_select (id) {
		 if (document.layers) 
		    document[id].visibility = 'hide';
		 else if (document.all)
		    document.all[id].style.visibility = 'hidden';
		  else if (document.getElementById)
		    document.getElementById(id).style.visibility = 'hidden';
		}
		function affiche_select (id) {
		 if (document.layers)
		    document[id].visibility = 'show';
		  else if (document.all)
		    document.all[id].style.visibility = 'visible';
		  else if (document.getElementById)
		    document.getElementById(id).style.visibility = 'visible';
		} 