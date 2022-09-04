import { createSlice } from '@reduxjs/toolkit';
import { 
  addBasketLogic, changeSelectedKategoriLogic, checkSoucesLogic, chengLanguageLogic,closeOrderSliderLogic, createSliderPacketLogic, decreaseadditionsExtraLogic, decreaseCountAdditionsLogic, 
  decreaseOrderCountLogic, deleteItemFromBasketLogic, increaseadditionsExtraLogic, increaseCountAdditionsLogic, 
  increaseOrderCountLogic, makeOrderLogic, openLanguagePopUpLogic, openorderDetailLogic, 
  openSpecFoodLogic, saveChangesLogic, scrollenableLogic, scrolUnableLogic, 
  SelectAdAdditionsSauceսLogic, selectMenuLogic 
} from './globalSliceLogic';



const initialState = {
  languageData:[
    {id:`${Date.now()}${Math.random()}`,name:"English",imgUrl:"/images/home/englishlang.png",selected:true},
    {id:`${Date.now()}${Math.random()}`,name:"Русский",imgUrl:"/images/home/rusianLang.png",selected:false},
    {id:`${Date.now()}${Math.random()}`,name:"Հայերեն",imgUrl:"/images/home/armeniaLang.png",selected:false}
  ],
  langTitle:"Choose language",
  languagePopUpKey:false,
  percent:0,
  sliderImg:[],
  openorderedSlider:false,
  Orders:[],
  allOrderBill:0,
  basket:[],
  openSpecFoodKey:null,
  Food:null,
  scrollOn:true,
  scrollIngIndex:0,
  priceSimbol:"$",
  plusSimbol:"+",
  orderOpenKey:false,
  StateMenu:[
    {
      id:`${Date.now()}${Math.random()}`,
      name:"Main menu",
      selected:true,
      kategoriMenu:[
        {
          id:`${Date.now()}${Math.random()}`,
          name:"Combo",
          selected:true,
          activeTime:"10.00-11.00",
          product:[
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Couple Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Breakfast",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
          ]
        },
        {
          id:`${Date.now()}${Math.random()}`,
          name:"Starters",
          selected:false,
          activeTime:"10.00-11.00",
          product:[
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
          ]
        },
        {
          id:`${Date.now()}${Math.random()}`,
          name:"Breakfast",
          selected:false,
          activeTime:"10.00-11.00",
          product:[
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Combo",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:3000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:3000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Starters Couple",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:5000,
              discount:8000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:5000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
          ]
        },
      ]
    },
    {
      id:`${Date.now()}${Math.random()}`,
      name:"Alkohol Menu",
      selected:false,
      kategoriMenu:[
        {
          id:`${Date.now()}${Math.random()}`,
          name:"Viski",
          selected:true,
          activeTime:"10.00-11.00",
          product:[
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"uuu",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
          ]
        },
        {
          id:`${Date.now()}${Math.random()}`,
          name:"Vodka",
          selected:false,
          activeTime:"10.00-11.00",
          product:[
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 1",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 2",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 3",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 2",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 3",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 2",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 3",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 2",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
            {
              id:`${Date.now()}${Math.random()}`,
              preOrdered:false,
              orderedCount:1,
              name:"Vodka 3",
              description:"Choose 1111 burger and side dish for special price Choose 1111 burger and side dish for special priceChoose 1111 burger and side dish for special price",
              imgUrl:"/images/home/img0.png",
              price:55000,
              discount:5000,
              extraTitle:"extraTitle1",
              extraNote:"extraNote",
              maxCountText:"Max Choice",
              permisionCount:1,
              originalPrice:55000,
              additions:[
                {name:"cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                {name:"chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                {name:"Chokopay",price:300,originalPrice:300,maxCount:1,selectedCount:1,selected:false}
              ],

              additionsExtra:[
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle2",
                  maxCount:1,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                },
                {
                  id:`${Date.now()}${Math.random()}`,
                  name:"extraTitle3",
                  maxCount:2,
                  maxCountText:"Max Choice",
                  extraSouces:[
                    {name:"Vanilla ice cream",price:0,originalPrice:0,maxCount:5,selectedCount:1,selected:false},
                    {name:"Banana chips",price:600,originalPrice:600,maxCount:3,selectedCount:1,selected:false},
                    {name:"Chokopay",price:300,originalPrice:300,maxCount:3,selectedCount:1,selected:false},
                  ]  
                }
              ],
            },
          ]
        },
      ]
    },
  ],
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMenu:selectMenuLogic,
    changeSelectedKategoriType:changeSelectedKategoriLogic,
    scrollUnable:scrolUnableLogic,
    scrollenable:scrollenableLogic,
    openSpecFood:openSpecFoodLogic,
    SelectAdAdditionsSauces:SelectAdAdditionsSauceսLogic,
    // increase:increaseCountAdditionsLogic,
    // decrease:decreaseCountAdditionsLogic,
    addOrderToBasket:addBasketLogic,
    increaseOrderCount:increaseOrderCountLogic,
    decreaseOrderCount:decreaseOrderCountLogic,
    makeOrder:makeOrderLogic,
    openorderDetail:openorderDetailLogic,
    saveChanges:saveChangesLogic,
    closeOrderSlider:closeOrderSliderLogic,
    createSliderPacket:createSliderPacketLogic,
    deleteItemFromBasket:deleteItemFromBasketLogic,
    openLanguagePopUp:openLanguagePopUpLogic,
    chengLanguage:chengLanguageLogic,
    checkSouces:checkSoucesLogic,
    decreaseadditionsExtra:decreaseadditionsExtraLogic,
    increaseadditionsExtra:increaseadditionsExtraLogic
  },


  extraReducers: (builder) => {
   
  },
});

export const { 
  selectMenu,changeSelectedKategoriType,scrollUnable,openorderDetail,closeOrderSlider,chengLanguage,
  scrollenable,openSpecFood,SelectAdAdditionsSauces,makeOrder,saveChanges,createSliderPacket,checkSouces,
  increase,decrease,addOrderToBasket,increaseOrderCount,decreaseOrderCount,deleteItemFromBasket,
  openLanguagePopUp,increaseadditionsExtra,decreaseadditionsExtra
} = globalSlice.actions;
export default globalSlice.reducer;