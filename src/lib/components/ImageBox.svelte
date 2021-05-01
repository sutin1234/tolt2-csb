<script lang="ts">
	import type { IMAGEBOX } from '$lib/models';
	import LazyImage from '$lib/components/LazyImage.svelte';

	export let data: IMAGEBOX[];
</script>

{#each data as item}
	<p class="font-bold text-blue-600 mt-2">{item.topic}</p>

	<div class="flex flex-wrap justify-center items-center p-4">
		<LazyImage alt="content" className="object-cover object-cente ml-4 mt-4" src={item.image} />
	</div>

	{#if item.contents.length}
		<div class="mt-2">
			{#each item.contents as content}
				<div>{content}</div>
			{/each}
		</div>
	{/if}
{/each}
