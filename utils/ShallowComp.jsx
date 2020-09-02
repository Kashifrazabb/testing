export const findByTestAttr = (comp, attr) => {
    return comp.find(`[data-test='${attr}']`)
}