import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const defaultTodos = [
  {
    // What's the shape of our todo? id, description, deadline, image
    id: 1,
    description: 'The first todo',
    deadline: '2020-07-13T16:56:11.726Z',
    image: undefined,
    done: false,
  },
  {
    id: 2,
    description: 'The second todo',
    deadline: '2020-07-14T16:56:11.726Z',
    image: undefined,
    done: true,
  },
];

const firstTodo = {
  done: false,
};

const alteredTodo = {
  ...firstTodo,
  done: true,
};

export default function CheckboxList() {
  const classes = useStyles();

  // Create 'todos' and 'setTodos' with React.useState
  const [todos, setTodos] = React.useState(defaultTodos);

  const handleToggle = (id) => () => {
    // Find the todo in the todos array
    const findTodo = todos.find((todo) => {
      return id == todo.id;
    });

    // Set the new done value in the  todo we found

    const editDone = {
      ...findTodo,
      done: !findTodo.done,
    };

    // Put the todos back with the new todo
  };

  return (
    <List className={classes.root}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo}`;

        return (
          <ListItem
            key={todo}
            role={undefined}
            dense
            button
            onClick={handleToggle(todo.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={todo.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.description} />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='comments'>
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
