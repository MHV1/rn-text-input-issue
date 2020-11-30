import { UpdateModuleValuesActionPayload } from '../types';

export const updateModuleValues = (payload: UpdateModuleValuesActionPayload) => ({
  type: 'UPDATE_VALUES',
  payload,
});
