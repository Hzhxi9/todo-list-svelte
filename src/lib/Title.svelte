<script lang="ts">
    import { Icon } from '@smui/common';
    export let title
    export let icon: string | undefined = undefined;
</script>

<style lang="scss">
    .title {
        color: #666; margin: 0 5px;
        & > :global(.icon) { color: #999; margin-right: 5px; width: 0; flex: 1; }
    }
    
</style>

<h3 class="flex title">
    {#if icon}<Icon class="material-icons icon">{icon}</Icon>{/if}
    <p>{title}</p>
</h3>