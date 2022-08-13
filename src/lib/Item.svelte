<script lang="ts">
  import Card, { Content, PrimaryAction } from '@smui/card';
  import Checkbox from '@smui/checkbox';
  import IconButton from '@smui/icon-button';

  let checked = false;

  export let data
</script>

<Card class="card">
  <PrimaryAction padded>
    <div class="flex">
      <Checkbox bind:checked={data.status} />
      <p>{data?.content || '--'}</p>
      <IconButton class="material-icons icon">delete_outline</IconButton>
    </div>
  </PrimaryAction>
</Card>

<style lang="scss">
  .flex { 
    display: flex;  align-items: center; 
    /* &:hover button { opacity: 1; } */
    & > :global(.icon){  opacity: 0; transition: opacity 0.2s; text-indent: -9999px; cursor: pointer; };
  }
  p { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;  }
</style>
