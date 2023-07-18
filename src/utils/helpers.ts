import { ICat } from '../store/reducers/cat.reducer';

export const getBreedName = (cat: ICat | null) => {
  let name = '';
  if (cat && cat.breeds.length > 0) {
    name = cat.breeds[0].name;
    return name;
  }
  return name;
};
