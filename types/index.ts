import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  page: string;
}

export interface SlideProps {
  offset?: string;
  children?: ReactNode;
}
