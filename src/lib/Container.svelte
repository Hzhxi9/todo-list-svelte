<script lang="ts">
     import Button, { Label } from '@smui/button';
     let clicked;
</script>

<style></style>

<section>
    <Button on:click={() => clicked++} variant="raised">
        <Label>Raised</Label>
    </Button>
</section>