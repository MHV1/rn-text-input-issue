export interface AppStore {
  moduleValues: ModuleValuesState;
}

export interface ModuleValuesState {
  [itemId: string]: string;
}

export interface FormModule {
  id: string;
  title: string;
}

export interface UpdateModuleValuesActionPayload {
  moduleId: string;
  value: string;
}

export interface Action {
  type: string;
  payload: UpdateModuleValuesActionPayload;
}
