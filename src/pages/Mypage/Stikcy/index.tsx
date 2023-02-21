import React from 'react'
import imgage45 from '../../../assets/images/stikcy/a.png'
import imgage18 from '../../../assets/images/stikcy/b.png'
import imgage17 from '../../../assets/images/stikcy/c.png'
import imgage16 from '../../../assets/images/stikcy/d.png'
import imgage44 from '../../../assets/images/stikcy/e.png'
import imgage46 from '../../../assets/images/stikcy/f.png'
import * as S from './style'


const data = [
    {
        id:1,
        img:<img src={imgage45} className="a"/>,
        name:'윤형근, Burnt Umber & Ultramarine Blue',
        price:'200,000원'
    },
    {
        id:2,
        img:<img src={imgage18} className="b" />,
        name:'빈센트 반 고흐 Landscape with Snow 아트 프린트',
        price:'200,000원',
    },
    {
        id:3,
        img:<img src={imgage17} className="c"/>,
        name:'마크 로스코 Untitled (Violet, Black,...',
        price:'200,000원',
    },
    {
        id:4,
        img:<img src={imgage16} className="d"/>,
        name:'카미유 피사로 The Hermitage at Pontoise...',
        price:'200,000원',
    }
]

const data2 = [
    {
        id:1,
        img:<img src={imgage16} className="d2"/>,
        name:'이우환, In Milano 5',
        price:'200,000원',
    },
    {
        id:2,
        img:<img src={imgage44} className="e"/>,
        name:'카미유 피사로 The Hermitage at Pontoise...',
        price:'200,000원',
    },
    {
        id:3,
        img:<img src={imgage45} className="a2"/>,
        name:'카미유 피사로 The Hermitage at Pontoise...',
        price:'200,000원',
    },
    {
        id:4,
        img:<img src={imgage46} className="f"/>,
        name:'Yayoi Kusama, Eyes Flying in the Sky',
        price:'200,000원',
    }
]

const data3 = [
    {
        id:1,
        img:<img src={imgage46} className="f2"/>,
        name:'Yayoi Kusama, Eyes Flying in the Sky',
        price:'200,000원',
    },
    {
        id:2,
        img:<img src={imgage18} className="b2" />,
        name:'빈센트 반 고흐 Landscape with Snow 아트 프린트',
        price:'200,000원',
    },
    {
        id:3,
        img:<img src={imgage17} className="c2"/>,
        name:'마크 로스코 Untitled (Violet, Black,...',
        price:'200,000원',
    },
    {
        id:4,
        img:<img src={imgage44} className="e2"/>,
        name:'카미유 피사로 The Hermitage at Pontoise...',
        price:'200,000원',
    },
   ]

function Index() {
  return (
    <S.Container>
        <div className="content">
        {data.map((d) => (
            <div className="data" key={d.id}> 
            {d.img}
            <div className="name">{d.name}</div>
            <div className="price">{d.price}</div>
            </div>
        ))}
        </div>
        <div className="content2">
        {data2.map((d) => (
            <div className="data2" key={d.id}> 
            {d.img}
            <div className="name">{d.name}</div>
            <div className="price">{d.price}</div>
            </div>
        ))}
        </div>
        <div className="content2">
        {data3.map((d) => (
            <div className="data2" key={d.id}> 
            {d.img}
            <div className="name">{d.name}</div>
            <div className="price">{d.price}</div>
            </div>
        ))}
        </div>
    </S.Container>
  )
}

export default Index