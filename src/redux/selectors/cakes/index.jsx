import { useSelector } from 'react-redux';

export const useCakes = () => {
  return useSelector((state) => state.cakes);
};

export const useIceCreams = () => {
  return useSelector((state) => state.ice_creams);
};

export const useMolto = () => {
  return useSelector((state) => state.moltos);
};

