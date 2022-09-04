import { current } from "@reduxjs/toolkit"
import { splitImgToArray } from "../../pages/home/sliceLogic"


const InstanceOfMenuListData = {
    id:`${Date.now()}${Math.random()}`,
    name:"Main menu",
    selected:false,
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
}

// GetCommonMenuDetailsLogic
export function GetCommonMenuDetailsLogic(state,action) { 
    const {id,logo,getBranchMenus,symbol,covers,description} = action.payload.data
    state.branchId = id
    state.logoUrl = logo.photo
    state.priceSimbol = symbol
    state.descriptionContent = description

    // branch Menu
    getBranchMenus.map((menu,index) => {
        state.StateMenu.push({
            ...InstanceOfMenuListData,
            name:menu.name,id:menu.id
        });
        state.shimmerLoadingGlobal.homeMenuButton = state.StateMenu.length !== 0 ? false : true
    })
    covers.length = 6
    state.galeryState = splitImgToArray(covers)
    state.shimmerLoadingGlobal.shimmerLoadingGallery = state.galeryState.length !== 0 ? false : true

    console.log(action,"action")
}