import dayjs from 'dayjs';

// table sorting -----------------------------------------------------------------------------------
const isNonEmpty = (value: any) => value && 'N/A' !== value;
const sortEmptyCell = (a: any, b: any, sortOrder?: string): number => {
  if (isNonEmpty(a) && !isNonEmpty(b)) return sortOrder === 'ascend' ? -1 : 1;
  else if (!isNonEmpty(a) && isNonEmpty(b)) return sortOrder === 'ascend' ? 1 : -1;
  return 0;
};

export const dateSorter = (a: any, b: any, date: string, sortOrder?: string) => {
  if (isNonEmpty(a[date]) && isNonEmpty(b[date]))
    return dayjs(a[date]).isAfter(b[date]) ? 1 : dayjs(a[date]).isBefore(b[date]) ? -1 : 0;
  else return sortEmptyCell(a[date], b[date], sortOrder);
};

export const genericSorter = (a: any, b: any, field: string, sortOrder?: string) => {
  if (isNonEmpty(a[field]) && isNonEmpty(b[field]))
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
  else return sortEmptyCell(a[field], b[field], sortOrder);
};