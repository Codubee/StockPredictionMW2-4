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

/**
 * Checks that the component has been rendered.
 * 
 * @param {any} wrapper Shallow wrapper.
 */
export function hasBeenRendered(wrapper) {
    expect(wrapper.exists()).toBeTruthy();
}