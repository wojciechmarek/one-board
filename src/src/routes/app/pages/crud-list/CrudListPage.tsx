import { Button } from '@material-tailwind/react';

import EditFormModal from './components/EditFormModal';
import ItemList from './components/ItemList';
import { useCrudListPage } from './CrudListPage.hook';

export const CrudListPage = () => {
  const {
    tasks,
    tasksInTotal,
    taskInEdit,
    handleOnCreateRandomTaskClick,
    handleOnDeleteTaskClick,
    handleOnEditTaskClick,
    handleOnEditModalSaveClick,
    handleOnEditModalCancelClick,
  } = useCrudListPage();

  return (
    <section className="">
      <div className="flex flex-row mb-4">
        <Button onClick={handleOnCreateRandomTaskClick}>Create random item</Button>
      </div>
      <p>Tasks in total: {tasksInTotal}</p>
      <EditFormModal
        isOpen={!!taskInEdit}
        task={taskInEdit!}
        onSaveClick={handleOnEditModalSaveClick}
        onCloseClick={handleOnEditModalCancelClick}
      />
      <ItemList tasks={tasks} onDeleteClick={handleOnDeleteTaskClick} onEditClick={handleOnEditTaskClick} />
    </section>
  );
};
