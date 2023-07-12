import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions, Link, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ICat } from '../../store/reducers/cat.reducer';
import { addFavoriteAction } from '../../store/actions/cat.action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Typography } from '@mui/material';

interface IMediaProps {
  cat: ICat;
  mode?: string | undefined;
  renderBreed?: (cat: ICat | null) => any;
  viewCat?: (id: string) => void;
  open?: boolean;
  setOpen?: (state: boolean) => void;
}

export default function MediaCard({
  viewCat,
  cat,
  mode,
  renderBreed,
}: IMediaProps) {
  const dispatch = useDispatch();
  const [copy, setCopy] = React.useState(false);
  const { cats, favorites } = useSelector((state: RootState) => state.cat);
  const handleCardMode = (id: string, mode: string | undefined) => {
    if (mode === 'modal') {
      return;
    }
    viewCat && viewCat(id);
  };

  const addFavorite = (id: string) => {
    addFavoriteAction(dispatch, id, cats);
  };

  const checkFavoriteHandler = () => {
    const item = favorites.some((favorite) => favorite.id === cat.id);
    return item;
  };

  const copyLinkToClipboard = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        // Handle successful copying
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 1000);
      })
      .catch((error) => {
        // Handle error if copying fails
        console.error('Failed to copy link to clipboard:', error);
      });
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 300, borderRadius: 2, cursor: 'pointer' }}
        onClick={() => handleCardMode(cat.id, mode)}
      >
        <CardMedia
          sx={{ height: 150, width: 300 }}
          image={`${cat.url}`}
          title='green iguana'
        />
        {renderBreed && renderBreed(cat)}
        {renderBreed && cat && (
          <div>
            <Stack p={'10px'} flexDirection={'row'}>
              <FavoriteIcon
                onClick={() => addFavorite(cat.id)}
                color={checkFavoriteHandler() ? 'warning' : 'disabled'}
              />
              {checkFavoriteHandler()
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </Stack>
            <CardActions>
              <Button size='small' onClick={() => copyLinkToClipboard(cat.url)}>
                Copy Url
              </Button>
              <Link
                href={`${cat.url}`}
                sx={{ textDecoration: 'none' }}
                rel='noopener'
              >
                Link
              </Link>
              {copy && <Typography ml={'5px'}>copied</Typography>}
            </CardActions>
          </div>
        )}
      </Card>
    </div>
  );
}
