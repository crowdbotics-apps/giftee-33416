export let RootNavigation = {
  addListener(type, callback) {
    return () => {};
  },
  canGoBack() {
    return false;
  },
  isReady() {
    return false;
  },
  getParent() {
    // @ts-ignore
    return undefined;
  },

  getState() {
    // @ts-ignore
    return undefined;
  },
  dispatch(action) {},
  emit(...args) {
    // @ts-ignore
    return undefined;
  },
  getCurrentOptions() {
    return undefined;
  },
  getCurrentRoute() {
    return undefined;
  },
  getRootState() {
    return {
      index: 0,
      key: '',
      routeNames: [],
      routes: [],
      stale: false,
      type: '',
    };
  },
  goBack() {},
  isFocused() {
    return false;
  },
  removeListener(type, callback) {},
  reset(state) {},
  resetRoot(state) {},
  setParams(params) {},
  navigate(...args) {},
};
export const setRootNavigation = ref => {
  // RootNavigation = ref;
  for (const method in RootNavigation) {
    RootNavigation[method] = (...args) => {
      if (ref.current) {
        return ref.current[method](...args);
      }
    };
  }
};
