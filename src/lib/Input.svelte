

<script lang='ts'>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';


  export let value = ''
</script>

<style lang="scss">
    @media (min-width: 840px) {
        .text-field_container { 
            padding: 0 var(--mdc-layout-grid-margin-desktop);  
            & > :global(.text-field_wrapper) { width: 80%; }
        }
    }
    @media (min-width: 600px) and (max-width: 839px) {
        .text-field_container { 
            padding: 0 var(--mdc-layout-grid-margin-tablet);
            & > :global(.text-field_wrapper) { width: 100%; }
        }
    }
</style>

<div class="text-field_container">
    <Textfield variant="outlined" class="text-field_wrapper" bind:value={value} label="what needs to be done?">
        <Icon class="material-icons" slot="leadingIcon">event</Icon>
        <HelperText slot="helper">Add You need done</HelperText>
    </Textfield>
</div>

