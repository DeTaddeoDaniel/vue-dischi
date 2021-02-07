new Vue({
    el:'#app',

    data:{
        test: 'test'
    },

    beforeCreate() {
        this.callAPI();
    },
    
    methods: {
        callAPI: function(){
            console.log('Call API')
        }
    },
})