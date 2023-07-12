import { Container, ThemeOptions } from '@mui/material';
import Stack from '@mui/joy/Stack';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { column } from '../../components/datatable/dataSource';
import Datatable from '../../components/datatable/Datatable';
import {
  getBreedsAction,
  getBreedsIdAction,
} from '../../store/actions/cat.action';
import CatBreedModal from './CatBreedModal';
import StandardImageList from '../../components/ImageList/ImageList';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    marginTop: '20px',
    width: '100%',
  },
}));

const Breeds = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { breeds, breed } = useSelector((state: RootState) => state.cat);

  const dispatch = useDispatch();

  useEffect(() => {
    getBreedsAction(dispatch);
  }, [dispatch]);

  const getIdBreed = (id: string) => {
    getBreedsIdAction(dispatch, id);
    if (breed && breed.length > 0 && breed[0].breeds.length > 0) {
      const name = breed[0].breeds[0].name;
      setName(name);
    }
  };

  return (
    <div className={classes.container}>
      <Container maxWidth={'xl'}>
        <Stack mb={2}>
          <Datatable
            list={breeds}
            column={column}
            name='Breeds'
            setOpen={setOpen}
            getIdBreed={getIdBreed}
          />
        </Stack>
        {open && (
          <CatBreedModal open={open} setOpen={setOpen} name={name}>
            <StandardImageList breed={breed} name={name} />
          </CatBreedModal>
        )}
      </Container>
    </div>
  );
};

export default Breeds;
