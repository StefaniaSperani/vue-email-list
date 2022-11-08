/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const {createApp} = Vue;
// Creo l'app
const app = createApp({
    // inserisco i data
    data(){
        return {
            emailList: [],
        }
    },
    //creo i methods, dove inserisco le funzioni
    methods: {
        callApi(){
            axios.get('https:flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                this.emailList.push(res.data.response);
                
            })
            console.log(this.emailList);
        },
    },
    created(){
        for(let i = 0; i < 10; i++){
            this.callApi();
        }
    }
//monto tutto sul div #app
}).mount('#app')