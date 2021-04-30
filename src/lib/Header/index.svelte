<script lang="ts">
	import { page } from '$app/stores';
	let mobileMenuOpen = false;
</script>

<header class="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 py-6 px-6 relative">
  <a href="/" class="block md:flex">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="accusoft" class="svg-inline--fa fa-accusoft fa-w-20 text-indigo-600 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M322.1 252v-1l-51.2-65.8s-12 1.6-25 15.1c-9 9.3-242.1 239.1-243.4 240.9-7 10 1.6 6.8 15.7 1.7.8 0 114.5-36.6 114.5-36.6.5-.6-.1-.1.6-.6-.4-5.1-.8-26.2-1-27.7-.6-5.2 2.2-6.9 7-8.9l92.6-33.8c.6-.8 88.5-81.7 90.2-83.3zm160.1 120.1c13.3 16.1 20.7 13.3 30.8 9.3 3.2-1.2 115.4-47.6 117.8-48.9 8-4.3-1.7-16.7-7.2-23.4-2.1-2.5-205.1-245.6-207.2-248.3-9.7-12.2-14.3-12.9-38.4-12.8-10.2 0-106.8.5-116.5.6-19.2.1-32.9-.3-19.2 16.9C250 75 476.5 365.2 482.2 372.1zm152.7 1.6c-2.3-.3-24.6-4.7-38-7.2 0 0-115 50.4-117.5 51.6-16 7.3-26.9-3.2-36.7-14.6l-57.1-74c-5.4-.9-60.4-9.6-65.3-9.3-3.1.2-9.6.8-14.4 2.9-4.9 2.1-145.2 52.8-150.2 54.7-5.1 2-11.4 3.6-11.1 7.6.2 2.5 2 2.6 4.6 3.5 2.7.8 300.9 67.6 308 69.1 15.6 3.3 38.5 10.5 53.6 1.7 2.1-1.2 123.8-76.4 125.8-77.8 5.4-4 4.3-6.8-1.7-8.2z"></path></svg>
	<span class="text-2xl ml-2 hidden md:block text-yellow-600">RC Slab Design Online</span>
  </a>
  <span class="text-2xl ml-2 text-yellow-600 md:hidden">RC Slab Design Online</span>

  <button on:click="{() => mobileMenuOpen = !mobileMenuOpen}" class="inline-block md:hidden w-8 h-8 text-gray-600 p-1">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 text-indigo-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
  </button>
  <nav class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 { mobileMenuOpen ? 'flex'  : 'hidden'}"
on:click="{() => mobileMenuOpen = false}"
  >
    <a href="/" class="block py-1 {$page.path == '/' ? 'text-indigo-600': ''} hover:text-indigo-600 visited:text-purple-600 ">Home Page</a>
    <a href="/design/page" class="block py-1 {$page.path == '/design/page' ? 'text-indigo-600': ''} hover:text-indigo-600 visited:text-purple-600 ">Design Page</a>
    <a href="/design/criteria" class="block py-1 {$page.path == '/design/criteria' ? 'text-indigo-600': ''} hover:text-indigo-600 visited:text-purple-600 ">Design Criteria Page</a>
  </nav>
</header>
