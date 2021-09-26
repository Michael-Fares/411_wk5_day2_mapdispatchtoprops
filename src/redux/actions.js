export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car
    // the type and value keys are mandatory. value is also called payload in some repos
  }
}

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index
  }
}