import React from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Drag() {
      const [Draggable, setDraggable] = useState(false)
      return (
            <div draggable={Draggable} style={{ display: 'flex' }} >
                  <DragIndicatorIcon
                        onMouseDown={e => setDraggable(true)}
                        onmouseUp={e => setDraggable(false)}
                  />
                  <div 
                  onMouseDown={e => setDraggable(false)}
                onmouseUp={e => setDraggable(true)}
                   >Drag me from the icon don't drag me from my text please.</div>
            </div>
      )
}

export default Drag