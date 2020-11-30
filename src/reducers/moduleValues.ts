import { Action, ModuleValuesState } from '../types';

export default (state: ModuleValuesState = {}, action: Action) => {
  if (action.type === 'UPDATE_VALUES') {
    return { ...state, [action.payload.moduleId]: action.payload.value };
  }

  return state;
};
