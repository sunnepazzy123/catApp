import { Button } from '@mui/material';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

interface IDatatableProps {
  list: any;
  column: any;
  name: string;
  setOpen?: (arg: boolean) => void;
  getIdBreed?: (id: string) => void;
  remove?: boolean;
  view?: boolean;
  deleteHandler?: (id: string) => void;
}

const Datatable = ({
  list,
  column,
  name,
  setOpen,
  getIdBreed,
  remove,
  deleteHandler,
}: IDatatableProps) => {
  const viewHandler = (id: string) => {
    if (setOpen) {
      getIdBreed && getIdBreed(id);
      setOpen(true);
    }
  };

  const removeHandler = (id: string) => {
    deleteHandler && deleteHandler(id);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params: any) => {
        if (remove) {
          return (
            <div className='cellAction'>
              <Button
                onClick={() => removeHandler(params.row.id)}
                style={{ textDecoration: 'none' }}
              >
                <div className='viewButton'>Delete</div>
              </Button>
            </div>
          );
        }

        return (
          <div className='cellAction'>
            <Button
              onClick={() => viewHandler(params.row.id)}
              style={{ textDecoration: 'none' }}
            >
              <div className='viewButton'>View</div>
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <h2>{name}</h2>
      <DataGrid
        className='datagrid'
        rows={list}
        columns={column?.concat(actionColumn)}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Datatable;
