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
                console.log(dataAPI.data.response);
                this.dischiMusicali = dataAPI.data.response;

                // ordinamento per valore
                this.dischiMusicali = this.dischiMusicali.sort(function (a, b) {
                    return a.year - b.year;
                });
            })
            .catch(error =>{
                console.log('Error in the API call');
                console.log(error);
            })
    },

    methods: {
        
    },
})