import react, {Component} from 'react';
import Node from './Node/Node';

import './Sudoku.css';

export default class Sudoku extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>Test <Node></Node>
            </div>
        )
    }
}