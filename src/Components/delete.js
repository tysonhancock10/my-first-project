import React from 'react'

const Delete = (props) => {
    return(
<div>
    <button onClick={() => {delete(props.index)}}>delete</button>
</div>
    )
}
export default Delete