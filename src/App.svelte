<script lang="ts">
  // http://sveltematerialui.com/

  import { onMount } from 'svelte';
  import { Container, Input, List } from './lib';
  import LayoutGrid, { Cell } from '@smui/layout-grid';

  interface DataType {  uuid: string; content: string; status: number; }

  let value;
  let list: DataType[] = [];

  async function getData() {
    const res = await fetch('src/data/index.json');
    const response: Promise<{ data: DataType[] }> = await res.json();
    list = (await response).data;
  }

  onMount(() => {
    getData();
  });

   

  $: todo = list.filter(_l => _l.status === 0) || [];
  $: done = list.filter(_l => _l.status === 1) || [];
  $: undo = list.filter(_l => _l.status === 2) || [];


</script>

<main class="layout">
  <Container>
    <Input bind:value />
    <LayoutGrid>
      <Cell><List title="todo" dataes={todo} icon="assignment_outlined" /></Cell>
      <Cell><List title="undo" dataes={undo} icon="assignment_late_outlined" /></Cell>
      <Cell><List title="done" dataes={done} icon="assignment_turned_in_outlined" /></Cell>
    </LayoutGrid>
  </Container>
</main>

<style lang="scss">
  .layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
