import React, { useContext } from 'react'
import TweetEmbed from 'react-tweet-embed'
import { TweetContext } from '../../context/TweetContext';

function BottomDashboard() {
    const [{ tweets: { id_max_pos, id_max_neg, id_max_retweets,
    full_text_pos, full_text_neg, full_text_retweets }}, 
        setTweet] = useContext(TweetContext)

    return (
        <div className="bottomDashboard">
            <div className="bottomDashboard__item">
                <h4 className="bottomDashboard__itemText">Most positive</h4>
                <TweetEmbed
                    className="tweet"
                    id={id_max_pos}
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true,
                        align: 'center',
                        width: 250
                    }}
                />
                <h6 className="tweetText">{full_text_pos}</h6>
            </div>
            <div className="bottomDashboard__item">
                <h4 className="bottomDashboard__itemText">Least positive</h4>
                <TweetEmbed
                    className="tweet"
                    id={id_max_neg}
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true,
                        align: 'center',
                        width: 250
                    }}
                />
                <h6 className="tweetText">{full_text_neg}</h6>
            </div>
            <div className="bottomDashboard__item" id="mostRetweeted">
                <h4 className="bottomDashboard__itemText">Most Retweeted</h4>
                <TweetEmbed
                    className="tweet"
                    id={id_max_retweets}
                    options={{
                        cards: 'hidden',
                        conversation: 'none',
                        dnt: true,
                        align: 'center',
                        width: 250
                    }}
                />
                <h6 className="tweetText">{full_text_retweets}</h6>
            </div>
        </div>
    )
}

export default BottomDashboard
