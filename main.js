const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas:[
            {nombre:'naranja',cantidad:4},
            {nombre:'pera',cantidad:1},
            {nombre:'aguaymanto',cantidad:0}
        ],
        nuevafruta: '',
        total:0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevafruta,cantidad:1
            })
            this.nuevafruta="";
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0; 
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    },
    
})