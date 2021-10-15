const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, theme, e }) => {
    const newGroups = theme('customGroups') || [];

    newGroups.forEach(newGroup => {
        addVariant(newGroup, ({ container, separator }) => {
            container.walkRules(rule => {
                rule.selector = `.${newGroup} .${newGroup}${e(separator)}${rule.selector.slice(1)}`;
            });
        });
    });
}, {
    theme: {
        customGroups: [],
    },
});
