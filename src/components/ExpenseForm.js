import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
      description: '',
      note: '',
      amount: ''
    };
    onDescriptionChange = (e) => {
       const description = e.target.value;
       this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
       const note = e.target.value;
       this.setState(() => ({ note }));
    };
    render() {
        return (
         <div>
             <form> 
               <input
                 type="text"
                 placeholder="Description"
                 autoFocus
                 value={this.state.description}
                 onChange={this.onDescriptionChange}
               />
               <input
                 type="number"
                 placeholder="Amount"
                 value={this.state.amount}
                />
                <textArea
                 placeholder="Add a note for your expense (optional)"
                 value={this.state.note}
                 onChange={this.onNoteChange}
                 >
                </textArea>
                <button>Add Expense</button>
             </form>
         </div>
        );
    }
}