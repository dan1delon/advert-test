import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    type: '',
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.location = action.payload;
    },
    changeEquipmentFilter(state, action) {
      const equipment = action.payload;
      state.equipment = equipment;
    },
    changeTypeFilter(state, action) {
      state.type = action.payload;
    },
    resetFilters(state) {
      state.location = '';
      state.equipment = [];
      state.type = '';
    },
  },
});

export const {
  changeLocationFilter,
  changeEquipmentFilter,
  changeTypeFilter,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
