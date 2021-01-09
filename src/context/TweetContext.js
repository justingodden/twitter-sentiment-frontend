import React, { useState, createContext } from 'react'


export const TweetContext = createContext()

export const TweetProvider = props => {
    const [tweet, setTweet] = useState(
            {
                totals:
                {
                    total: '--',
                    total_pos: '--',
                    total_neg: '--',
                    total_neu: '--'
                },
                line: {
                    dates: ["01/01/2021", "02/01/2021", "03/01/2021", "04/01/2021", "05/01/2021", "06/01/2021", "07/01/2021", "08/01/2021"],
                    pos_tweets_per_day: [null, null, null, null, null, null, null]
                },
                bar: {
                    dates: ["01/01/2021", "02/01/2021", "03/01/2021", "04/01/2021", "05/01/2021", "06/01/2021", "07/01/2021", "08/01/2021"],
                    tweets_per_day: [null, null, null, null, null, null, null]
                },
                tweets: {
                    id_max_pos: '',
                    id_max_neg: '',
                    id_max_retweets: '',
                    full_text_pos: '',
                    full_text_neg: '',
                    full_text_retweets: ''
                }
            }
        )
    return(
        <TweetContext.Provider value={[tweet, setTweet]}>
            { props.children }
        </TweetContext.Provider>
    )
}