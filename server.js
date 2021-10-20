const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
/*let corsOptions = {
    origin : 'http://localhost:3000',
    origin: 'http://localhost:8080',
    credentials: true
}*/


app.use(express.static(__dirname + '/build'));
app.use(express.urlencoded({extended: true}))
app.use(cors());    // cors 미들웨어 추가



const MongoClient = require('mongodb').MongoClient;


var db;

MongoClient.connect('mongodb://admin:qwer1234@cluster0-shard-00-00.51jz7.mongodb.net:27017,cluster0-shard-00-01.51jz7.mongodb.net:27017,cluster0-shard-00-02.51jz7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-iwwci8-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useUnifiedTopology: true }, function(에러, client){
        if (에러) return console.log(에러);
        db = client.db('kiosk');
    })



const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

io.on("connect", socket => {
    /*console.log("connect client by Socket.io");*/

    socket.on("payButton", req => {
        /*console.log("pay")
        console.log(req);*/
        io.emit("payRespond", req)
    })

    socket.on("payCash", req => {
        /*console.log("cash")
        console.log(req);*/
        io.emit("payCash", req)
    })

    socket.on("payCard", req => {
        /*console.log("card")
        console.log(req);*/
        io.emit("payCard", req)
    })
});

http.listen(8080, function () {
    console.log('listening on 8080')
});

/* 카운터 기능 */

/* 주문 완료시 3초 후에 새로고침 */
app.post('/order', (req, res) => {
    setTimeout(() => {
        res.redirect('./order/0');
    }, 3000)
})

