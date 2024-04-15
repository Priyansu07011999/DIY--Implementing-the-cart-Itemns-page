import React from "react";

const CardContext = React.createContext({
    items: [],
    amount: 0,
    addItem: (item) => {},
    removeItme: (id) => {}
})

export default CardContext;