import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IBreed, ICat } from '../../store/reducers/cat.reducer';
import { IconButton, ImageListItemBar, ListSubheader } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

interface IProp {
  breed: ICat[];
  name: string;
}

export default function StandardImageList({ breed, name }: IProp) {
    const handleNavigation = (item: IBreed[]) => {
        if(item.length > 0) {
            window.location.href  = item[0].wikipedia_url
        }
      };

  return (
    <ImageList sx={{ width: 500, height: 500 }}>
      <ImageListItem key='Subheader' cols={2}>
        <ListSubheader component='div'>{name}</ListSubheader>
      </ImageListItem>
      {breed &&
        breed.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.breeds.length > 0 ? item.breeds[0].name : ''}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.breeds.length > 0 ? item.breeds[0].name : ''}
              subtitle={item.breeds.length > 0 ? item.breeds[0].name : ''}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${
                    item.breeds.length > 0 ? item.breeds[0].name : ''
                  }`}
                  onClick={() => handleNavigation(item.breeds)}
                >
                 <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}
