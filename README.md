Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


MILESTONE 1:
1- Implementare nell'html 1 input per fare inserire il numero di km che il passeggero deve percorrere
2- Implementare nell'html 1 input per fare selezionare la fascia di età del passeggero
3- Implementare nell'html 1 btn
4- Creare una variabile per il bottone alla quale aggiungere un event listener sul click
4- Aggiungere in JS un evento ascoltatore al click
5- recupero i km che il passeggero deve percorrere dal form 
5- recupero la fascia d'età del passeggero dal form 
6- Dichiarare il costo a km
7- Calcolare il prezzo scontato del biglietto SE il passeggero ha meno di 18 anni
8- Calcolare il prezzo scontato del biglietto SE il passeggero ha più di 65 anni
9- Altrimenti il costo resta invariato
10- Stampo su HTML il risultato ottenuto.
11- Stilizzare
