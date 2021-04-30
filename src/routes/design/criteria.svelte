<script>
    const lists = ['Design Code : ACI 318 for WSD', 'Design Method : Working Stress Design (WSD)', 'Ultimate strength of the concrete (fc) : 140 ksc.', 'Yield Strength of Steel (fy) : 2400 ksc.', 'Modulus of elasticity of steel (Es) : 2,040,000 ksc.', 'Modulus of elasticity of concrete (Ec) : 178,665 ksc.', 'Allowable stress of concrete fc = 0.45 fc : 63 ksc.', 'Allowable tensile stress of reinforcing steel fs = 0.5 fy : 1200 ksc.']
</script>

<svelte:head>
	<title>Design Criteria | RC Slab Design Online</title>
</svelte:head>

<section class="p-10">
	<h2 class="text-center text-3xl">
		<b class="text-red-500">Online Nonexpert Floor </b>
		<p class="text-indigo-400 p-2">Construction System using Reinforced Concrete Slab</p>
	</h2>

	<div class="mt-20">
		<div
			class="bg-orange-lightest border-l-4 border-red text-orange-dark p-4 mt-3 text-2xl shadow-lg"
		>
			<p class="font-bold text-blue-600">Design Criteria:</p>
		</div>
	</div>

	{#each lists as list}
		<div class="space-x-2 bg-blue-50 rounded flex items-start text-blue-600 shadow-lg">
			<div class="w-1 self-stretch bg-blue-300" />
			<div class="flex pt-2 pl-2 w-full pb-2">
				<h3 class="text-blue-800 tracking-wider flex-1 lg:text-xl">{list}</h3>
			</div>
		</div>
	{/each}
</section>
