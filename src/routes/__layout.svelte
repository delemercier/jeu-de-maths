<script>
	import { theme } from '/src/store';
	import Icon from '@iconify/svelte';
	import '../app.css';
	import { fly } from 'svelte/transition';


	let themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk'
	];

	let open = false;
	const modifyTheme = (t) => {
		$theme = t;
	};

	const toggleOpen = () => {
		open = !open;
	}
</script>


<div data-theme={$theme}>
	<div class="bg-neutral text-neutral-content">
		{#if open}
			<div class="fixed w-full h-full bg-neutral opacity-80 z-40" on:click={toggleOpen} />
			<aside
				in:fly={{ x: -200, duration: 400 }}
				out:fly={{ x: -200, duration: 200 }}
				class="absolute w-52 border-r-2 shadow-lg z-50 bg-neutral"
			>
				<ul style="height:100vh" class="p-2 shadow menu w-51 h-full overflow-y-auto">
					<li>
						<a href="/" on:click={() => (open = false)}>Home</a>
					</li>
					<li>
						<a href="/6eme" on:click={() => (open = false)}>6ème</a>
					</li>
					<li>
						<a href="/5eme" on:click={() => (open = false)}>5ème</a>
					</li>
					<li>
						<a href="/4eme" on:click={() => (open = false)}>4ème</a>
					</li>
					<li>
						<a href="/3eme" on:click={() => (open = false)}>3ème</a>
					</li>
				</ul>
			</aside>
		{:else}
			<button class="btn btn-square btn-ghost z-30 m-2" on:click={() => (open = !open)}>
				<Icon icon="mdi:menu" />
			</button>
		{/if}

		<div class="dropdown dropdown-end absolute right-10">
			<button tabindex="0" class="btn btn-square btn-ghost z-30 m-2">
				<Icon icon="mdi:format-color-fill" />
			</button>
			<ul tabindex="0" class="shadow menu dropdown-content h-96 w-48 bg-neutral overflow-y-auto">
				{#each themes as t}
					<li on:click={() => modifyTheme(t)} class={$theme === t ? 'bg-primary' : ''}>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a>{t}</a>
					</li>
				{/each}
			</ul>
		</div>

	</div>
	<div class="min-h-screen">
		<slot />
	</div>


</div>

<style lang="postcss">
	div :global(svg) {
		font-size: 24px;
	}
	div :global(.big-icon) {
		font-size: 48px;
	}
	/* width */
	::-webkit-scrollbar {
		width: 14px;
		height: 16px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		@apply bg-base-200;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-base-300;
		border: 2px solid #edf2f7;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		@apply bg-base-300;
	}
</style>
