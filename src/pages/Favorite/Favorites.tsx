import Datatable from '../../components/datatable/Datatable';
import { columnBreed } from '../../components/datatable/dataSource';
import { Container } from '@mui/material';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoritesIdAction } from '../../store/actions/cat.action';
import { useStyles } from '../../styles';

const Favorites = () => {
  const classes = useStyles();
  const { favorites } = useSelector((state: RootState) => state.cat);
  const dispatch = useDispatch();
  const deleteHandler = (id: string) => {
    deleteFavoritesIdAction(dispatch, id, favorites);
  };
  return (
    <div className={classes.wrapper}>
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
