<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import type { DROPDOWN } from '$lib/models/index';

	const barTypeList: DROPDOWN[] = [
		{ label: 'RB (Round Bar)', value: 'RB' },
		{ label: 'DB (Deformed Bar)', value: 'DB' }
	];

	let strealList: DROPDOWN[] = [
		{ label: 'SR24', value: 'RS24' },
		{ label: 'SD30', value: 'SD30' },
		{ label: 'SD40', value: 'SD40' }
	];

	let inputBarList: DROPDOWN[] = [
		{ label: '10 mm.', value: '10' },
		{ label: '12 mm.', value: '12' },
		{ label: '16 mm.', value: '16' },
		{ label: '20 mm.', value: '20' },
		{ label: '22 mm.', value: '22' },
		{ label: '25 mm.', value: '25' }
	];

	let barSize = 'RB';
	let steel = '';
	let showSummary = false;
	let slapTypeS: number = 0;
	let slapTypeL: number = 0;
	let slapType = '';
	let inputBarSelected: number = 0;
	let totalSummaryResult = 0;

	$: steelList2 = strealList.filter((f) => {
		if (barSize == 'RB') {
			return f.value == 'RS24';
		}
		return f.value != 'RS24';
	});

	$: formValid = (slapTypeL && slapTypeS) ? true : false;

	const calculate = () => {
		// 1. (S+L)*100/90
		const summary: number = (slapTypeS + slapTypeL) * (100 / 90);
		const summary2: number = summary + parseInt(inputBarSelected);
		totalSummaryResult = parseFloat(summary2).toFixed(2) || 0;
	};

	$: calculate();

	const barHandleSelect = ({ detail }) => {
		barSize = detail;
	};
	const handleSteelSelect = ({ detail }) => {
		steel = detail;
	};
	const InputBarHandleSelect = ({ detail }) => {
		inputBarSelected = parseInt(detail);
		calculate();
	};
	const summaryResult = () => {
		showSummary = true;
	};
	const slapTypeChange = ({ detail }, type) => {
		slapType = type;
		if (type == 'S') slapTypeS = parseInt(detail);
		if (type == 'L') slapTypeL = parseInt(detail);
		calculate();
	};
</script>

<svelte:head>
	<title>Design Page | RC Slab Design Online</title>
</svelte:head>

<section class="p-10 lg:p-60 xl:p-96 xl:pt-0 lg:pt-0">
	<h2 class="text-center text-3xl">
		<b class="text-red-500">Online Nonexpert Floor </b>
		<p class="text-indigo-400 p-2">Construction System using Reinforced Concrete Slab</p>
	</h2>

	<div class="container py-2 mx-auto">
		<div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
			<div class="mb-10 px-4">
				<div class="rounded-lg max-h-7xl max-w-3xl overflow-hidden">
					<LazyImage
						alt="content"
						className="object-cover object-center"
						src="https://tolt2.csb.app/images/slab01.jpg"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-8 shadow-lg">
		<div class="p-4 text-1xl">
			<p class="font-bold text-blue-600">Data Input:</p>
			<p>Please select type of building for define Living Loaded (LL)</p>
			<div class=" mt-4">
				<div class="mb-2">Select Type:</div>
				<Dropdown />
			</div>
			<div class=" mt-4">
				<div class="mb-2">Lenght of Short span (S):</div>
				<Input on:value={(e) => slapTypeChange(e, 'S')} />
			</div>
			<div class=" mt-4">
				<div class="mb-2">Lenght of Short span (L):</div>
				<Input on:value={(e) => slapTypeChange(e, 'L')} />
			</div>
			<p class="font-bold text-blue-600">Select Steel reinforcement bar size</p>
			<div class=" mt-2">
				<div class="mb-2">Select Type:</div>
				<Dropdown lists={barTypeList} on:selected={barHandleSelect} />
			</div>
			<p class="font-bold text-blue-600">Reinforcement bar type example</p>
			<div class="flex flex-wrap justify-center items-center p-4">
				<LazyImage
					alt="content"
					className="object-cover object-cente mr-4 mb-4"
					src="https://tolt2.csb.app/images/round_bar.jpg"
				/>

				<LazyImage
					alt="content"
					className="object-cover object-cente ml-4 mt-4"
					src="https://tolt2.csb.app/images/deformed_bar.jpg"
				/>
			</div>
			<p class="font-bold text-blue-600">
				If select RB steel grade use SR24, if select DB steel grade use SD30 or SD40
			</p>
			<div class=" mt-2">
				<div class="mb-2">Select Steel grade:</div>
				<Dropdown lists={steelList2} on:selected={handleSteelSelect} />
			</div>
			<div class="mt-4">
				<div class="mb-2">
					Input bar size (bar size for select: 10 mm.,12 mm.,16 mm.,20 mm,22 mm.,25 mm.):
				</div>
				<Dropdown lists={inputBarList} on:selected={InputBarHandleSelect} />
			</div>
			<div class=" mr-2 mt-2 md:inline-block">
				<Button type="primary" on:click={summaryResult}>Design</Button>
			</div>

			{#if showSummary && formValid}
				<div class="bg-blue-50 rounded text-blue-600 shadow-lg mt-4 p-4">
					<p class="font-bold text-blue-600">Summary Result: {totalSummaryResult} mm.</p>
					<div>
						<div>Design Result Type of slab: ONE WAY SLAB</div>
						<div>Short span lenght (S) : {slapTypeS} m.</div>
						<div>Long span lenght (L): {slapTypeL} m.</div>
						<div>Slab thickness (t) : {inputBarSelected} cm. Short Span Reinforcement</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
