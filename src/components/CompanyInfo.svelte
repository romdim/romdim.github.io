<script>
  import Tools from './Tools.svelte';

  export let name: string;
  export let employerText: string;
  export let roleText: string;
  export let tools: string[];
</script>

<style>
  @media (min-width: 1024px) {
    .info {
      width: 764px;
      /* In the center of media */
      left: calc(50% - 1.75rem);
    }
  }
  
  .info {
    /* --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
    /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
    box-shadow: -2px 2px 4px 1px #e7e7e7;

    input:not(:checked) + label {
      cursor: pointer;
    }
    
    input:checked + label {
      z-index: 10;
      --tw-bg-opacity: 1;
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgba(0, 0, 0, var(--tw-text-opacity));
    }
  
    .input-employer:checked ~ .tab-employer,
    .input-role:checked ~ .tab-role {
      display: block;
    }
  }

  @media (min-width: 768px) {
    .info {
      box-shadow: 2px 2px 4px 1px #e7e7e7;
    }
  }
</style>

<div class="relative lg:transform lg:-translate-x-1/2 py-5 px-3.5 md:px-5 lg:p-7.5 font-mono z-10 max-w-full text-lg md:w-10/12 ml-3 md:m-auto lg:m-0 info">
  <div class="absolute top-0 left-1/2 w-20 h-8 md:h-10 lg:h-13 bg-black transform -translate-x-1/2 md:-translate-y-full"></div>

  <input class="hidden input-employer" type="radio" name="{name}-tabs" id="{name}-employer" checked />
  <label class="absolute top-0 left-1/2 w-1/2 md:w-32 lg:w-40 h-8 md:h-10 lg:h-13 py-1 px-3 bg-black text-white text-sm md:text-lg lg:text-xl md:rounded-tl-2.5xl rounded-tr-2.5xl transform -translate-x-full md:-translate-y-full flex items-center justify-center" for="{name}-employer">Employer</label>

  <input class="hidden input-role" type="radio" name="{name}-tabs" id="{name}-role" />
  <label class="absolute top-0 left-1/2 w-1/2 md:w-32 lg:w-40 h-8 md:h-10 lg:h-13 py-1 px-3 bg-black text-white text-sm md:text-lg lg:text-xl md:rounded-tr-2.5xl rounded-tl-2.5xl transform md:-translate-y-full flex items-center justify-center" for="{name}-role">Role</label>

  <div class="hidden tab-employer mt-8 md:mt-0">
    <p class="whitespace-pre-line text-justify text-xs md:text-base lg:text-xl">{employerText}</p>
    <Tools tools={tools} />
  </div>
  <div class="hidden tab-role mt-8 md:mt-0">
    <p class="whitespace-pre-line text-justify text-xs md:text-base lg:text-xl">{roleText}</p>
    <Tools tools={tools} />
  </div>
</div>