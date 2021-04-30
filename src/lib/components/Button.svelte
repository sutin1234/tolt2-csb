
<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();


    export let type = 'button';
    const primaryClass = 'bg-blue-500 hover:bg-blue-600'
    let applyClass = ''
    if(type == 'primary') applyClass = primaryClass

    const handleClick = () => {
        dispatch('click', true)
    }
</script>

<button 
    type="button" on:click={handleClick}
	class="w-full focus:outline-none text-white text-lg py-2.5 px-5 rounded-md {applyClass} hover:shadow-lg block"
>
<slot />
</button>