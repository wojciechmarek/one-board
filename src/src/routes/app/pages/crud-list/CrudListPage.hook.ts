import { ID, Permission, Role } from 'appwrite';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { account, databases } from '../../../../api/app-write';
import { Task, TaskDocument } from '../../../../models/collections/task.type';

export const useCrudListPage = () => {
  const [tasks, setTasks] = useState<TaskDocument[]>([]);
  const [tasksInTotal, setTasksInTotal] = useState<number>(0);
  const [taskInEdit, setTaskInEdit] = useState<TaskDocument | null>(null);

  const handleOnCreateRandomTaskClick = async () => {
    const id = (await account.get()).$id;
    const ownerRole = Role.user(id);
    console.log(ownerRole);

    try {
      const result = databases.createDocument(
        '675888e1000a50f3930d',
        '67588bbd0004ee2779b3',
        ID.unique(),
        {
          taskName: 'Task - ' + new Date().toISOString(),
          isDone: !!(new Date().getSeconds() % 2),
        },
        [Permission.read(ownerRole), Permission.update(ownerRole), Permission.delete(ownerRole)]
      );

      toast.promise(result, {
        pending: 'Creating a random item.',
        success: 'The random item created successfully.',
        error: 'The random item could not be created.',
      });
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
  };

  const handleOnEditTaskClick = async (task: TaskDocument) => {
    setTaskInEdit(task);
  };

  const handleOnEditModalSaveClick = async (task: TaskDocument) => {
    const data: Task = {
      taskName: task.taskName,
      description: task.description,
      isDone: task.isDone,
    };

    const result = databases.updateDocument(task.$databaseId, task.$collectionId, task.$id, data);

    await toast.promise(result, {
      pending: 'Updating the task.',
      success: 'The task updated successfully.',
      error: 'The task could not be updated.',
    });

    setTaskInEdit(null);
  };

  const handleOnEditModalCancelClick = () => {
    setTaskInEdit(null);
  };

  const handleOnDeleteTaskClick = async (task: TaskDocument) => {
    const result = databases.deleteDocument(task.$databaseId, task.$collectionId, task.$id);
    toast.promise(result, {
      pending: 'Deleting.',
      success: 'Task deleted successfully.',
      error: 'Task could not be deleted.',
    });
  };

  const fetchTasks = async () => {
    const result = await databases.listDocuments('675888e1000a50f3930d', '67588bbd0004ee2779b3');

    setTasks(result.documents as TaskDocument[]);
    setTasksInTotal(result.total);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    tasksInTotal,
    taskInEdit,
    handleOnCreateRandomTaskClick,
    handleOnDeleteTaskClick,
    handleOnEditTaskClick,
    handleOnEditModalSaveClick,
    handleOnEditModalCancelClick,
  };
};
