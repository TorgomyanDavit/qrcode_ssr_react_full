import { current } from '@reduxjs/toolkit'
// conected Slices Function

export function selectedKategoryProduct(StateMenu,kategoriIndex) {
  return StateMenu[StateMenu.findIndex((item) => item.selected)].kategoriMenu[kategoriIndex]
  // return selectedMenu(StateMenu).kategoriMenu.filter((item) => item.selected)[0]
}

export function selectedMenu(StateMenu) {
  return StateMenu[StateMenu.findIndex((item) => item.selected)]
}

export function selectedMenuIndex(StateMenu) {
  return StateMenu.findIndex((item) => item.selected)
}

export function toCalculatePrice(state) {
  // const productId = state.Food.index
  const kategoriIndex = state.Food.kategoriIndex
  const Price = selectedKategoryProduct(state.StateMenu,kategoriIndex).product[kategoriIndex].price
  return state.Food.additions.reduce((aggr,recept) => {
    const {price,selectedCount,selected} = recept
    if(selected) {
      aggr += selectedCount * price
    }
    return aggr
  },0) + Price
}

// Slices
export function selectMenuLogic(state,action) {
  const id = action.payload.id
  state.StateMenu = state.StateMenu.map((val,index) => {
    if(index === id) return {...val,selected:true}   
    else return {...val,selected:false} 
  })
  const selectedCategoriId = selectedMenu(state.StateMenu).kategoriMenu.findIndex((item) => item.selected)
  state.scrollIngIndex = selectedCategoriId
}

export function changeSelectedKategoriLogic(state,action) {
  const id = action.payload.id;
  state.StateMenu[selectedMenuIndex(state.StateMenu)].kategoriMenu = state.StateMenu[selectedMenuIndex(state.StateMenu)].kategoriMenu
  .map((kategori,index) => {
    if(index === id) return {...kategori,selected:true}   
    else return {...kategori,selected:false} 
  })
  state.scrollIngIndex = id
}

export function scrolUnableLogic(state,action) {
  state.scrollOn = false
}

export function scrollenableLogic(state,action) {
  state.scrollOn = true
}

export function openSpecFoodLogic(state,action) {
  const {key,goods} = action.payload
  
  if(key === null) { state.openSpecFoodKey = null }
  else { state.openSpecFoodKey = !state.openSpecFoodKey }

  if(goods) { state.Food = goods }
  else { state.Food = null }
}

export function SelectAdAdditionsSauceսLogic(state,action) {
  const {id} = action.payload
  const {additions,permisionCount} = state.Food
  const checkboxPermisionCount = permisionCount ? permisionCount : 1
  const selectedElementCount = additions.filter((addition) => addition.selected).length

  state.Food.additions = additions.map((addition,index) => {
    // Radio Logic Can select only one element
    if(permisionCount === 1) {
      if(id === index) {
        return {...addition,selected:!addition.selected}
      } else {
        return {...addition,selected:false}
      }
    } 
    // checkbox Element Logic Can select addition than count Let you
    else if(selectedElementCount < checkboxPermisionCount) {
      if(id === index && additions[id].selected === false) {
        return {...addition,selected:true}
      } else if(id === index && additions[id].selected === true) {
        return {...addition,selected:false}
      }
      return addition
    } else if(selectedElementCount === checkboxPermisionCount && additions[id].selected === true && id === index) {
      return {...addition,selected:false}
    }
    return addition
  })
  // state.Food.price = toCalculatePrice(state)
}

export function checkSoucesLogic(state,action) {
  const {id,extraIndex} = action.payload
  const {additionsExtra} = state.Food


  state.Food.additionsExtra = additionsExtra.map((addition,index) => {
    // Radio Logic Can select only one element
    const {extraSouces,maxCount} = addition
    const selectedElementCount = addition.extraSouces.filter((extra) => extra.selected).length
    const checkboxPermisionCount = maxCount ? maxCount : 1

    if(maxCount === 1) {
      if(extraIndex === index) {
        return {...addition,extraSouces:extraSouces.map((val,valIndex) => {
          if(valIndex === id) {
            return {...val,selected:!val.selected}
          }
          return {...val,selected:false}
        } )}
      } else {
        return addition
      }

    } 
    // checkbox Element Logic Can select addition than count Let you
    else if(selectedElementCount <= checkboxPermisionCount) {
      if(index === extraIndex) {
        return {...addition,extraSouces:extraSouces.map((val,valIndex) => {
          if(valIndex === id && selectedElementCount !== checkboxPermisionCount) {
            return {...val,selected:!val.selected}
          } else if(valIndex === id && selectedElementCount === checkboxPermisionCount) {
            return {...val,selected:false}
          }
          return val
        })}
      } 
      return addition
    } else {
      return  addition
    }


  })
}

