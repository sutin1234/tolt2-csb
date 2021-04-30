<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { DROPDOWN } from '$lib/models/index'
	
	const dispatch = createEventDispatcher();

	export let lists: DROPDOWN[] = [
		{ label: ' Type 1 Residential, bathroom, toilet room : LL = 150 kg/sqm.', value: 150 },
		{ label: ' Type 2 Hotel, Dormitory, Condominium  : LL = 200 kg/sqm.', value: 200 },
		{ label: ' Type 3 Bank, Office : LL = 250 kg/sqm.', value: 250 },
		{
			label: ' Type 4 Commercial building, university, college, school : LL = 300 kg/sqm.',
			value: 300
		},
		{
			label:
				' Type 5 shopping malls, auditoriums, theaters, restaurants, car parks : LL = 400 kg/sqm.',
			value: 400
		},
		{
			label:
				' Type 6 warehouse, museum, amphitheater, industrial factory, printing house, storage room for documents and supplies  : LL = 500 kg/sqm.',
			value: 500
		}
	];

	onMount(() => {
		dispatch('selected', lists[0].value);
	})
	const handleChange = ({target}) => {
		dispatch('selected', target.value);
	};
</script>

<div class="relative w-auto">
	<!-- svelte-ignore a11y-no-onchange -->
	<select
		on:change={handleChange}
		class="block appearance-none w-full bg-gray-200 border py-3 px-4 mb-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
	>
		{#each lists as list}
			<option value={list.value}>{list.label}</option>
		{/each}
	</select>
	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
			><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg
		>
	</div>
</div>
