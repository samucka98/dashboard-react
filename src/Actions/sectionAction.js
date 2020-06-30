const sectionAction = (auth) => {
  if (auth) {
    return {
      type: 'LOGIN',
      payload: true
    }
  } else {
    return {
      type: 'LOGOUT',
      payload: false
    }
  }
}

export default sectionAction;