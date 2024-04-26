import React from "react";

const  EmojiList=(minutes)=>{
const interval=minutes <30?5:10;
const emoji=minutes <30? "☕️": "🍱";

let emojis="";
for(let i=0; i<minutes; i += interval) {
    emojis += emoji;
}
return emojis;
}
const Article = ({ title, date="January 1, 1970", preview,minutes }) => {
    const emojis = EmojiList(minutes);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{emojis}</p>
        </article>
    )
}

export default Article;