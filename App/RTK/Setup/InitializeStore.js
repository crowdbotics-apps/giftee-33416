import CreateStore from './CreateStore';
import RootReducer from './RootReducer';

function InitializeStore() {
  const { reduxStore, persistor } = CreateStore();

  if (__DEV__ && module.hot) {
    module.hot.accept('./RootReducer', () => {
      const nextRootReducer = RootReducer;
      reduxStore.replaceReducer(nextRootReducer);
    });
  }

  return { reduxStore, persistor };
}

export default InitializeStore;
