const xAxisdata = [
    {
        "name": 'فروردین',
        "Sale": 155_000
    },
    {
        "name": 'اردیبهشت',
        "Sale": 220_000
    },
    {
        "name": 'خرداد',
        "Sale": 100_000
    },
    {
        "name": 'تیر',
        "Sale": 150_000
    },
    {
        "name": 'مرداد',
        "Sale": 305_500
    },
    {
        "name": 'شهریور',
        "Sale": 100_300
    },
    {
        "name": 'مهر',
        "Sale": 230_450
    },
    {
        "name": 'آبان',
        "Sale": 300_000
    },
    {
        "name": 'آذر',
        "Sale": 158_090
    },
    {
        "name": 'دی',
        "Sale": 305_898
    },
    {
        "name": 'بهمن',
        "Sale": 214_603
    },
    {
        "name": 'اسفند',
        "Sale": 120_700
    },
]

const Users=[
    {
        id:1,
        username:'یاسمین عزیزی',
        job:'3D Dev',
        img:'avatar1.png',
    },      
    {
        id:2,
        username:'مبینا بخش پور',
        job:'Java Dev',
        img:'avatar8.png',
    },    
    {
        id:3,
        username:'آرش عظیمی',
        job:'Java Dev',
        img:'avatar4.png',
    }
]

const transActions=[
    {
        id:1,
        customer:'صحرا یاری',
        data:'3 Jan 2023',
        amount:'$250',
        status:'Approved',
        img:'avatar3.png',
    },
    {
        id:2,
        customer:'پارسا اسماعیلی',
        data:'15 1jun 2021',
        amount:'$35000',
        status:'Pending',
        img:'avatar5.png',
    },    
    {
        id:3,
        customer:'مینا شیرازی',
        data:'20 Oct 2020',
        amount:'$190',
        status:'Declined',
        img:'avatar7.png',
    },    
    {
        id:4,
        customer:'بهرام میرامینی',
        data:'9 Sep 2023',
        amount:'$450',
        status:'Approved',
        img:'avatar9.png',
    },    
    {
        id:5,
        customer:'سینا علوی',
        data:'19 Dec 2020',
        amount:'$600',
        status:'Pending',
        img:'avatar10.png',
    }
]

const userRow=[
    {
        id:1,
        username:'مبینا روحانی',
        img:'avatar8.png',
        status:'active',
        transaction:'$190',
        email:'mobinarohani@gmail.com'
    },{
        id:2,
        username:'امیر کریمی',
        img:'avatar4.png',
        status:'non-active',
        transaction:'$3200',
        email:'amirkarimi@gmail.com'
    },{
        id:3,
        username:'زهرا مرادی',
        img:'avatar11.png',
        status:'non-active',
        transaction:'$155',
        email:'zahramoradi@gmail.com'
    },{
        id:4,
        username:'یاسمین عزیزی',
        img:'avatar3.png',
        status:'active',
        transaction:'$250',
        email:'yasaminazizi@gmail.com'
    },{
        id:5,
        username:'رضا فیروزی',
        img:'avatar6.png',
        status:'active',
        transaction:'480',
        email:'rezafirozi@gmail.com'
    },{
        id:6,
        username:'ریحانه جعفری',
        img:'avatar2.png',
        status:'non-active',
        transaction:'$100',
        email:'rayhanejafari@gmail.com'
    },{
        id:7,
        username:'سامان بیانی',
        img:'avatar5.png',
        status:'non-active',
        transaction:'$305',
        email:'samanbayani@gmail.com'
    },
]

const product=[
    {
        id:1,
        title:'asus',
        price:'$550',
        img:'logo192.png',
    },{
        id:2,
        title:'airpod',
        price:'$35',
        img:'logo192.png',
    },{
        id:3,
        title:'Lenovo',
        price:'$230',
        img:'logo192.png',
    },{
        id:4,
        title:'Hp',
        price:'$350',
        img:'logo192.png',
    }
]

const productData=[
    {
        name:'Jan',
        Sale:220
    },    {
        name:'Feb',
        Sale:300
    },    {
        name:'Mar',
        Sale:409
    },    {
        name:'Apr',
        Sale:189
    },    {
        name:'May',
        Sale:530
    }
]

export {xAxisdata , Users ,transActions , userRow ,product ,productData};