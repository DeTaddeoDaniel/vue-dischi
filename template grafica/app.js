new Vue({
    el:'#app',

    data:{
        test: 'test',
        selected: "All",
        textSearch: "",
        selectedSearch: "Author",
        dischiMusicali :undefined,
    },

    beforeCreate() {
        
        console.log('Call API')

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            
            .then(dataAPI =>{
                // console.log(dataAPI.data.response);
                this.dischiMusicali = dataAPI.data.response;
                
                // add to visibility item variable
                this.dischiMusicali.forEach( (disco, index) => {
                    disco = { ...disco, visibility : true};
                    this.dischiMusicali[index] = disco
                })

                // ordinamento per anno d'uscita
                this.dischiMusicali = this.dischiMusicali.sort(function (a, b) {
                    return a.year - b.year;
                });

                console.log(this.dischiMusicali)
                
            })
            .catch(error =>{
                console.log('Error in the API call');
                console.log(error);
            })
    },

    methods: {

        // cancella testo input
        resetInputSearch: function(){
            this.textSearch = '';
            this.filtrer();
        },

        // filtra dischi per genere musicali
        filtrer: function(){

            this.dischiMusicali.forEach( disco =>{
                
                //search generi musicali
                if( this.selected != 'All' ){
                    
                    // controlla il genere dell'album
                    if(this.selected == disco.genre){
                        disco.visibility = true;
                    } else {
                        disco.visibility = false;
                    }

                } else {
                    disco.visibility = true;
                }

                // search generi musicali
                let search = this.textSearch.toLowerCase();
                let typeSearch = this.selectedSearch.toLowerCase();
                let title = disco.title.toLowerCase();
                let autore= disco.author.toLowerCase();

                // entra se testo diverso da stringa vuota e disco visibile dopo filtraggio genere
                if( search != "" && disco.visibility){
                    
                    // controlla autore
                    if(typeSearch == 'author'){
                        
                        if(autore.includes(search)){
                            disco.visibility = true;
                        } else {
                            disco.visibility = false;
                        }

                    // controlla titolo album
                    } else if(typeSearch == 'title'){
                        
                        if(title.includes(search)){
                            disco.visibility = true;
                        } else {
                            disco.visibility = false;
                        }

                    }
                }
            })
        },


    },
})