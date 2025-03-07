const EventEmitters = require('events');

// Create an instance of EventEmitter
const customerEmitter = new EventEmitters();

customerEmitter.on('response', (name, id)=>{
    console.log(`Data received from ${name} with id: ${id}`);
})

customerEmitter.emit('response', 'John', 34);
customerEmitter.emit('response', 'Doe', 45);