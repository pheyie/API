const accountSid = `AC69908a6e9f38f39b3c014f10b8ef866c`;
const authToken = `+4c7309776b490321654404abb9872c67`;
const twilionum = `+19782917178`;
   
    const fromEL = document.getElementById("from")
    const toEL = document.getElementById("to")
    const recipientEL = document.getElementById("recipient")
    const messEL = document.getElementById("mess")


function send(){
const client = require('twilio')(accountSid, authToken);

    client.messages
            .create({
                body: messEL.value,
                from: twilionum,
                to: recipientEL.value

            })
            .then(message => console.log(message.sid));
}