// new logic additionsExtraLogic
export function increaseadditionsExtraLogic(state,action) {
  const {id,soucesIndex} = action.payload

  const correctIndexAdditionsExtra =  state.Food.additionsExtra.findIndex((val) => val.id === id)
  state.Food.additionsExtra[correctIndexAdditionsExtra].extraSouces = 
  state.Food.additionsExtra[correctIndexAdditionsExtra].extraSouces.map((recept,index) => {
    const {selectedCount,maxCount} = recept
    if(index === soucesIndex && selectedCount < maxCount) {
      return {...recept,selectedCount:selectedCount + 1}
    } else { return recept}
  })
}

export function decreaseadditionsExtraLogic(state,action) {
  const {id,soucesIndex} = action.payload

  const correctIndexAdditionsExtra = state.Food.additionsExtra.findIndex((val) => val.id === id)
  state.Food.additionsExtra[correctIndexAdditionsExtra].extraSouces = 
  state.Food.additionsExtra[correctIndexAdditionsExtra].extraSouces.map((recept,index) => {
    const {selectedCount} = recept
    if(index === soucesIndex && selectedCount > 1) {
      return {...recept,selectedCount:selectedCount - 1}
    } else { return recept}
  })
}


// export function increaseCountAdditionsLogic(state,action) {
//   const {id} = action.payload
//   state.Food.additions = state.Food.additions.map((recept,index) => {
//     const {selectedCount,maxCount} = recept
//     if(index === id && selectedCount < maxCount) {
//       return {...recept,selectedCount:selectedCount + 1}
//     } else { return recept}
//   })
// }

// export function decreaseCountAdditionsLogic(state,action) {
//   const {id} = action.payload

//   state.Food.additions = state.Food.additions.map((recept,index) => {
//     const {selectedCount} = recept
//     if(index === id && selectedCount > 1) {
//       return {...recept,selectedCount:selectedCount - 1}
//     } else { return recept}
//   })

// }


export function addBasketLogic(state,action) {
  let differentFoodKey = true
  state.basket = state.basket.map((order,index,array) => {
    if(order.id === state.Food.id) {
      const key = findSomeItem(order,state);

      if(key === -1) {
        differentFoodKey = false
        return {...order,orderedCount:OrderCount(),price:countPrice()}
      }
    }

    function OrderCount() {
      return order.orderedCount + state.Food.orderedCount;
    } 
    
    function countPrice() {
      return order.price = (state.Food.orderedCount +  order.orderedCount) * order.originalPrice;
    } 
    return order
  })

  if(differentFoodKey) {
    state.basket.push(state.Food)
  }

  

  showOrderedCountInMenu(state)
  // CalculateOrderMounthFromdetailToBasket(state)
  // CalculateAllBill(state)
  state.Food = null
  state.openSpecFoodKey = null
}

// export function selectedKategoryProduct(StateMenu,kategoriIndex) {
//   return StateMenu[StateMenu.findIndex((item) => item.selected)].kategoriMenu[kategoriIndex]
//   // return selectedMenu(StateMenu).kategoriMenu.filter((item) => item.selected)[0]
// }

export function showOrderedCountInMenu(state) {
  const productId = state.Food.index
  const kategoriIndex = state.Food.kategoriIndex
  const currentMenuFood = selectedKategoryProduct(state.StateMenu,kategoriIndex).product[productId];


  let someIdorderedCount = state.basket.reduce((aggr,order) => {
    if(currentMenuFood.id === order.id) {
      aggr += order.orderedCount
    }
    return aggr
  },0)

  currentMenuFood.preOrdered = someIdorderedCount
}


// export function CalculateOrderMounthFromdetailToBasket(state) {
//   state.Food.price = state.Food.price * state.Food.orderedCount
//   state.Food.additions = state.Food.additions.map((souces,index) => {
//     let {price,selectedCount,selected} = souces
//     if(selected) {
//       souces.price = selectedCount * price
//     }
//     return souces
//   })
// }


export function increaseOrderCountLogic(state) {
  state.Food.orderedCount++
}

export function decreaseOrderCountLogic(state) {
  if(state.Food.orderedCount > 1)state.Food.orderedCount--;
}

export function makeOrderLogic(state) {
  const {Orders,allOrderBill,basket} = state

  state.basket.forEach((val) => {
    selectedKategoryProduct(state.StateMenu,val.kategoriIndex).product[val.index].preOrdered = false
  })

  if(Orders.length === 0) {
    Orders.push({id:`${Date.now()}${Math.random()}`,countOrders:basket.length,Bill:allOrderBill,allArderDetail:basket})
  } else {
    state.Orders = Orders.map((val,i) => {
      return {...val,countOrders:val.countOrders + basket.length,Bill:val.Bill + allOrderBill,allArderDetail:[ ...val.allArderDetail,...basket]}
    })
  }
  
  // currentMenuFood.preOrdered = false
  state.openorderedSlider = true
  state.allOrderBill = 0
}

