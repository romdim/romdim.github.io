<script>
  import CompanyCarousel from './CompanyCarousel.svelte';
  import CompanyInfo from './CompanyInfo.svelte';

  import type Company from '../../typings/Components/Company';
  import type Columns from '../../typings/Components/Columns';

  export let company: Company;
  const name: string = company.name;
  const columns: Columns = company.columns;
</script>

<div class="col-span-full lg:col-start-{columns.start} lg:col-span-{columns.span} {columns['3xl'] ? `3xl:col-start-${columns['3xl'].start} 3xl:col-span-${columns['3xl'].span} ` : '' }mt-10 md:mt-12.5 lg:mt-15 3xl:mt-17 company-{name}">
  <CompanyCarousel
    name={company.name}
    nameC={company.nameC}
    carousel={company.carousel}
    columns={company.columns}
  />
  <CompanyInfo
    name={company.name}
    employerText={company.employerText}
    roleText={company.roleText}
    tools={company.tools}
  />
</div>
