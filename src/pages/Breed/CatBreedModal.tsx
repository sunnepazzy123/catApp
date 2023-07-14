import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import './breed.scss';

interface IModalProp {
  open: boolean;
  children?: any;
  setOpen: (arg: boolean) => void;
}

const CatBreedModal: React.FC<IModalProp> = ({ open, children, setOpen }) => {
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
          {children}
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default CatBreedModal;
