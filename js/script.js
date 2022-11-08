/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const { createApp } = Vue;
// Creo l'app
const app = createApp({
    // inserisco i data
    data() {
        return {
            //setto la mia lista delle email vuota
            emailList: [],
        }
    },
    //creo i methods, dove inserisco le funzioni
    methods: {
        //creo la funzione per chiamare lapi con la lista delle mail
        callApi() {
            //creo un ciclo che mi stamperà 10 email
            for (let i = 0; i < 10; i++) {
                //tramite axios prendo l'api boolean con le random mail
                axios.get('https:flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    //e una volta ciclate le pusho al suo intenro
                    this.emailList.push(res.data.response);
                })
            }
            //avendo aggiunt un button per generarne di nuove, ripulisco
            //in modo da avere sempre 10 email
            this.emailList = [];
        }
    },
    //monto la funzione anche nella created, così appena 
    //apro la pagina la lista esce subito
    created() {
        this.callApi();
    }
    //monto tutto sul div #app
}).mount('#app')