import { ColumnFilterItem } from 'antd/lib/table/interface';
import _ from 'lodash';
import { dateSorter, genericSorter } from '../../global/global_utils';

export interface IFilterMap {
  [key: string]: ColumnFilterItem[];
}

export function filterMap<T>(
  columns: string[],
  data: T[],
  formatter: (key: string, d: T) => any
): IFilterMap {
  const filterMap: IFilterMap = {};
  columns.forEach(key => {
    filterMap[key] = _.uniq(data.map(item => formatter(key, item)).flat())
      .sort()
      .map(item => ({
        text: item || 'No Value',
        value: item || ''
      }));
  });

  return filterMap;
}

const ColumnWithFilter = (title: string, id: string, filterMap?: IFilterMap, width?: number) => {
  return {
    title: title,
    dataIndex: id,
    key: id,
    width: width,
    filters: filterMap && filterMap[id],
    filterSearch: true,
    onFilter: (value: any, record: any) => {
      if (!value && !record[id]) {
        return true;
      }
      return (
        value &&
        record[id] &&
        record[id].toLocaleString().toLowerCase().includes(value.toLowerCase())
      );
    }
  };
};

export const DateColumn = (title: string, id: string, filterMap: IFilterMap, width?: number) => {
  return {
    ...ColumnWithFilter(title, id, filterMap, width),
    sorter: (a: any, b: any, sortOrder: any) => dateSorter(a, b, id, sortOrder)
  };
};

export const TextColumn = (
  title: string,
  id: string,
  filterMap?: IFilterMap,
  width?: any,
  noSorter?: boolean
) => {
  return !noSorter
    ? width
      ? {
          ...ColumnWithFilter(title, id, filterMap, width),
          sorter: (a: any, b: any, sortOrder: any) => genericSorter(a, b, id, sortOrder)
        }
      : {
          ...ColumnWithFilter(title, id, filterMap),
          sorter: (a: any, b: any, sortOrder: any) => genericSorter(a, b, id, sortOrder)
        }
    : width
    ? { ...ColumnWithFilter(title, id, filterMap, width) }
    : { ...ColumnWithFilter(title, id, filterMap) };
};
