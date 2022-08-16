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

  function sumbit(event: CustomEvent){
    const _value = event.detail;
    if(_value){
      const data = { uuid: list[list.length - 1].uuid + 1, content: _value, status: 0 }
      list = list.concat(data)
      value = ''
    }
  }

  function select(data){
    const target = data.detail;
    const _list = [...list]
    const index = list.findIndex(v => v.uuid === target.uuid);
    let item;
    switch(target.status){
      case 0:
        item = {...target, status: 1};
        break;
      case 2:
        item = {...target, status: 0} 
        break;
    }
    _list.splice(index, 1, item)
    list = _list
  }

  function handleDelete(event){
    const data = event.detail;
    const index = list.findIndex(v => v.uuid === data.uuid);
    let item;
    switch(data.status){
      case 0:
        item = {...data, status: 2};
        break;
      case 2:
        item = {...data, status: 0} 
        break;
    }
    list = [].concat(list.slice(0, index), item, list.slice(index + 1))
  }

  $: todo = list.filter(_l => _l.status === 0) || [];
  $: done = list.filter(_l => _l.status === 1) || [];
  $: undo = list.filter(_l => _l.status === 2) || [];
</script>

<main class="layout">
  <Container>
    <Input bind:value on:submit={sumbit}   />
    <LayoutGrid class="grid">
      <Cell><List title="todo" dataes={todo} icon="assignment_outlined" on:select={select} on:delete={handleDelete} /></Cell>
      <Cell><List title="done" dataes={done} icon="assignment_turned_in_outlined" /></Cell>
      <Cell><List title="undo" dataes={undo} icon="assignment_late_outlined"  on:select={select}  on:delete={handleDelete} /></Cell>
    </LayoutGrid>
  </Container>
</main>

<style lang="scss">
  .layout { 
    width: 100vw; height: 100vh; display: flex;justify-content: center; align-items: center;
    & :global(.grid) { flex: 1; overflow: auto; transition: height 0.2s, overflow 0.3s, flex 0.5s; }
  }
</style>
