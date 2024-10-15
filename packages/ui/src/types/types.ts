import {
  ColumnDef as BaseColumnDef,
  AccessorFnColumnDef
} from '@tanstack/react-table';

export type ExtendedColumnDef<T, TValue> = BaseColumnDef<T, TValue> & {
  width?: number;
  type?: 'string' | 'number';
} & Partial<AccessorFnColumnDef<T, TValue>>;
