export const initialState = {
    loading: true,
    currentDashboard: "dashboard",
    isPageReady: false,
    prices: null,
    rates: null,
};


export const collectionState = {
    mostRated: {
        loading: true,
        data: null,
        error: false,
    },
    collections: {
        loading: true,
        data: null,
        error: false,
    }
}