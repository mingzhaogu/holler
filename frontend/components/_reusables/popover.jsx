import React from 'react';

export const Popover = ({ arrow, align, customClasses, children, extended, ...props }) => {
    const show = extended ? 'extended' : '';
    const caret = arrow ? `caret-${arrow}-${align}` : '';

    return <div className={`popover ${caret} ${customClasses} ${show}`}>
        {children}
    </div>;
}