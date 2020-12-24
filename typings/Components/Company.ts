import type CarouselItem from './CarouselItem';

type Company = {
  name: string,
  nameC?: string,
  start: number,
  span: number,
  carousel: CarouselItem[],
  employerText: string,
  roleText: string,
  tools: string[],
};

export default Company;