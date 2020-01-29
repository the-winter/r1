import React, { Component } from 'react';
import testData from '../data/test1-data.json'

class TestOne extends Component {
    render() {
        const emphasised = {
            fontStyle: 'italic'
        };

        const important = {
            fontWeight: 'bold'
        }

        return (
            <div >
                {testData.map((item, index) => {
                    return <p key={index}>{item.text}</p>
                })}
            </div>
        );
    }
}

export default TestOne 