import { useSelector } from 'react-redux';

export const useIsSignedIn = () => {
  return useSelector((state) => state.auth.isSignedIn);
};

export const useUserId = () => {
  return useSelector((state) => state.auth.userId);
};

export const useStreams = () => {
  return useSelector((state) => state.streams);
};
