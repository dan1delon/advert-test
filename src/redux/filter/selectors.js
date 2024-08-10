import { createSelector } from '@reduxjs/toolkit';
import { selectAdverts } from '../ads/selectors';

export const selectFilters = state => state.filters;
export const selectLocation = state => state.filters.location;
export const selectEquipment = state => state.filters.equipment;
export const selectType = state => state.filters.type;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) => {
    const { location, equipment, type } = filters;

    return adverts.filter(ad => {
      const adLocation = ad.location ? ad.location.toLowerCase() : '';
      const adEquipment = Object.keys(ad.details || {}).filter(
        key => ad.details[key] > 0
      );
      const matchesLocation = location
        ? adLocation.includes(location.toLowerCase())
        : true;
      const matchesEquipment = equipment.length
        ? equipment.every(equip => adEquipment.includes(equip))
        : true;
      const matchesType = type ? ad.form === type : true;

      return matchesLocation && matchesEquipment && matchesType;
    });
  }
);
