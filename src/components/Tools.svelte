<script>
  export let tools: string[];
</script>

<div class="flex flex-wrap mt-3.5 2xl:mt-7.5 space-x-2.5 md:space-x-5">
  {#each tools as tool}
    <img class="h-3 md:h-5" src="img/tools/{tool}.svg" alt="{tool}" title="{tool}">
  {/each}
</div>