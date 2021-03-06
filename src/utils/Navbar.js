import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Container } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import './'

export default class Navbar extends Component {
    render() {
        console.log("text", this.props.text);
        return (
            <Container fluid>
                {/* <br /> */}
                {/* <Grid width={2}> */}
                <Menu attached='bottom' inverted >
                    <Dropdown item icon='bars' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <NavLink to="/binarysearch">
                                    <p className="text-dark thumb-title">
                                        Binary Search
                                </p>
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/dijkstra">
                                    <p className="text-dark thumb-title">
                                        Dijkstra's algorithm
                                </p>
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>

                                <NavLink to="/prims">
                                    <p className="text-dark thumb-title">
                                        Prim's algorithm
                                </p>
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item><NavLink to="/dfs">
                                <p className="text-dark thumb-title">
                                    Depth First Search
                                </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/bfs">
                                <p className="text-dark thumb-title">
                                    Breadth First Search
                                </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/krushkal">
                                <p className="text-dark thumb-title">
                                    Krushkal's algorithm
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/binarysearchtree">
                                    <p className="text-dark thumb-title">
                                        Binary Search Tree
                                </p>
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item><NavLink to="/bubblesort">
                                <p className="text-dark thumb-title">
                                    Bubble Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/selectionsort">
                                <p className="text-dark thumb-title">
                                    Selection Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/insertionsort">
                                <p className="text-dark thumb-title">
                                    Insertion Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/mergesort">
                                <p className="text-dark thumb-title">
                                    Merge Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/quicksort">
                                <p className="text-dark thumb-title">
                                    Quick Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/quicksort3">
                                <p className="text-dark thumb-title">
                                    Quick Sort3
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/heapsort">
                                <p className="text-dark thumb-title">
                                    Heap Sort
                            </p>
                            </NavLink></Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/shellsort">
                                    <p className="text-dark thumb-title">
                                        Shell Sort
                            </p>
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavLink to='/'>
                        <Icon name='home' size='big' style={{ marginTop: 10 }}></Icon>
                    </NavLink>
                    <text style={Style.navbar}>{this.props.text}</text>
                    <Menu.Menu position='right'>
                        <div className='ui right aligned item'>
                            <a href='https://github.com/harsha-p/visualizer' >
                                <Icon name='github' size='large' />
                            </a>
                        </div>
                    </Menu.Menu>
                </Menu>
                {/* </Grid> */}
                <br />
            </Container >
        );
    }
}

var Style = ({
    navbar: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
        width: 1000,
        color: 'white',
        fontFamily: 'Roboto',
    }
});