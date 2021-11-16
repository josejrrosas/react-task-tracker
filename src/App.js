import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at job",
      day: "Mar 10th at 4:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting at work",
      day: "Dec 8th at 7:30pm",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
