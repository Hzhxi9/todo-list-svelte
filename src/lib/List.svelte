<script lang="ts">
    import { Title } from './index';

    export let title = '';
    export let icon: string | undefined = ''
</script>

<style lang='scss'>
    /* .wrapper { width: 33.33%; } */
</style>

<section class="wrapper">
    <Title title={title} icon={icon} />
</section>