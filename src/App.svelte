<script lang="ts">
  import Button, { Label } from '@smui/button';
  let clicked;
</script>

<main>
  <Button on:click={() => clicked++} variant="raised">
    <Label>Todo</Label>
  </Button>
</main>

<style>
</style>