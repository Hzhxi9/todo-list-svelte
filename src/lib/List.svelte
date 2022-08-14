<script lang="ts">
    import { Title, Item } from './index';

    export let title = '';
    export let icon: string | undefined = ''

    export let dataes = []
</script>

<style lang='scss'>
    .content { 
        padding: 15px 0; 
        & > :global(.mdc-card) { 
            &:not(:last-child){ margin-bottom: 10px;}
         }
    }
</style>

<section class="wrapper">
    <Title title={title} icon={icon} />
    <ul class="content">
        {#if dataes.length}
            {#each dataes as data (data.uuid)}
                <Item data={data} on:select on:delete />
            {/each}
        {:else}
            <p>no data</p>
        {/if}
      
    </ul>
</section>