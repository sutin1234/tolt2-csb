<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();


    export let type = 'button';
    export let isIcon = false;
    let applyClass: string = ''

    const primaryClass = ' bg-blue-500 hover:bg-blue-600 text-center '
    const withIcon = ' flex '

    if(type == 'primary') applyClass = applyClass.concat(primaryClass)
    if(isIcon) applyClass = applyClass.concat(withIcon)


    const handleClick = () => {
        dispatch('click', true)
    }
</script>

<button 
    type="button" on:click={handleClick}
	class="w-full focus:outline-none text-white text-lg py-2.5 px-5 rounded-md {applyClass} hover:shadow-lg block"
>
<div class="flex items-center w-full justify-center"><slot /></div>

</button>