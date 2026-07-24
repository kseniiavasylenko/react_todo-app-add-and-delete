import React from 'react';
import classNames from 'classnames';
import { Todo as TodoType } from '../../types/Todo';

type Props = {
  todo: TodoType;
  isLoading?: boolean;
  onDelete?: (todoId: number) => void;
};

export const Todo: React.FC<Props> = ({
  todo,
  isLoading = false,
  onDelete,
}) => {
  const { id, completed, title } = todo;

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', {
        completed,
      })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={completed}
          readOnly
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => onDelete?.(id)}
      >
        ×
      </button>

      <div
        data-cy="TodoLoader"
        className={classNames('modal', 'overlay', {
          'is-active': isLoading,
        })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};