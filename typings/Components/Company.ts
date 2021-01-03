import type CarouselItem from './CarouselItem';
import type Columns from './Columns';

type Company = {
  name: string,
  nameC?: string,
  columns: Columns,
  carousel: CarouselItem[],
  employerText: string,
  roleText: string,
  tools: string[],
};

export default Company;