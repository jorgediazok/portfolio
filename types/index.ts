import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  page: string;
}

export interface SlideProps {
  offset?: string;
  children?: ReactNode;
}
