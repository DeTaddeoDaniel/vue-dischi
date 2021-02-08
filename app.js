new Vue({
    el:'#app',

    data:{
        test: 'test',
        selected: "All",
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

                // ordinamento per valore
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
        filtrer: function(){

            this.dischiMusicali.forEach( disco =>{
                
                // no search
                if( this.selected != 'All' ){
                    if(this.selected == disco.genre){
                        disco.visibility = true;
                    } else {
                        disco.visibility = false;
                    }
                
                // no search
                } else {
                    disco.visibility = true;
                }
            })
        }
    },
})