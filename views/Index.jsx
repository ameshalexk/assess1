const React = require('react');

class Index extends React.Component {
  render() {
      const logs = this.props.logs;
    return (
        <div>
            <h1>Captains Logs</h1>
                       {logs.map((ele,idx)=> {
                           return (<ul key={ele._id}> 
                             <li key={ele._id}>  <a href={`/logs/${ele._id}`}> {ele.title.charAt(0).toUpperCase() + ele.title.slice(1)} </a> 
                             </li>
                             </ul>)
                       })}
                   <nav>
    <a href="/logs/new">Create a New Log</a>
</nav>
        </div>);
  }
}

module.exports = Index;