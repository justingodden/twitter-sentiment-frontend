import React from 'react'
import TweetEmbed from 'react-tweet-embed'

function BottomDashboard() {
    return (
        <div className="bottomDashboard">
            <div className="bottomDashboard__item">
                <h3>Most positive</h3>
                <TweetEmbed
                    className="tweet"
                    id="692527862369357824"
                    options={{
                        cards: 'hidden'
                    }}
                />
            </div>
            <div className="bottomDashboard__item">
                <h3>Least positive</h3>
                <TweetEmbed
                    className="tweet"
                    id="692527862369357824"
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true
                    }}
                />
            </div>
        </div>
    )
}

export default BottomDashboard
