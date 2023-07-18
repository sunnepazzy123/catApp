import { Button, Container, Grid, Typography } from '@mui/material';
import MediaCard from '../../components/Cards/Card';
import './cat.scss';
import Stack from '@mui/joy/Stack';
import { useEffect, useState } from 'react';
import BasicModalDialog from '../../components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  getCatIdAction,
  getCatsAction,
  getMoreAction,
} from '../../store/actions/cat.action';
import { useStyles } from '../../styles';

const Cats = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { cats } = useSelector((state: RootState) => state.cat);

  const dispatch = useDispatch();

  useEffect(() => {
    getCatsAction(dispatch);
  }, [dispatch]);

  const viewCat = (id: string) => {
    getCatIdAction(dispatch, id, cats);
    setOpen(!open);
  };

  const getRandomCats = () => {
    getMoreAction(dispatch);
  };

  return (
    <div className={classes.container}>
      <Container maxWidth={'xl'}>
        <Stack mt={2} mb={2}>
          <Typography gutterBottom variant='h5' component='div'>
            List of Cats
          </Typography>
        </Stack>
        <Stack mb={2}>
          <Stack>
            <Grid
              container
              spacing={2}
              xl={12}
              height={'80%'}
              overflow={'scroll'}
            >
              {cats.map((cat) => (
                <Grid xs={12} sm={6} md={3} lg={3} xl={3} key={cat.id} item>
                  <MediaCard
                    viewCat={viewCat}
                    cat={cat}
                    open={open}
                    setOpen={setOpen}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
        <Stack>
          <div>
            <Button onClick={getRandomCats}>Load more</Button>
          </div>
        </Stack>
        {open && <BasicModalDialog open={open} setOpen={setOpen} />}
      </Container>
    </div>
  );
};

export default Cats;
