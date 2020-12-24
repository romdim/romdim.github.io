<script>
  export let tools: string[];
</script>

<div class="flex flex-row-reverse mt-7.5 w-100 space-x-5 space-x-reverse tools">
  {#each tools as tool}
    <img class="h-5" src="img/tools/{tool}.svg" alt="{tool}" title="{tool}">
  {/each}
</div>