// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.
// l’array di oggetti di partenza può essere una cosa così:
// tasks: [
// { text: 'Fare i compiti', done: false }, 
// { text: 'Fare la spesa', done: true }, 
// { text: 'Fare il bucato', done: false }
// ]
// Bonus possibili (qualche idea ma sperimentate che volete):
// curare l’interfaccia e renderla più carina e/o funzionale;
// gestire anche lo stato “done” del task;
// far succedere qualcosa al completamento del caricamento dell’applicazione;
// etc..


const {createApp} = Vue

createApp({
    data(){
        return{
            newTask: '',
            error: false,
            tasks: [
                { 
                    text: 'Fare i compiti', 
                    done: false 
                }, 
                { 
                    text: 'Fare la spesa', 
                    done: true 
                }, 
                { 
                    text: 'Fare il bucato', 
                    done: false 
                }
            ]

        }
    },
    methods:{
        addTask(){
            if(this.newTask.length >= 5){
                // nuovo oggetto
                this.tasks.unshift(
                    {
                        text : this.newTask, 
                        done: false
                    }
                );
                // tolgo l'error (magari c'era un errore e non si toglietebbe altrimenti)
                this.error = false;
            }else{
                this.error = true;
            };
            this.newTask = '';
        },
        doOrDoNot(index){
            console.log(index);
            if(this.tasks[index].done){
                this.tasks[index].done = false;
                
            }else{
                this.tasks[index].done = true;
                
            };
        },
        deleteTask(index){
            console.log(index);
            this.tasks.splice(index, 1);
            
        }
    }
}).mount('#app')















// const {createApp} = Vue

// createApp({
//     data(){
//         return{

//         }
//     },
//     methods:{
        
//     }
// }).mount('#app')



// posts.forEach((element, index, array) => {});

// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }