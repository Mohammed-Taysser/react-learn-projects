import Redux from "redux";

// ------------------
// - Actions Creators
// ------------------

/**
 * action to create new policy
 * @param {String} [name=''] name of form creator
 * @param {Number} [amount=20] amount of cash to pay
 * @returns {Object} created policy
 */
function create_policy(name = "", amount = 20) {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
}

/**
 * action to create new claim
 * @param {String} name name of form creator
 * @param {Number} amount amount of cash to claim
 * @returns {Object} created claim
 */
function create_claim(name = "", amount = 0) {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount,
    },
  };
}

/**
 * action to delete exit policy
 * @param {String} name name of policy creator
 * @returns {Object} exist policy
 */
function delete_policy(name = "") {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
}

// ----------
// - Reducers
// ----------

/**
 * reducer to create a new claim
 * @param {(Array)} [claim_history=[]] list of old claims
 * @param {Object} action action to perform
 * @returns {Array} Array of history
 */
function history_claims(claim_history = [], action = {}) {
  if (action.type === "CREATE_CLAIM") {
    return [...claim_history, action.payload];
  } else {
    return claim_history;
  }
}

/**
 * reducer for accounting management
 * @param {Number} [cash=500] money of the company
 * @param {Object} action what to do ? create new policy of new claim
 * @returns {Number} money of action manipulate
 */
function accounting(cash = 500, action = {}) {
  if (action.type === "CREATE_CLAIM") {
    return cash - action.payload.amount;
  } else if (action.type === "CREATE_POLICY") {
    return cash + action.payload.amount;
  } else {
    return cash;
  }
}

/**
 * reducer to create or delete policies
 * @param {Array} [policy_history=[]] history of claims
 * @param {Object} action what to do ? create or delete policy
 * @returns {Array} new claim history
 */
function policies(policy_history = [], action = {}) {
  if (action.type === "CREATE_POLICY") {
    return [...policy_history, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return policy_history.filter((name) => name !== action.payload.name);
  } else {
    return policy_history;
  }
}

const { createStore, combineReducers } = Redux;

const departments = combineReducers({
    budget: accounting,
    clients: policies,
    history: history_claims,
  }),
  store = createStore(departments);

store.dispatch(create_policy("mohammed", 50));
store.dispatch(create_policy("nour", 50));

store.dispatch(create_claim("asmaa", 450));

store.dispatch(delete_policy("nour"));

console.log(store.getState());
