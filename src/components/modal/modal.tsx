import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import MediaCard from '../Cards/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ICat } from '../../store/reducers/cat.reducer';
import { CardContent } from '@mui/material';

interface IModalProp {
  open: boolean;
  children?: any;
  setOpen: (arg: boolean) => void;
}

const BasicModalDialog: React.FC<IModalProp> = ({
  open,
  children,
  setOpen,
}) => {
  const { cat } = useSelector((state: RootState) => state.cat);
  const getName = () => {
      if(cat && cat.breeds.length > 0) {
        return cat.breeds[0].name
      }
      return 'No Name'
  }
  const close = () => {
    setOpen(!open);
  };

  const renderBreed = (cat: ICat | null) => {
    if (cat && Array.isArray(cat.breeds) && cat.breeds.length > 0) {
      const { life_span, description, name, wikipedia_url } = cat.breeds[0];
      const rendeItem = (
        <>
          <CardContent sx={{ wordBreak: 'break-word' }}>
            <Typography gutterBottom>Name: {name}</Typography>
            <Typography>Description: {description}</Typography>
            <Typography>LifeSpan: {life_span}</Typography>
            <Typography>Url: {wikipedia_url}</Typography>
          </CardContent>
        </>
      );
      return rendeItem;
    }
    return null;
  };

  return (
    <>
      <Modal open={open} onClose={close}>
        <ModalDialog
          aria-labelledby='basic-modal-dialog-title'
          aria-describedby='basic-modal-dialog-description'
          sx={{ maxWidth: 500 }}
        >
          <Typography id='basic-modal-dialog-title' component='h2'>
           {getName()}
          </Typography>
          {children}
          {cat && (
            <MediaCard mode='modal' cat={cat} renderBreed={renderBreed} />
          )}
        </ModalDialog>
      </Modal>
    </>
  );
};

export default BasicModalDialog;