export function openorderDetailLogic(state,action) {
  if(state.orderOpenKey) {
    state.orderOpenKey = false
  } else {
    state.orderOpenKey = action.payload
  }
}

export function findSomeItem(order,state) {
  return order.additions.findIndex((val,index) => {
    if(val.selected === state.Food.additions[index].selected) {
      return val.selectedCount !== state.Food.additions[index].selectedCount
    } else {
      return true
    }
  })
}

export function closeOrderSliderLogic(state) {
  state.openorderedSlider = false;
  state.basket = [];
  state.sliderImg = [];
}

export function createSliderPacketLogic(state) {
  state.basket.forEach(element => {
    state.sliderImg.push(element.imgUrl)
  });
}

export function addCommaAllPrice(price) {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

export function saveChangesLogic(state,action) {
  
  let chenOrderIndex = false
  CalculateChangesMounth(state)

  state.basket = state.basket.map((order,index,array) => {
    if(index === state.Food.index) {
      return state.Food
    } 
    return order
  })
  .map((order,index,basket) => {
    if(order.id === state.Food.id && state.Food.index !== index) {
      const key = order.additions.findIndex((souse,index) => {
        if(
          souse.selectedCount !== state.Food.additions[index].selectedCount &&
          souse.selected !== state.Food.additions[index].selected
        ) {return true} else {return false}
      })

      if(key === -1) {
        order.orderedCount += state.Food.orderedCount
        chenOrderIndex = true
      }
    }
    return order
  })

  if(chenOrderIndex) {
    state.basket = state.basket.filter((order,index) => index !== state.Food.index)
  }

  const productId = state.Food.id
  const kategoriIndex = state.Food.kategoriIndex
  const StateMenuIndex = state.StateMenu.findIndex((val) => val.id === state.Food.menuId)
  let currentMenuFood = state.StateMenu[StateMenuIndex].kategoriMenu[kategoriIndex].product

  state.StateMenu[StateMenuIndex].kategoriMenu[kategoriIndex].product = currentMenuFood.map((val) => {
    if(val.id === productId) {
      return {...val,preOrdered:state.Food.orderedCount}
    }
    return val
  })


  CalculateAllBill(state)
  state.Food = null
  state.openSpecFoodKey = null
}

export function CalculateChangesMounth(state) {
  const productId = state.Food.index
  const kategoriIndex = state.Food.kategoriIndex
  const {price,additions} = selectedKategoryProduct(state.StateMenu,kategoriIndex).product[productId]

  state.Food.price = price * state.Food.orderedCount
  state.Food.additions = state.Food.additions.map((souces,index) => {
    let {selectedCount,selected} = souces
    if(selected) {
      souces.price = selectedCount * additions[index].price
    }
    return souces
  })
}

export function CalculateAllBill(state) {
  state.allOrderBill = state.basket.reduce((aggr,order,index) => {
    aggr += order.price
    order.additions.forEach((souces) => {
      const {price,selected} = souces
      if(selected) {
        aggr += price
      }
    })
    return aggr
  },0)
}

export function deleteItemFromBasketLogic(state,action) {
  if(action.payload === "all") {
    state.basket.forEach((val) => {
      for(let i = 0;i < state.StateMenu.length;i++) {
        if(val.menuId === state.StateMenu[i].id) {
          state.StateMenu[i].kategoriMenu[val.kategoriIndex].product[val.index].preOrdered = state.StateMenu[i].kategoriMenu[val.kategoriIndex].product[val.index].preOrdered = false
        }
      }
    })
    state.basket = []
  } else {
    preorderedChangeOnDeleteAndChangeItem(state,action)
  }
  CalculateAllBill(state)
}

export default function preorderedChangeOnDeleteAndChangeItem(state,action) {
  if(action.payload) {state.Food = action.payload}
  const productId = state.Food.id
  const kategoriIndex = state.Food.kategoriIndex
  const StateMenuIndex = state.StateMenu.findIndex((val) => val.id === state.Food.menuId)
  let currentMenuFood = state.StateMenu[StateMenuIndex].kategoriMenu[kategoriIndex].product
  
  state.StateMenu[StateMenuIndex].kategoriMenu[kategoriIndex].product = currentMenuFood.map((val) => {
    if(val.id === productId) {
      return {...val,preOrdered:false}
    }
    return val
  })

  state.basket = state.basket.filter((order,index) => {
    return order.id !== productId
  })  

  state.Food = null 
  state.openSpecFoodKey = null
}

export function openLanguagePopUpLogic(state) {
  state.languagePopUpKey = !state.languagePopUpKey
}

export function chengLanguageLogic(state,action) {
  state.languageData = state.languageData.map((val) => {
    if(val.id === action.payload) {
      return {...val,selected:true}
    }
    return {...val,selected:false}
  })
}





















