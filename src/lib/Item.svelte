<script lang="ts">
  import Card, { Content, PrimaryAction } from '@smui/card';
  import Checkbox from '@smui/checkbox';
  import IconButton from '@smui/icon-button';
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let data
</script>



<Card on:click={() => dispatch('select', data)} >
  <PrimaryAction padded>
    <div class="flex">
      <Checkbox bind:checked={data.status} disabled={data.status === 1} />
      <p>{data?.content || '--'}</p>
      {#if data.status !== 1}
        <IconButton class="material-icons icon"
           on:click={(event) => { event.stopPropagation();dispatch('delete', data) }}
        >
          delete_outline
        </IconButton>
      {/if}
    </div>
  </PrimaryAction>
</Card>


<style lang="scss">
  .flex { 
    display: flex;  align-items: center; 
    &:hover > :global(.icon){ opacity: 1; text-indent: 0; }
    & > :global(.icon){  opacity: 0; transition: opacity 0.2s; text-indent: -9999px; cursor: pointer; color: #999; padding: 0 12px; width: 40px; height: 40px };
  }
  p { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #333; }
</style>
