import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import '../JobsList.css';

const SortableItem = SortableElement(({value}: {value: string}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}: {items: string[]}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class JobsList2 extends React.Component<{}, {items: string[]}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: ['Manager', 'Manager 2', 'Manager 3', 'Manager 4', 'Manager 5', 'Manager 6']
    }
  }

  private onSortEnd = ({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };


  render() {
    return (
    <div className={'container'}>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
    </div>
    )
  }
}

export default JobsList2;