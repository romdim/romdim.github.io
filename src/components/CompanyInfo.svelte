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
      width: 622px;
      /* In the center of media (half of ul) */
      left: calc(50% - 0.9375rem);
    }
  }

  @media (min-width: 1440px) {
    .info {
      width: 764px;
      /* In the center of media (half of ul) */
      left: calc(50% - 1.0625rem);
    }
  }

  @media (min-width: 1920px) {
    .info {
      /* In the center of media (half of ul) */
      left: calc(50% - 1.625rem);
    }
  }
  
  .info {
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
</style>

<div class="relative lg:transform lg:-translate-x-1/2 z-10 ml-3 md:m-auto lg:m-0 py-4 px-3.5 md:px-5 lg:p-7.5 md:w-10/12 max-w-full font-mono text-lg info">
  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 md:-translate-y-full bg-black w-20 h-8 md:h-10 2xl:h-13"></div>

  <input class="hidden input-employer" type="radio" name="{name}-tabs" id="{name}-employer" checked />
  <label class="absolute top-0 left-1/2 flex items-center justify-center transform -translate-x-full md:-translate-y-full md:rounded-tl-2.5xl rounded-tr-2.5xl bg-black px-3 py-1 w-1/2 md:w-32 2xl:w-40 h-8 md:h-10 2xl:h-13 text-white text-sm md:text-lg 2xl:text-xl" for="{name}-employer">Employer</label>

  <input class="hidden input-role" type="radio" name="{name}-tabs" id="{name}-role" />
  <label class="absolute top-0 left-1/2 flex items-center justify-center transform md:-translate-y-full md:rounded-tr-2.5xl rounded-tl-2.5xl bg-black px-3 py-1 w-1/2 md:w-32 2xl:w-40 h-8 md:h-10 2xl:h-13 text-white text-sm md:text-lg 2xl:text-xl" for="{name}-role">Role</label>

  <div class="hidden mt-8 md:mt-0 tab-employer">
    <p class="text-justify whitespace-pre-line text-xs md:text-base 2xl:text-lg">{employerText}</p>
    <Tools tools={tools} />
  </div>
  <div class="hidden mt-8 md:mt-0 tab-role">
    <p class="text-justify whitespace-pre-line text-xs md:text-base 2xl:text-lg">{roleText}</p>
    <Tools tools={tools} />
  </div>
</div>