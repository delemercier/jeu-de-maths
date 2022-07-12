<script>
	import ChatMessage from './ChatMessage.svelte';
	import { onMount } from 'svelte';
	import GUN from 'gun/gun';
	import * as animateScroll from 'svelte-scrollto';
	const db = GUN();
	let newMessage;
	let messages = [];

	onMount(() => {
		var match = {
			'.': {
				'>': new Date(+new Date() - 1 * 1000 * 60 * 30 * 1).toISOString()
			},
			'-': 1
		};
		// Get Messages
		db.get('jdm_chat_6eme')
			.map(match)
			.once(async (data, id) => {
				if (data) {
					var message = {
						what: data.what + '', // force decrypt as text.
						when: GUN.state.is(data, 'what') // get the internal timestamp for the what property.
					};
					if (message.what) {
						messages = [...messages.slice(-100), message].sort((a, b) => a.when - b.when);
					}
					animateScroll.scrollToBottom();
				}
			});
	});
	async function sendMessage() {
		const index = new Date().toISOString();
		db.get('jdm_chat_6eme').get(index).put({ what: newMessage });
		newMessage = '';
	}
</script>

<div class="grid place-items-center m-5 h-5/6">
	<div class="w-3/4 shadow-2xl mb-5">
		{#each messages as message (message.when)}
			<ChatMessage {message} />
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
</div>
