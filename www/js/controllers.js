/*
		CAL AFEGIR EL NOM DE LES VISTES DECLARADES A app.js
*/

$JSView.controller = {
	
	/* view  menus */
	viewMenuA: function(e){
		$JSView.dataView({'title': 'Welcome'},e)
	},
	viewMenuB: function(e){
        	$JSView.dataView({'title': 'Templates'},e)
    	},
    	viewMenuC: function(e){
    		$JSView.dataView({'title': 'Examples initLoadMore'},e)
    	},
    	viewMenuD: function(e){
    		$JSView.dataView({'title': 'Examples initReload'},e)
    	},	
	
	/* view pàgines */
    	viewA: function(e){
		$JSView.dataView({},e)
	},
    	viewB: function(e){
		$JSView.dataView({},e)	
	},
    	viewC: function(e){
		$JSView.dataView({},e)
	},
    	viewD: function(e){
		$JSView.dataView({},e)
	},
    	viewE: function(e){
		$JSView.dataView({},e)
	},
    	viewF: function(e){
		$JSView.dataView({},e)
	},
    	viewG: function(e){
		$JSView.dataView({},e)
	},
	
	
    	modalA: function(e){
		$JSView.dataView({},e)	
	}
	
	
}
