/*Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/







// Inizializza una nuova istanza di Vue
new Vue({
    // Monta l'app su #app nell'HTML
    el: '#app',
    // Dati dell'app (stato)
    data() {
        return {
            // Lista di todo
            todos: [
                { 
                    text: 'Fare i compiti',
                     done: false
                },
                { 
                    text:'Fare la spesa', 
                     done: true 
                },
                { 
                    text: 'Fare il bucato', 
                    done: false 
                }
            ],
            // Testo del nuovo todo inserito dall'utente
            newTodoText: ''
        };
    },
    // Metodi dell'app
    methods: {
        // Rimuovere un todo dalla lista
        removeTodo: function(index) {
            // Utilizza splice per rimuovere il todo dalla lista
            this.todos.splice(index, 1);
        },
        //Aggiungere un nuovo todo alla lista
        addTodo: function() {
            // Verifica se il testo del nuovo todo non è vuoto
            if (this.newTodoText.trim() !== '') {
                // Aggiungi il nuovo todo alla lista
                this.todos.push({
                    text: this.newTodoText,
                    done: false
                });
                // Pulisci l'input dopo l'aggiunta
                this.newTodoText = '';
            }
        }
    }
});
