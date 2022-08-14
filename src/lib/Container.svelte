<script lang="ts">
</script>

<style>
    .contianer{ 
        width: 80vw; min-height: 50%; max-height: 80%; border-radius: 4px;  
        display: flex; flex-direction: column;
        box-shadow: var(--shadowColor); padding: 16px 0; 
    }
</style>

<section class="contianer">
     <slot/>
</section>