// add chat
function addChat(person, coordinator, location) {
  return {
    type: 'ADD_CHAT',
    person,
    coordinator,
    location,
  };
}

// remove chatt
function removeChat(person, coordinator, location) {
  return {
    type: 'REMOVE_CHAT',
    person,
    coordinator,
    location,
  };
}

// add event

// remove event

