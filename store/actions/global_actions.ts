export const global_actions = {
  updateWallet: (state: { wallet: any }, action: { payload: any }) => {
    state.wallet = action.payload
  },
  setGeneratorModal: (state: { generatorModal: any }, action: { payload: any }) => {
    state.generatorModal = action.payload
  },
  setWinnerModal: (state: { winnerModal: any }, action: { payload: any }) => {
    state.winnerModal = action.payload
  },
  setChatModal: (state: { chatModal: any }, action: { payload: any }) => {
    state.chatModal = action.payload
  },
  setAuthModal: (state: { authModal: any }, action: { payload: any }) => {
    state.authModal = action.payload
  },
  setCurrentUser: (state: { currentUser: any }, action: { payload: any }) => {
    state.currentUser = action.payload
  },
  setJackpots: (state: { jackpots: any }, action: { payload: any }) => {
    state.jackpots = action.payload
  },
  setJackpot: (state: { jackpot: any }, action: { payload: any }) => {
    state.jackpot = action.payload
  },
  setLuckyNumbers: (state: { luckyNumbers: any }, action: { payload: any }) => {
    state.luckyNumbers = action.payload
  },
  setPurchasedNumbers: (state: { purchasedNumbers: any }, action: { payload: any }) => {
    state.purchasedNumbers = action.payload
  },
  setParticipants: (state: { participants: any }, action: { payload: any }) => {
    state.participants = action.payload
  },
  setResult: (state: { result: any }, action: { payload: any }) => {
    state.result = action.payload
  },
  setGroup: (state: { group: any }, action: { payload: any }) => {
    state.group = action.payload
  },
}
