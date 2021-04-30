<script lang="ts">
	import type { CALCULATE } from '$lib/models/index';

	export let data: CALCULATE;
    const {totalSummaryResult, slapTypeS, slapTypeL, inputBarSelected, slapType } = data;
</script>

<div class="bg-blue-50 rounded text-blue-600 shadow-lg mt-4 p-4">
	<p class="font-bold text-blue-600">Summary Result: {totalSummaryResult} mm.</p>
	<div>
		<div>Design Result Type of slab: {slapType || 'ONE WAY SLAB' }</div>
		<div>Short span lenght (S) : {slapTypeS} m.</div>
		<div>Long span lenght (L): {slapTypeL} m.</div>
		<div>Slab thickness (t) : {inputBarSelected} cm.</div>
	</div>
</div>
