import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { DocumentIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, CardHeader, Chip, IconButton, Input, Typography } from '@material-tailwind/react';
import { TaskDocument } from '../../../../../models/collections/task.type';

const TABLE_HEAD = [
  {
    head: 'Task name',
    customStyle: '!text-left',
  },
  {
    head: 'Description',
    customStyle: 'text-right',
  },
  {
    head: 'Status',
    customStyle: 'text-right w-4',
  },
  {
    head: 'Actions',
    customStyle: 'text-right w-4',
  },
];

type Props = {
  tasks: TaskDocument[];
  onDeleteClick: (task: TaskDocument) => void;
  onEditClick: (task: TaskDocument) => void;
};

const ItemList = (props: Props) => {
  const { tasks, onDeleteClick, onEditClick } = props;

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none flex flex-wrap gap-4 justify-between mb-4">
        <div>
          <Typography variant="h6" color="blue-gray">
            List of the todo items.
          </Typography>
          <Typography variant="small" className="text-gray-600 font-normal mt-1">
            Manage, edit and delete your tasks.
          </Typography>
        </div>
        <div className="flex items-center w-full shrink-0 gap-4 md:w-max">
          <div className="w-full md:w-72">
            <Input size="lg" label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
          <Button variant="outlined" className="flex items-center gap-2">
            24h
            <ChevronDownIcon strokeWidth={3} className="w-3 h-3" />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll !px-0 py-2">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map(({ head, customStyle }) => (
                <th key={head} className={`border-b border-gray-300 !p-4 pb-8 ${customStyle}`}>
                  <Typography color="blue-gray" variant="small" className="!font-bold">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, index) => {
              const isLast = index === tasks.length - 1;
              const classes = isLast ? '!p-4' : '!p-4 border-b border-gray-300';
              return (
                <tr key={item.$id}>
                  <td className={classes}>
                    <Typography variant="small" className="!font-normal text-gray-600 text-left">
                      {item.taskName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="!font-normal text-gray-600 text-right">
                      {item.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {item.isDone ? (
                      <Chip color="green" value="Done" className="inline" />
                    ) : (
                      <Chip color="red" value="Not yet" className="inline" />
                    )}
                  </td>
                  <td className={classes}>
                    <div className="flex justify-end gap-4">
                      <IconButton variant="text" size="sm">
                        <DocumentIcon className="h-5 w-5 text-gray-900" onClick={() => onEditClick(item)} />
                      </IconButton>
                      <IconButton variant="text" size="sm">
                        <XMarkIcon className="h-5 w-5 text-gray-900" onClick={() => onDeleteClick(item)} />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default ItemList;
