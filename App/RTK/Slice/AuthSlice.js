import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  authToken: '',
  biometric: false,
  user: null,
  profile: null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: INITIAL_STATE,
  reducers: {},
  // extraReducers: builder => {
  //   builder.addMatcher(AuthApi.endpoints.userLogin.matchFulfilled, (state, { payload }) => {
  //     state.authToken = payload.key;
  //     state.user = payload.user;
  //     state.profile = payload.profile;
  //     state.biometric = true;
  //   });
  //   builder.addMatcher(AuthApi.endpoints.userLogout.matchFulfilled, (state, { payload }) => {
  //     state.authToken = '';
  //     state.user = null;
  //     state.profile = null;
  //   });
  //   builder.addMatcher(AuthApi.endpoints.userLogout.matchRejected, (state, { payload }) => {
  //     state.authToken = '';
  //     state.user = null;
  //     state.profile = null;
  //   });
  // },
});

export default AuthSlice.actions;
export const { reducer } = AuthSlice;
