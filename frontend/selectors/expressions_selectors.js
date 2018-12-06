export const getExpressionsFlags = ({ ui }) => {
    const { showGiphys, showStickys } = ui;
    return {
        giphys: showGiphys,
        stickys: showStickys
    };
};