/* 메뉴 제작 완료 후 매출 현황에 기록하는 기능 */
app.post('/makeComp', (req, res) => {
    var menuTitle = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];

    console.log("makeComp");
    console.log(req.body);


    /* 주문 메뉴가 1가지 일 때 */
    if(typeof (req.body.title) == "string") {
        /* 메뉴 종류 */
        var sMenu;

        /* 메뉴 종류 삽입 */
        for(let i = 0; i <= 8; i++) {
            if(i == parseInt(req.body.menuIndex)) {
                sMenu = menuTitle[i];
            }
        }

        console.log("1개");
        console.log((req.body.title))

        /* 주문 추가 */
        db.collection('counter').findOne({ name : '카운터'}, (err, res) => {
            let totalCount = res.count;

            /* 매출 컬렉션 */
            db.collection('revenue').insertOne({
                    _id : (totalCount + 1), 메뉴이름 : req.body.title,
                    수량 : parseInt(req.body.count), 가격 : parseInt(req.body.price),
                    지불 : (req.body.payment == 0 ? "현금" : "카드"), 옵션 : (req.body.options)
                },
                (err, comp) => { if(err) return console.log(err) })

            /* id 값을 1 증가시키는 함수 */
            CountInc();
        })

        /* 종류 추가 */
        db.collection('variety').findOne({ 종류 : sMenu }, (err, svRes) => {
            db.collection('variety').updateOne({ 종류 : sMenu },
                {
                    $set: {
                        수량: parseInt(svRes.수량) + parseInt(req.body.count),
                        가격: parseInt(svRes.가격) + parseInt(req.body.price),
                    }
                })
        })

        /* visitors 값을 1 증가시키는 함수 */
        VisInc();
    }

    /* 주문 메뉴가 2가지 이상 일 때 */
    else if (typeof (req.body.title) == "object") {
        /* 메뉴 종류 */
        var mMenu = [];

        /* 주문 수만큼 메뉴 종류 삽입 */
        for (let i = 0; i <= req.body.menuIndex.length; i++) {
            for (let j = 0; j <= 8; j++) {
                if (j == parseInt(req.body.menuIndex[i])) {
                    mMenu[i] = menuTitle[j];
                }
            }
        }

        console.log("2가지 이상")
        console.log("주문메뉴 : " + (req.body.title))

        db.collection('counter').findOne({name: '카운터'}, (err, tcRes) => {
            let totalCount = tcRes.count;

            for (let i = 0; i < req.body.title.length; i++) {

                /* 매출 컬렉션 */
                db.collection('revenue').insertOne({
                        _id: (totalCount + (i + 1)), 메뉴이름: req.body.title[i],
                        수량: parseInt(req.body.count[i]), 가격: parseInt(req.body.price[i]),
                        지불: (req.body.payment[i] == 0 ? "현금" : "카드"), 옵션: (req.body.options[i])
                    },
                    (err, comp) => {
                        if (err) return console.log(err)
                    })
                /* id 값을 1 증가시키는 함수 */
                CountInc();
            }
        })

        /* 종류 추가 */
        for(let i = 0; i < mMenu.length; i++) {
            console.log(mMenu[i])
            console.log(req.body.count[i])
            console.log(req.body.price[i])
            db.collection('variety').findOne({종류: mMenu[i]}, (err, svRes) => {
                /*db.collection('variety').replaceOne(
                    { _id: (i + 1) },
                    { 종류: mMenu[i] },
                    { 수량: parseInt(svRes.수량) + parseInt(req.body.count[i]) },
                    { 가격: parseInt(svRes.가격) + parseInt(req.body.price[i]) },
                )*/
            })
        }

        /* visitors 값을 1 증가시키는 함수 */
        VisInc();

        /*db.collection('counter').find().toArray((err, res) => {
            /!* 주문한 종류가 DB에 존재하는지 검색 *!/
            db.collection('tmp_variety').find().toArray((varErr, mvRes) => {
                db.collection('tmp_count').findOne({ name : '카운터'}, (err, res) => {
                    let mvVar = [];
                    let dupCount = [0, 0, 0, 0, 0, 0, 0, 0];
                    let dupPrice = [0, 0, 0, 0, 0, 0, 0, 0];
                    let uniqArr = [];

                    for (let i = 0; i < mvRes.length; i++) {
                        mvVar.push(mvRes[i].종류);
                    }
                    /!*
                    console.log("mvVar : ")
                    console.log(mvVar);
                    *!/

                    /!* 중복된 종류 탐색, 결합 *!/
                    req.body.menuIndex.forEach((e) => {
                        if(!uniqArr.includes(e)) {
                            uniqArr.push(e);
                        }
                    })

                    /!* 배열에 중복된 종류 삽입 *!/
                    for (let i = 0; i < req.body.menuIndex.length; i++) {
                        dupCount[parseInt(req.body.menuIndex[i])] += parseInt(req.body.count[i]);
                        dupPrice[parseInt(req.body.menuIndex[i])] += parseInt(req.body.price[i]);
                    }
                    /!*
                    console.log(dupCount)
                    console.log(dupPrice)
                    *!/

                    for(let i = 0; i < menuTitle.length; i++) {
                        db.collection('tmp_variety').updateOne({ 종류 : menuTitle[i] },
                            { $inc: { 수량: dupCount[i], 가격: dupPrice[i] } })
                    }
                })
            })

        })*/

    }

    setTimeout( () => {
        /*res.send("test")*/
        res.redirect("./AdminPage/Counter");
    }, 3000)

})

/* id값을 1 증가시켜서 DB를 업데이트하는 함수 */
function CountInc() {
    return (
        db.collection('counter').updateOne({ name : "카운터" },
            { $inc : { count : 1 }}, (err, comp) => {
                if(err) return console.log(err);
            })
    )
}

/* visitors값을 1 증가시켜서 DB를 업데이트하는 함수 */
function VisInc() {
    return (
        db.collection('counter').updateOne({ name : "카운터" },
            { $inc : { visitors : 1 }}, (err, comp) => {
                if(err) return console.log(err);
            })
    )
}

