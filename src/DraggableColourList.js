import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColourBox from "./DraggableColourBox"

const DraggableColourList = SortableContainer(function ({ colors, deleteColour }) {
    // const { colors } = props
    return (
        <div style={{ height: "100%" }}>
            {colors.map((color, i) => (
                <DraggableColourBox
                    index={i}
                    colour={color.color}
                    name={color.name}
                    key={color.name}
                    handleClick={() => deleteColour(color.name)}
                />
            ))}

        </div>
    )
})

export default DraggableColourList;