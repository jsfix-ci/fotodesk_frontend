import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices';

export const store = configureStore({
  reducer: rootReducer,
});

export class StoreKeeper {
  public static store: EnhancedStore;
}

export type RootState = ReturnType<typeof rootReducer>;

StoreKeeper.store = store;
