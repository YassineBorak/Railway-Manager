// var prompt = require('prompt-sync')();
import {trips} from './data.js';
import promptSync from 'prompt-sync';
var prompt = promptSync();

const tickets = [
    {
        id: 1,
        passengerName: "hh",
        tripId: 3,
        seatNumber: 1,
        price: 120
    }
        ];

// Affichage:
function afficherTrajet(arrTrips){

    console.log('\n=== TRAJETS DISPONIBLES ===\n');
    for(let i = 0; i < arrTrips.length; i++){
        console.log(`#${i+1} ${arrTrips[i].departure} → ${arrTrips[i].destination}\n`);
        console.log(`Départ : ${arrTrips[i].departureTime}\n`);
        console.log(`Arrivée : ${arrTrips[i].arrivalTime}\n`);
        console.log(`Prix: ${arrTrips[i].price}\n`);
        console.log(`Places disponibles : ${arrTrips[i].availableSeats}\n`);
    }
}
    
// 4. Acheter un ticket
let ticketId = 1;
function acheterUnTicket(arrTrips, arrTickets){
    const nomDuPassager = prompt('Veuillez entrer votre nom: ');
    const idTraget = prompt('Veuillez entrer l\'identifiant du trajet: ');

    let seatNum = 0;
    for(let trip of arrTrips){
        if(trip.id === idTraget){
            console.log(trip.id, idTraget)
            if(trip.availableSeats <= 0)
                return 'Train complet.';

            const ticket = {
                id: ticketId,
                passengerName: nomDuPassager,
                tripId: trip.id,
                seatNumber: (trip.id) ? ticket.seatNumber += 1 : 1,
                price: trip.price
            }
            arrTrips.availableSeats -= 1;
            arrTickets.push(ticket);

        }
        return 'Trajet introuvable.';
    }
    return 'Ticket acheté avec succès.';
}

// ticket buy function will take a param arrTrips
    // passager name <- input
    // route id <- input
    // loop through the object arrTrips
    // check if the route exists does not exist -> print tirp does not exist
    //else    
        // check if there is a spot available
            // create the ticket (create obj)
                // assign automatic place number
                // push the object in the array tickets.


function afficherLesTickets(arrTickets, arrTrips){
    console.log('=== TICKETS ===')
    for(const ticket of arrTickets){
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.name}`);
        console.log(`Trajet : ${arrTrips[ticket.id].departure} → ${arrTrips[ticket.id].destination}`);
        console.log(`Place : ${ticket.place}`);
        console.log(`Prix : ${ticket.price} DH`);
    }
}




//Menu:
let menu = true;
while (menu){
    console.log('=================================\n');
    console.log(' RAILWAY MANAGER \n');
    console.log('=================================\n');
    console.log('1. Afficher les trajets');
    console.log('2. Acheter un ticket');
    console.log('3. Afficher les tickets');
    console.log('4. Annuler un ticket');
    console.log('5. Rechercher un ticket');
    console.log('6. Filtrer les trajets');
    console.log('7. Trier les trajets');
    console.log('0. Quitter');

    let choice = "";
    choice = prompt('Votre choix : ')

    switch(choice){
        case '1': afficherTrajet(trips); break;
        case '2': acheterUnTicket(trips, tickets); break;
        case '3': afficherLesTickets(tickets, trips); break;
        case '4': annulerUnTicket(); break;
        case '5': rechercherUnTicket(); break;
        case '6': filtrerLesTrajets(); break;
        case '7': trierLesTrajets(); break;
        case '0': menu = false; break;
        default:
            'Choix indisponible, choisir à nouveau: '
    }
}