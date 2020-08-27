const React = require('react');

class Index extends React.Component {
  render() {
      const todos = this.props.todos;
      const test = (e) => {
        if(e.length > 0) {
          return (

            e.map((ele,idx)=> {
              return ( 
                <li key={ele._id}> {ele.todo} - {ele.done?'done':'not done'} </li>
                )
          })
          )
        } else {
          return <h3>There are no To Dos yet!</h3>
        }
      }
    return (
        <div>
          <title>Unit 2 Assessment</title>
            <h1>To Do List</h1>
            <ul>
              {test(todos)}
            </ul>
                   <hr/>
                   <form action="/" method="POST">
                <input type="text" name="todo" /><br/>
                <input type="submit" name="" value="ADD TO DO"/>
             </form>
        </div>);
  }
}

module.exports = Index;