/* 매출표 작성을 위한 주문데이터를 DB에 삽입하는 과정 */
/*app.post('/payInfo', (req, res) => {

    var menuTitle = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];

    console.log("req")
    console.log(req.body)

    /!* 주문 메뉴가 1가지 일 때 *!/
    if(typeof (req.body.title) == "string") {
        var sMenu;

        for(let i = 0; i <= 8; i++) {
            if(i == req.body.menuIndex) {
                sMenu = menuTitle[i];
            }
        }

        console.log("1개");
        console.log((req.body.title))

        /!* 주문 추가 *!/
        db.collection('tmp_count').findOne({ name : '카운터'}, (err, res) => {
            let totalCount = res.count;
            let grpCount = (res.visitors + 1);

            /!* 카운터 컬렉션 *!/
            db.collection('counter').insertOne({
                    _id : (totalCount + 1), 메뉴이름 : req.body.title,
                    수량 : parseInt(req.body.count), 가격 : parseInt(req.body.price),
                    지불 : parseInt(req.body.payment), group : (grpCount)
                },
                (err, comp) => { if(err) return console.log(err) })

            /!* id 값을 1 증가시키는 함수 *!/
            tmpCountInc();
        })

        /!* 종류 추가 *!/
        /!* 주문한 종류가 DB에 존재하는지 검색 *!/
        db.collection('tmp_variety').findOne({ 종류 : sMenu }, (err, svRes) => {
            db.collection('tmp_count').findOne({ name : '카운터'}, (err, res) => {
                let totalCount = res.count;

                /!* 주문한 종류가 DB에 존재하지 않을 때 *!/
                if (svRes == null) {
                    db.collection('tmp_variety').insertOne({
                        /!*_id: (totalCount + 1), *!/종류: sMenu, 수량: parseInt(req.body.count),
                        가격: parseInt(req.body.price)
                    }, (err, comp) => {
                        if (err) return console.log(err)
                    })
                }

                /!* 주문한 종류가 DB에 존재할 때 *!/
                else {
                    db.collection('tmp_variety').updateOne({ 종류 : sMenu },
                        {
                            $set: {
                                수량: parseInt(svRes.수량) + parseInt(req.body.count),
                                가격: parseInt(svRes.가격) + parseInt(req.body.price),
                            }
                        })
                }
            })
        })

        /!* visitors 값을 1 증가시키는 함수 *!/
        tmpVisInc();
    }

    /!* 주문 메뉴가 2가지 이상 일 때 *!/
    else if (typeof (req.body.title) == "object") {
        var mMenu = [];

        /!*console.log(req.body.menuIndex);*!/
        for(let i = 0; i <= req.body.menuIndex.length; i++) {
            for(let j = 0; j <= 8; j++) {
                if(j == parseInt(req.body.menuIndex[i])) {
                    mMenu[i] = menuTitle[j];
                }
            }
        }

        /!*console.log(mMenu);*!/
        console.log("2가지 이상")
        console.log("주문메뉴 : " + (req.body.title))

        db.collection('tmp_count').findOne({ name : '카운터'}, (err, tcRes) => {
            let tmpCount = tcRes.count;
            let grpCount = (tcRes.visitors + 1);

            for (let i = 0; i < req.body.title.length; i++) {

                /!* 카운터 컬렉션 *!/
                db.collection('counter').insertOne({
                        _id: (tmpCount + ( i + 1 )), 메뉴이름: req.body.title[i],
                        수량: parseInt(req.body.count[i]), 가격: parseInt(req.body.price[i]),
                        지불 : parseInt(req.body.payment[i]), group: (grpCount)
                    },
                    (err, comp) => {
                        if (err) return console.log(err)
                    })
                tmpCountInc();

            }
        })

        /!* visitors 값을 1 증가시키는 함수 *!/
        tmpVisInc();

        db.collection('counter').find().toArray((err, res) => {
            /!* 주문한 종류가 DB에 존재하는지 검색 *!/
            db.collection('tmp_variety').find().toArray((varErr, mvRes) => {
                db.collection('tmp_count').findOne({ name : '카운터'}, (err, res) => {
                    let mvVar = [];
                    let dupCount = [0, 0, 0, 0, 0, 0, 0, 0];
                    let dupPrice = [0, 0, 0, 0, 0, 0, 0, 0];
                    let uniqArr = [];

                    for (let i = 0; i < mvRes.length; i++) {
                        mvVar.push(mvRes[i].종류);
                    }
                    /!*
                    console.log("mvVar : ")
                    console.log(mvVar);
                    *!/

                    /!* 중복된 종류 탐색, 결합 *!/
                    req.body.menuIndex.forEach((e) => {
                        if(!uniqArr.includes(e)) {
                            uniqArr.push(e);
                        }
                    })

                    /!* 배열에 중복된 종류 삽입 *!/
                    for (let i = 0; i < req.body.menuIndex.length; i++) {
                        dupCount[parseInt(req.body.menuIndex[i])] += parseInt(req.body.count[i]);
                        dupPrice[parseInt(req.body.menuIndex[i])] += parseInt(req.body.price[i]);
                    }
                    /!*
                    console.log(dupCount)
                    console.log(dupPrice)
                    *!/

                    for(let i = 0; i < menuTitle.length; i++) {
                        db.collection('tmp_variety').updateOne({ 종류 : menuTitle[i] },
                            { $inc: { 수량: dupCount[i], 가격: dupPrice[i] } })
                    }
                })
            })

        })

        /!*
        /!* id값을 1 증가시키는 함수 *!/
        tmpCountInc();

        /!* visitors값을 1 증가시키는 함수 *!/
        tmpVisInc();
        *!/
    }

    setTimeout(() => {
        res.redirect('./order/0');
    }, 3000)

})*/

