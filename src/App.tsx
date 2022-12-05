import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Home } from './Pages/Home';


const productList = [
  {
    title: 'Chocolate ', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/12115560/pexels-photo-12115560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/3740193/pexels-photo-3740193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/7440369/pexels-photo-7440369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/12286226/pexels-photo-12286226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/5848184/pexels-photo-5848184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  },
  {
    title: 'bbbe', 
    subtitle: 'sabjkb', 
    url: 'https://images.pexels.com/photos/6032704/pexels-photo-6032704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    price: 350,
    id: uuidv4()
  }
]

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Home productList={productList}/>
    );
  }
}

export default App;
