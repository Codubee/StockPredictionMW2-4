export const navlinks = [
    {
        url: "https://github.com/Codubee/StockPredictionMW2-4",
        label: "Github"
    },
    {
        url: "#",
        label: "User input"
    },
    {
        url: "/",
        label: "Home page or landing page"
    },
];

/**
 * Checks that the component has been rendered.
 * 
 * @param {any} wrapper Shallow component.
 */
export const hasBeenRendered = (wrapper) => 
    expect(wrapper.exists()).toBeTruthy();