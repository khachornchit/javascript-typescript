import EventEmitter from "events";

class UserData {
}

// TypeScript event types
interface UserEvent {
    type: 'user-created' | 'user-updated' | 'user-deleted';
    data: UserData;
}

// Event emitter in a user service
// @ts-ignore
const userEventEmitter = new EventEmitter<UserEvent>();
userEventEmitter.emit('user-created', { /* user data */});

// Event handler in another service
userEventEmitter.on('user-created', (event: any) => {
    // Handle user-created event
    console.log(event)
});
