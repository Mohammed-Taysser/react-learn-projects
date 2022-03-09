import { useSelector } from "react-redux";

export const useWeather = ()=>{
  return useSelector(state => state.weather)
}