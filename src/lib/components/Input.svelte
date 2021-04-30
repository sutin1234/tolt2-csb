<script>
	import { createEventDispatcher } from 'svelte';
	export let type = 'text';
	export let bgColor = 'bg-gray-200';
	const typeList = ['text', 'checkbox', 'radio'];

	const dispatch = createEventDispatcher();

	const handleChange = (e) => {
		dispatch('value', e.target.value)
	}
</script>

{#if type == 'text'}
	<input
		{type}
		on:keyup={handleChange}
		class="appearance-none block w-full {bgColor} text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
	/>
{/if}
