import GUN from 'gun';
import 'gun/axe';
import { writable } from 'svelte/store';

// Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('jeudemaths');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
    const alias = await user.get('alias');
    username.set(alias);

    console.log(`signed in as ${alias}`);
});