import React from 'react';
import Datatable from '../../components/datatable/Datatable';
import { columnBreed } from '../../components/datatable/dataSource';
import { Container, ThemeOptions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoritesIdAction } from '../../store/actions/cat.action';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    marginTop: '20px',
    width: '100%',
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const { favorites } = useSelector((state: RootState) => state.cat);
  const dispatch = useDispatch();
  const deleteHandler = (id: string) => {
    deleteFavoritesIdAction(dispatch, id, favorites);
  };
  return (
    <div className={classes.container}>
      <Container maxWidth={'xl'}>
        <Datatable
          list={favorites}
          column={columnBreed}
          name='Favorites'
          remove
          deleteHandler={deleteHandler}
        />
      </Container>
    </div>
  );
};

export default Favorites;
