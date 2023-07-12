import React from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import './breed.scss';

interface IModalProp {
  open: boolean;
  children?: any;
  setOpen: (arg: boolean) => void;
  name: string;
}

const CatBreedModal: React.FC<IModalProp> = ({
  open,
  children,
  setOpen,
  name,
}) => {
  const close = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Modal open={open} onClose={close}>
        <ModalDialog
          aria-labelledby='basic-modal-dialog-title'
          aria-describedby='basic-modal-dialog-description'
          sx={{ maxWidth: 700, height: 500 }}
        >
          <Typography id='basic-modal-dialog-title' component='h2'>
            Cat Breed: {name}
          </Typography>
          {children}
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default CatBreedModal;
