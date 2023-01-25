import { EventEmitter } from 'events'

const eventBroker = new EventEmitter()

eventBroker.on('event-1', () => {
  console.log('event-1')
})
eventBroker.on('event-2', (arg1, arg2) => {
  console.log('event-2', arg1, arg2)
})

eventBroker.emit('event-2', 4, 'test')
eventBroker.emit('event-1')
