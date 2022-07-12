<script>
	import ChatMessage from './ChatMessage.svelte';
	import { onMount } from 'svelte';
	import { username, user } from './user';
	import GUN from 'gun';
  import * as animateScroll from "svelte-scrollto";
	const db = GUN();
	let newMessage;
	let messages = [];

	onMount(() => {
		user.auth('jeudemaths', 'monpassword', ({ err }) => err && console.error(err));
		var match = {
			'.': {
				'>': new Date(+new Date() - 1 * 1000 * 60 * 60 * 1).toISOString()
			},
			'-': 1
		};
		// Get Messages
		db.get('jdm_chat_6eme')
			.map(match)
			.once(async (data, id) => {
				if (data) {
					// Key for end-to-end encryption
					const key = '#foo';
					var message = {
						// transform the data
						who: await db.user(data).get('alias'), // a user might lie who they are! So let the user system detect whose data it is.
						what: (await SEA.decrypt(data.what, key)) + '', // force decrypt as text.
						when: GUN.state.is(data, 'what') // get the internal timestamp for the what property.
					};
					if (message.what) {
						messages = [...messages.slice(-100), message].sort((a, b) => a.when - b.when);
					}
          animateScroll.scrollToBottom()
				}
			});
	});
	async function sendMessage() {
		const secret = await SEA.encrypt(newMessage, '#foo');
		const message = user.get('all').set({ what: secret });
		const index = new Date().toISOString();
		db.get('jdm_chat_6eme').get(index).put(message);
		newMessage = '';
	}
</script>

<div class="grid place-items-center m-5 h-5/6">
	{#if $username}
		<div class="w-3/4 shadow-2xl mb-5">
			{#each messages as message (message.when)}
				<ChatMessage {message} sender={$username} />
			{/each}
		</div>
		<div class="w-3/4">
			<form on:submit|preventDefault={sendMessage} class="w-full mt-3">
				<input
					type="text"
					placeholder="Type a message..."
					bind:value={newMessage}
					maxlength="100"
					class="input input-primary shadow mt-0 w-5/6"
				/>
				<button class="btn btn-primary mx-1" type="submit"> &#128073;&#127995;</button>
			</form>
		</div>
	{/if}
</div>
