const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList:[],
        }
    }, 
    methods: {
        getEmail(){
            for(let index=0; index <= 10; index++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ( (response) =>  {
            this.emailList.push(response.data.response);
            console.log(this.emailList)
        });       
    }},
    },
    created() {
        this.getEmail();
    },
},
).mount('#app')