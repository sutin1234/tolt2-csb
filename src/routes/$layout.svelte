<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Header from '$lib/Header/index.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import '../app.postcss';

	let y: number;
	const handleClick = () => {
		window.scrollTo(0,0)
	}

</script>

<Header />

<main>
	<slot />
</main>

<svelte:window bind:scrollY={y} />
{#if y > 300}
	<div class="right-0 bottom-0 mr-6 mb-8 fixed">
		<Icon name="arrow-up" class="w-8 h-8 cursor-pointer" on:click={handleClick}/>
	</div>
{/if}

<footer class="w-ful bottom-0 left-0" />
