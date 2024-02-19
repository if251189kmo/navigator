import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const tabButtons = (id: number) => [
  {
    icon: EditIcon,
    color: 'warning' as const,
    onClick: () => {
      console.log(id);
    },
  },
  {
    icon: DeleteIcon,
    color: 'error' as const,
    onClick: () => {
      console.log(id);
    },
  },
];

export { tabButtons };
