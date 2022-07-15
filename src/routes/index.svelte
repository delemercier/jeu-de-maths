<script>
	import { onMount } from 'svelte';

	import { fade, fly, scale } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<main>
	<div class="grid place-items-center">
		{#if visible}
			<div
				class="text-3xl w-full text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3"
				in:fade={{ duration: 2000 }}
			>
				Joyeux anniversaire Julien !
			</div>

			<div class="text-center">
				<img
					src="/images/anniv.png"
					alt="raté"
					width="120px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 1000 }}
				/>

				<img
					src="/images/anniv2.png"
					alt="raté"
					width="120px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 2000 }}
				/>

				<img
					src="/images/anniv3.png"
					alt="raté"
					width="120px"
					class="inline-block"
					in:scale={{ duration: 2000, delay: 3000 }}
				/>
			</div>

			<div
				class="text-2xl text-center my-2 bg-gradient-to-r from-indigo-500 p-3 w-full"
				in:fade={{ duration: 2000, delay: 4000 }}
			>
				coucou Julien en live !
			</div>

			<div class="h-12" />
			<div class="text-xl my-1" in:fade={{ delay: 5000 }}>Je t'offre mon temps</div>
			<div class="text-xl my-1" in:fade={{ delay: 6000 }}>mes compétences</div>
			<div class="text-xl my-1" in:fade={{ delay: 7000 }}>pour construire :</div>
			<div class="text-xl my-1 text-primary" in:fly={{ delay: 8000, y: -500, duration: 1000 }}>
				Des jeux en groupe &#128526;
			</div>
			<div class="text-xl my-1 text-secondary" in:fly={{ delay: 10000, y: -500, duration: 1000 }}>
				Des exercices interactifs &#128513;
			</div>
			<div class="text-lg my-1 text-accent" in:fly={{ delay: 12000, y: -200, duration: 8000 }}>
				Des trucs qui bougent lentement &#128517;
			</div>
			<div class="text-lg my-1 text-info" in:fly={{ delay: 14000, y: -100, duration: 16000 }}>
				Des trucs qui bougent très lentement &#128529;
			</div>

		{/if}
	</div>
</main>
