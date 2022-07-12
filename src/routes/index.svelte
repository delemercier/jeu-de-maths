<script>
	import { onMount } from 'svelte';

	import { fade, fly, scale } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<main>
	<div class="grid place-items-center inline-block">
		{#if visible}
			<div
				class="text-3xl w-full text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3"
				in:fade={{ duration: 2000 }}
			>
				Joyeux anniversaire Julien !
			</div>
		{/if}
		<div class="text-center">
			{#if visible}
				<img
					src="/images/anniv.png"
					alt="raté"
					width="150px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 1000 }}
				/>
			{/if}
			{#if visible}
				<img
					src="/images/anniv2.png"
					alt="raté"
					width="150px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 2000 }}
				/>
			{/if}
			{#if visible}
				<img
					src="/images/anniv3.png"
					alt="raté"
					width="150px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 3000 }}
				/>
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
			<div class="text-3xl my-1" in:fade={{ delay: 5000 }}>Je t'offre mon temps</div>
			<div class="text-3xl my-1" in:fade={{ delay: 6000 }}>mes compétences</div>
			<div class="text-3xl my-1" in:fade={{ delay: 7000 }}>pour construire :</div>
			<div class="text-2xl my-1 text-primary" in:fly={{ delay: 8000, y: -500, duration: 1000 }}>
				Des jeux en groupe
			</div>
			<div class="text-2xl my-1 text-secondary" in:fly={{ delay: 10000, y: -500, duration: 1000 }}>
				Des exercices interactifs
			</div>
			<div class="text-2xl my-1 text-accent" in:fly={{ delay: 12000, y: -500, duration: 5000 }}>
				Des trucs qui bougent lentement &#128517;
			</div>
			<div class="text-2xl my-1 text-info" in:fly={{ delay: 14000, y: -500, duration: 10000 }}>
				Des trucs qui bougent très lentement &#128529;
			</div>
		{/if}
	</div>
</main>
