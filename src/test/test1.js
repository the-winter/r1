import React, { Component } from 'react';
import testData from '../data/test1-data.json'
import ReactHtmlParser from 'react-html-parser';

class TestOne extends Component {
    render() {
        // Filter function for an object
        Object.filter = (obj, predicate) =>
            Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .reduce((res, key) => (res[key] = obj[key], res), {});

        const data = testData[0]
        let intentionsString = '';
        if (data.intentions.length > 0) {
            // object with index and length as property e.g. emphasised: [3, 7]
            const intentions = data.intentions.reduce((o, item) => ({ ...o, [item.kind]: [item.index, item.length] }), {})
            let counter = 0;
            // each individual character in the text
            for (let i = 0; i < data.text.length; i++) {
                var char = data.text[i]
                // check if i is within the range for any intention
                var relevantIntentions = Object.filter(intentions, (value) => {
                    var minValue = value[0]
                    var maxValue = value[0] + value[1]
                    // return the intention
                    return (i >= minValue) && (i < maxValue)
                })
                // get the intention name as a string
                var styles = Object.keys(relevantIntentions).join(" ")
                // put the intention name as a style on the span element
                intentionsString += `<span key=${counter} class="${styles}">${char}</span>`
                counter = counter + 1;
            }
        }
        return (
            <div className="content-section center">
                <p className="article-text">
                    {ReactHtmlParser(intentionsString)}
                </p>
            </div>
        );
    }
}

export default TestOne 