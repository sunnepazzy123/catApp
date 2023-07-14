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
import { useStyles } from '../../styles';

const Breeds = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { breeds, breed } = useSelector((state: RootState) => state.cat);

  const dispatch = useDispatch();

  useEffect(() => {
    getBreedsAction(dispatch);
  }, [dispatch]);

  const getIdBreed = (id: string) => {
    getBreedsIdAction(dispatch, id);
  };

  return (
    <div className={classes.wrapper}>
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
          <CatBreedModal open={open} setOpen={setOpen}>
            <StandardImageList cat={breed} />
          </CatBreedModal>
        )}
      </Container>
    </div>
  );
};

export default Breeds;
