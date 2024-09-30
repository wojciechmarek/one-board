import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { TaskDocument } from '../../../../../models/collections/task.type';

export type Props = {
  isOpen: boolean;
  task: TaskDocument;
  onCloseClick: () => void;
  onSaveClick: (task: TaskDocument) => void;
};

const EditFormModal = (props: Props) => {
  const { task, isOpen, onCloseClick, onSaveClick } = props;

  const { register, getValues } = useForm<TaskDocument>({
    values: task,
  });

  const handleOnCloseClick = () => {
    onCloseClick();
  };

  const handleOnSaveClick = () => {
    const values = getValues();
    onSaveClick({
      ...task,
      ...values,
    });
  };

  return (
    <Dialog open={isOpen} handler={handleOnCloseClick}>
      <DialogHeader>Todo item edit</DialogHeader>

      <DialogBody>
        <Input label="Task name" className="mb-2" {...register('taskName')} />
        <Textarea label="Description" {...register('description')} />
        <Checkbox label="Is done" {...register('isDone')} />
      </DialogBody>

      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOnCloseClick} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOnSaveClick}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default EditFormModal;