/* counter collecion 호출 */
/*app.get('/getCounter', (req, res) => {

    db.collection('counter').find().toArray((err, comp) => {
        if(err) return err;

        console.log(comp)
        let count = -1;
        let arr1 = [];  // 11 222
        let arr2 = [];  //
        for(let i = 0; i < comp.length; i++) {
            if(!arr1.includes(comp[i].group)) {
                arr1.push(comp[i].group)
                arr2.push(1)
                count++
            }
            else arr2[count] += 1
        }

        console.log(arr1)
        console.log(arr2)
        if(comp != null) res.json({ comp });
    })
})*/

/* 매출 현황 기능 */

/* revenue collecion 호출 */
app.get('/getRevenue', (req, res) => {

    db.collection('revenue').find().toArray((err, comp) => {
        if(err) return err;

        if(comp != null) res.json({ comp });
    })
})

/* rev_variety collecion 호출 */
app.get('/getVariety', (req, res) => {

    db.collection('rev_variety').find().toArray((err, comp) => {
        if(err) return err;

        var menuTitle = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];
        var countArr = [0, 0, 0, 0, 0, 0, 0, 0];
        var priceArr = [0, 0, 0, 0, 0, 0, 0, 0];

        if(comp != null) {
            for(var i = 0; i < comp.length; i++) {
                for(var j = 0; j < menuTitle.length; j++) {
                    if(comp[i].종류 == menuTitle[j]) {
                        countArr[j] += parseInt(comp[i].수량);
                        priceArr[j] += comp[i].가격;
                    }
                }
            }

            var jsonArr = new Array();
            for ( var i = 0; i < menuTitle.length; i++) {
                var jsonObj = new Object();

                jsonObj.종류 = menuTitle[i];
                jsonObj.수량 = countArr[i];
                jsonObj.가격 = priceArr[i];

                jsonObj = JSON.stringify(jsonObj);
                jsonArr.push(JSON.parse(jsonObj));
            }

            res.json({ jsonArr });
        }
    })
})

/* 총 매출 확인 */
app.get('/getPrice', (req, res) => {
    db.collection('revenue').find().toArray((err, comp) => {
        if (err) return err;
        var priceArray = [];

        if(comp != null) {

            comp.map((num, index) => {
                priceArray[index] = (comp[index].가격);
            })

            /*console.log(priceArray);*/
            res.json(priceArray);
        }
    })
})

/* 총 방문객 수 확인 */
app.get('/getVisitors', (req, res) => {
    db.collection('rev_count').find().toArray((err, comp) => {
        if(err) return err;

        if( comp != null ) {
            res.json(comp[0].visitors);
        }
    })
})

/* DB 초기화 기능 */
app.delete('/dbReset', (req, res) => {

    /* counter Reset */
    db.collection('counter').updateOne({ name : "카운터" },
        { $set : { count : 0, visitors: 0 }}, (err, comp) => {
            if (err) return err;
            else console.log("counter Reset Success");
        })

    /* variety Reset */
    for(let i = 1; i <= 8; i++) {
        db.collection('variety').updateOne({ _id : i },
            { $set : { 수량 : 0, 가격 : 0 }}, (err, comp) => {
                if (err) return err;
            })
    }

    /* revenue Reset */
    db.collection('revenue').deleteMany({}, (err) => {
        if (err) return err;
        else console.log("revenue Reset Success");
    })

    setTimeout(() => {
        res.send("Reset Success");
    }, 3000)

})

app.get('/', function (req, res) {
    console.log("1");
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', function (req, res) {
    /*console.log("2");*/
    res.sendFile(path.join(__dirname, '/build/index.html'));
});