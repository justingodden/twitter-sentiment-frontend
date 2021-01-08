import React from 'react'
import TweetEmbed from 'react-tweet-embed'

function BottomDashboard() {
    return (
        <div className="bottomDashboard">
            <div className="bottomDashboard__item">
                <h4 className="bottomDashboard__itemText">Most positive</h4>
                <TweetEmbed
                    className="tweet"
                    id="692527862369357824"
                    options={{
                        cards: 'hidden'
                    }}
                />
            </div>
            <div className="bottomDashboard__item">
                <h4 className="bottomDashboard__itemText">Least positive</h4>
                <TweetEmbed
                    className="tweet"
                    id="692527862369357824"
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true,
                        align: 'center'
                    }}
                />
            </div>
            <div className="bottomDashboard__item" id="mostRetweeted">
                <h4 className="bottomDashboard__itemText">Most Retweeted</h4>
                <TweetEmbed
                    className="tweet"
                    id="692527862369357824"
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true,
                        align: 'center'
                    }}
                />
            </div>
        </div>
    )
}

export default BottomDashboard
