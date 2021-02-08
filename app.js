new Vue({
    el:'#app',

    data:{
        test: 'test',
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

    },
})