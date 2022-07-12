<script>
	import { onMount } from 'svelte';

	import { fade, fly , scale  } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<main>
	<div class="grid place-items-center inline-block">
		{#if visible}
			<div
				class="text-6xl w-full text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3"
				in:fade={{ duration: 2000 }}
			>
				Joyeux anniversaire Julien !
			</div>
		{/if}
		<div>
			{#if visible}
				<img src="/images/anniv.png" alt="raté" width="200px" class="inline-block" in:scale ={{ duration: 2000, delay: 1000 }}/>
			{/if}
			{#if visible}
				<img src="/images/anniv2.png" alt="raté" width="200px" class="inline-block" in:scale ={{ duration: 2000, delay: 2000 }}/>
			{/if}
			{#if visible}
				<img src="/images/anniv3.png" alt="raté" width="200px" class="inline-block" in:scale ={{ duration: 2000, delay: 3000 }} />
			{/if}
		</div>

		<div class="text-6xl my-5 text-white" />

		{#if visible}
			<div
				class="text-4xl my-5 bg-gradient-to-r from-indigo-500 rounded-xl p-4"
				in:fade={{ duration: 2000, delay: 4000 }}
			>
				Un site rien que pour toi !
			</div>
		{/if}
		<div class="h-12" />
		{#if visible}
			<div class="text-3xl my-5" in:fade={{ delay: 5000 }}>
				Je t'offre mon temps et mes compétences pour construire :
			</div>
			<div
				class="text-2xl my-1 text-primary"
				in:fly={{ delay: 6000, x: -500, duration: 1000 }}
			>
				Des jeux en groupe
			</div>
			<div
				class="text-2xl my-1 text-secondary"
				in:fly={{ delay: 8000, x: -500, duration: 1000 }}
			>
				Des exercices interactifs
			</div>
			<div
				class="text-2xl my-1 text-accent"
				in:fly={{ delay: 10000, x: 500, duration: 2000 }}
			>
				Des trucs qui bougent dans l'autre sens
			</div>
			<div
				class="text-2xl my-1 text-info"
				in:fly={{ delay: 12000, y: -500, duration: 2000 }}
			>
				Et même par en haut !
			</div>
		{/if}
	</div>
</main>
