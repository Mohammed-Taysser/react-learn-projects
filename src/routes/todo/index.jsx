import React from 'react';
import { Route } from '../../components/CustomRouter';

import TodoDashboard from '../../components/todo';
import TodoV1 from '../../components/todo/v1';

import { TASKS } from '../../static/Data';

function Todo() {
  return (
    <>
      <Route path='/todo'>
        <TodoDashboard />
      </Route>
      <Route path='/todo/v1'>
        <TodoV1 tasks={TASKS} />
      </Route>
    </>
  );
}

export default Todo;
