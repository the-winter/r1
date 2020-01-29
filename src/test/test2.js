import React, { Component } from 'react';
import { Text } from './text'
import { Image } from './image'
import { PullQuote } from './pullquote'
import testData from '../data/test2-data.json'
import moment from 'moment'

class TestTwo extends Component {

    render() {
        const emphasised = {
            fontStyle: 'italic'
        };

        const important = {
            fontWeight: 'bold'
        }

        // Filter function for an object
        Object.filter = (obj, predicate) =>
            Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .reduce((res, key) => (res[key] = obj[key], res), {});


        const pageData = testData[0]
        const formattedPublicationDate = moment(pageData.publicationDate.replace(/\s/g, '')).format('dddd, MMMM Do YYYY hh:mm a')

        return (
            <div className="page-container">
                <div className="header">
                    <h1 className="site-heading">{pageData.source}</h1>
                </div>
                <div className="title-date">
                    <h1>{pageData.headline}</h1>
                    <p>{formattedPublicationDate}</p>
                    <hr />
                </div>
                {pageData.blocks.map((item, index) => {
                    if (item.kind === "text") {
                        // check the intentions array is not empty
                        if (item.intentions.length > 0) {
                            let intentionsString = '';
                            // object with index and length as property e.g. emphasised: [3, 7]
                            const intentions = item.intentions.reduce((o, item) => ({ ...o, [item.kind]: [item.index, item.length] }), {})
                            // each individual character in the text
                            for (let i = 0; i <= item.text.length; i++) {

                                var char = item.text[i]
                                // check if i is within the range for any intention
                                var relevantIntentions = Object.filter(intentions, (value) => {
                                    var minValue = Math.min(...value);
                                    var maxValue = Math.max(...value);
                                    // return the intention
                                    return (i >= minValue) && (i < maxValue)
                                })
                                // get the intention name as a string
                                var styles = Object.keys(relevantIntentions).join(" ")
                                // put the intention name as a style on the span element
                                intentionsString += `<span className=${styles}>${char}</span>`
                            }
                        } else {
                            // if no intentions return only text
                            return item.text
                        }

                        return <Text text={item.text} intentions={item.intentions} key={index} />
                    } else if (item.kind === "image") {
                        return <Image captionText={item.captionText} url={item.url} key={index} />

                    } else if (item.kind === "pull-quote") {
                        return <PullQuote key={index} text={item.text} attribution={item.attribution} />
                    }
                    // wasnt sure how to make it work without having a return statemenet here
                    return <p>Hi</p>
                })}
            </div>
        );
    }
}

export default TestTwo 