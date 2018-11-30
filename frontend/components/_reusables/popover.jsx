import React from 'react';

export const Popover = ({ arrow, customClasses, children, extended, ...props }) => {
    const show = extended ? 'extended' : '';
    const caret = arrow ? `caret-${arrow}` : '';

    return <div className={`popover ${caret} ${customClasses} ${show}`}>
        {children}
    </div>;
}