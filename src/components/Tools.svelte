<script>
  export let tools: string[];
</script>

<div class="flex flex-wrap flex-row-reverse mt-5 lg:mt-7.5 w-100 space-x-2.5 md:space-x-5 space-x-reverse">
  {#each tools as tool}
    <img class="h-3 md:h-5" src="img/tools/{tool}.svg" alt="{tool}" title="{tool}">
  {/each}
</div>