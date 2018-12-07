export const selectAllConversations = (state) => {
    return Object.values(state.entities.conversations);
};

export const findConversationId = (state, ownProps) => (
    ownProps.match.params.convId
);

export const findCurrentConversation = (state, ownProps) => (
    state.session.currentConversation || findConversation(state, ownProps)
);

export const findConversation = (state, ownProps) => (
    state.entities.conversations[findConversationId(state, ownProps)]
);

export const findConversationImage = (state, ownProps) => {
    const currentConvo = findConversation(state, ownProps);

    if (currentConvo) {
        return currentConvo.imageUrl;
    } else {
        return undefined;
    }
};

export const findConversationName = (state, ownProps) => {
    const currentConvo = findConversation(state, ownProps);

    if (currentConvo) {
        return currentConvo.chatName;
    } else {
        return undefined;
    }
};