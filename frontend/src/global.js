export const navbrand = {
    url: "/",
    label: "Stock Predictor"
};

export const navlinks = [
    {
        url: "https://github.com/Codubee/StockPredictionMW2-4",
        label: "Github"
    },
    {
        url: "/input",
        label: "User input"
    },
    {
        url: "/",
        label: "Landing page"
    },
];

export const stockData = [
    {
        "c": 261.74,
        "High Price": 263.31,
        "Low Price": 260.68,
        "Open Price": 261.07,
        "t": 1582641000 
    },
    {
        "c": 261.74,
        "High Price": 263.31,
        "Low Price": 260.68,
        "Open Price": 261.07,
        "t": 1582641000 
    },
];

/**
 * Checks that the component has been rendered.
 * 
 * @param {any} wrapper Shallow wrapper.
 */
export function hasBeenRendered(wrapper) {
    expect(wrapper.exists()).toBeTruthy();
}