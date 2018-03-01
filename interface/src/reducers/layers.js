import layers from '../config/layers'

const initialState = { layers: layers }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_LAYER':
      let newLayers = state.layers.map((value, index) => {
        let new_value = {...value};
        if(index === action.index) {
          new_value.active = !value.active
        }
        return new_value
      })
      return {
        layers: newLayers
      }
    default:
      return state
  }
}

export default reducer
