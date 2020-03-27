import { ADD_CLIENT_CARDS, TOGGLE_CLIENT_CARD_CHECKED } from '../actions';

const initialState = {
  cards: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT_CARDS: {
      const cards = action.payload;
      cards.forEach(card => {
        card.checked = false;
      });
      return {
        ...state,
        cards,
      };
    }
    case TOGGLE_CLIENT_CARD_CHECKED: {
      const { cards } = state;
      const targetCard = cards.findIndex(card => card.id === action.payload);
      cards[targetCard].checked = !cards[targetCard].checked;
      return {
        ...state,
        cards,
      };
    }
    default:
      return state;
  }
}
