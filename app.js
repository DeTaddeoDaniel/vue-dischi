new Vue({
    el:'#app',

    data:{
        test: 'test',
        dischiMusicali :undefined
    },

    beforeCreate() {
        
        console.log('Call API')

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(dataAPI =>{
                console.log(dataAPI.data.response);
                this.dischiMusicali = dataAPI.data.response;

            })
        
    },

    methods: {
        
    },
})