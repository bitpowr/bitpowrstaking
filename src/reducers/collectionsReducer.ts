

export type collectionPropType = any

const providerActionTypes = {
    SET_MOST_RATED_COLLECTIONS: "SET_MOST_RATED_COLLECTIONS",
    SET_COLLECTIONS: "SET_COLLECTIONS",
};

type Keys = keyof typeof providerActionTypes;
type actionType = typeof providerActionTypes[Keys];

export function collectionsReducer(
    states: collectionPropType,
    action: { type: actionType }
) {
    switch (action.type) {
        case "SET_MOST_RATED_COLLECTIONS":
            return "";
            break;

            return states;
    }
}
