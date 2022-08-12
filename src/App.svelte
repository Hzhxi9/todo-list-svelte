<script lang="ts">
    import  { Container, Input, List } from './lib';

    import LayoutGrid, { Cell } from '@smui/layout-grid'



    let value;
</script>

<main class="layout">
   <Container>
      <Input bind:value  />
      <LayoutGrid >
        <Cell><List title="todo" icon="assignment"  /></Cell>
        <Cell><List title="undo" icon="assignment_late"  /></Cell>
        <Cell><List title="done" icon="assignment_turned_in"  /></Cell>
      </LayoutGrid>
   </Container>
</main>

<style lang="scss">
  .layout{ width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;  }
</style>