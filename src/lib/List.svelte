<script lang="ts">
    import { Title, Item } from './index';
    import { quintOut } from 'svelte/easing'
    import { crossfade, fly } from 'svelte/transition'
    import { flip } from 'svelte/animate';

    export let title = '';
    export let icon: string | undefined = ''

    export let dataes = []


    const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;
			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
</script>

<style lang='scss'>
    .content { 
        padding: 15px 0; 
        & > :global(.card) { 
            &:not(:last-child){ margin-bottom: 10px;}
         }
    }
</style>

<section class="wrapper">
    <Title title={title} icon={icon} />
    <ul class="content">
        {#if dataes.length}
            {#each dataes as data (data.uuid)}
                <div class="card" in:receive="{{key: data.uuid}}" out:send="{{key: data.uuid}}" animate:flip>
                    <Item data={data} on:select on:delete />
                </div>
            {/each}
        {:else}
            <p in:fly="{{ duration: 500 }}">no data</p>
        {/if}
      
    </ul>
</section>