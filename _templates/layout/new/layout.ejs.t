---
to: src/layouts/<%= h.changeCase.pascal(name) %>.tsx
---
import React from "react";

type <%= h.changeCase.pascal(name) %>Props = {
}

const <%= h.changeCase.pascal(name) %>: React.FC< <%= h.changeCase.pascal(name) %>Props> = () => {
    return (<></>);
}


export default <%= h.changeCase.pascal(name) %>;


