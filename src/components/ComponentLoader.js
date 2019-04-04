import React, { useState, Component } from 'react';

import Loadable from 'react-loadable'

const componentSet = [
    'Header', 'Text'
]


class ComponentLoader extends Component {
  state = { modules: [], active: [] };

  toggleModule = (nome) => {
    const { active } = this.state, modules = [];
    let i = active.indexOf(nome);
    if (i > -1) active.splice(i, 1);
    else active.push(nome);
    active.map(m => {
      modules.push(Loadable({
        loader: () => import('./'+m),
        loading: () => <div>Loading { m }...</div>,
      }));
    });
    this.setState({ ...this.state, modules, active });
  }
  render() {
    const { modules, active } = this.state;
    return (
      <div>
        { modules.map((item, i) => {
          let Module = modules[i]
          return <Module key={i} />
        }) }
        <ul>
          { componentSet.map((name, i) => (
            <li key={i}>
              { name }
              <input type="checkbox"
                checked={active.indexOf(name) > -1}
                onClick={e => this.toggleModule(name)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const ComponentLoader = () => {

//     const [modules, setModules] = useState([])
//     const [active, setActive] = useState([])

//     const toggleModule = (nome) => {
//         // Add or remove from list
//         let i = active.indexOf(nome);
//         if (i > -1) active.splice(i, 1);
//         else active.push(nome);
//         // Create loadables. THIS IS THE MAGIC!
//         active.map(m => {
//         return modules.push(Loadable({
//             loader: () => import('./'+m), // Here can be any component!
//             loading: () => <div>Loading { m }...</div>,
//         }));
//         });
//         this.setState({ ...this.state, modules, active });
//     }


//     return <><h1>Hola vengo a flotar!</h1></>
// }

export default ComponentLoader;