<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import LazyImage from '$lib/components/LazyImage.svelte'
	import { CONFIG } from '$lib/config'
</script>

<svelte:head>
	<title>Home | RC Slab Design Online</title>
</svelte:head>

<section class="p-10 lg:p-40 lg:pt-0">
	<h2 class="text-center text-3xl">
		<b class="text-red-500">Online Nonexpert Floor </b>
		<p class="text-indigo-400 p-2">Construction System using Reinforced Concrete Slab</p>
	</h2>
	<div class="mt-20">
		<div class="bg-orange-lightest border-l-4 border-red text-orange-dark p-4 mt-3 text-2xl">
			<p class="font-bold text-blue-600">Design method:</p>
			<p>Working Stress Design (WSD). Reference Design Code ACI318 for WSD.</p>
		</div>

		<div class="bg-orange-lightest border-l-4 border-red text-orange-dark p-4 mt-3">
			<section class="text-gray-600 body-font overflow-hidden">
				<div class="container mx-auto">
					<div class=" mx-auto flex flex-wrap">
						<LazyImage
							alt="ecommerce"
							className="w-full lg:w-3/6 max-h-60 object-cover object-center rounded"
							src={ CONFIG.IMAGES +"/One_Way_Slab.jpg"}
						/>
						<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<div class="flex mb-4" />
							<p class="leading-relaxed text-xl">
								1. One Way Slab is an area with short sides compared to the long side, less than or
								equal to 0.50, is a slab with only 2 supports, weight is transferred to only 2
								supports as shown in Figure L. Is the long side, S is the short side of the slab.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="bg-orange-lightest border-l-4 border-red text-orange-dark p-4 mt-3">
			<section class="text-gray-600 body-font overflow-hidden">
				<div class="container mx-auto">
					<div class=" mx-auto flex flex-wrap">
						<LazyImage
							alt="ecommerce"
							className="w-full lg:w-3/6 max-h-60 object-cover object-center rounded"
							src={ CONFIG.IMAGES + "/Two_Way_Slab.jpg"}
						/>
						<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<div class="flex mb-4" />
							<p class="leading-relaxed text-xl">
								2. Two Way Slab is an area with a short side compared to the long side more than
								0.50. It is a slab with supports on 4 sides and weight is transferred to the
								supports on all 4 sides. The weight is transferred to the beam as shown in Figure L
								is the long side, S is the short side of the slab.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>
