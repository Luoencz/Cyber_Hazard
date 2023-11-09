import '../styles/index.css'
import '../styles/app/app.css'

import {useEffect, useRef, useState} from 'react'
import ReactMarkdown from 'react-markdown'

import title_img from '../images/gametitle.png'
import article_img from '../images/closehideexpandicons.png'
import articleMd from '../text/section0/article.md'
import oracle_eyes from '../images/oracle_eyes.png'

import {
    Tile0,
    Tile1,
    Tile3,
    Tile4,
    Tile5,
    BlackBack,
    YellowBack,
    Tile6, Tile7
} from '../text/section0/glitched_welcoming_tiles'

import {ResponsiveFlex} from "../components/pwa/ResponsiveFlex/ResponsiveFlex";
import {Column} from "../components/general/Column/Column"
import SplatteredComponents from "../components/general/SplatteredText/SplatteredComponents";
import Markdown from "react-markdown";
import GlitchTextTransform from "../components/pwa/GlitchTextTransform/GlitchTextTransform";

function Adv(columnHeight: number) {

    const elements = [
        {id: 1, element: BlackBack({}), top: '0%', left: '0%', width: '29.23%', height: '32.3%'},
        {id: 1, element: BlackBack({className: 'dashed-inner-border', style: {boxShadow: '0 5px 15px rgba(0.3, 0.3, 0.3, 0.3)'}}), top: '0%', left: '51%', width: '49%', height: '43%'},
        {id: 2, element: <GlitchTextTransform className='black-background white-text-descending' style={{backgroundColor: 'transparent'}}>{Tile0({})}</GlitchTextTransform>, top: '1.5%', left: '2.4%',  width: '25%'},
        {id: 3, element: YellowBack({}), top: '27%', left: '20%', width: '29.23%', height: '35.22%'},
        {id: 3, element: YellowBack({}), top: '67.5%', left: '0%', width: '100%', height: '32.5%'},
        {id: 4, element: <GlitchTextTransform>{Tile1({})}</GlitchTextTransform>, top: '28%', left: '21%', width: '25%'},
        {id: 4, element: Tile3({}), top: '33%', left: '1%', width: '20.5%'},
        {id: 4, element: Tile4({}), top: '0.2%', left: '30.5%', width: '21.28%'},
        {id: 4, element: Tile5({}), top: '2%', left: '53.5%', width: '45.4%'},
        {id: 4, element: Tile6({}), top: '70%', left: '2.1%', width: '96%'},
        {id: 4, element: Tile7({}), top: '64%', left: '53%', width: '46%'},
        {id: 4, element: <img src={oracle_eyes} style={{width: '100%'}}/> , top: '60%', left: '22.7%', width: '25%'},
        // ... more text elements
    ];

    return (
        <SplatteredComponents style={{height: columnHeight, width: columnHeight * 0.86}} elements={elements}/>
    )
}

const Introduction = () => {
    const [articleText, setArticleText] = useState<string>('');
    const columnRef = useRef<HTMLDivElement>(null);
    const [columnHeight, setColumnHeight] = useState(0);

    useEffect(() => {
        fetch(articleMd).then(res => res.text()).then(text => setArticleText(text));
    }, []);

    useEffect(() => {
        if (columnRef.current) {
            setColumnHeight(columnRef.current.offsetHeight);
        }
    }, [articleText]); // <--- This useEffect will run when articleText changes

    return (
        <Column style={{rowGap: '0.75rem', marginTop: '4rem'}}>
            <ResponsiveFlex style={{padding: '0rem 1rem'}}>
                <Column ref={columnRef} style={{alignItems: 'center'}}>
                    {Title()}
                    {Article({articleText})}
                </Column>
                {Adv(columnHeight)}
            </ResponsiveFlex>
            {Jack_In()}
        </Column>
    )
}

const Title = () => (
    <Column className='subtitle centered' style={{rowGap: '0.3rem'}}>
        <img src={title_img} alt="Cyber Hazard" style={{width: '32rem'}}/>
        <div style={{textAlign: 'center'}}>
            Cyberpunk, Darksynth, TTRPG <br/>
            Inspired by the FitD, OSR & PbtA
        </div>
    </Column>
)


interface ArticleProps {
    articleText: string;
}

const Article = ({articleText}: ArticleProps) => (
    <Column style={{width: '35rem', marginTop: '1rem'}}>
        <div className='body' style={{border: '0.2rem black solid', padding: '0.2rem', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'}}>
            <div style={{padding: '0.2rem'}}>
                <div className='subtitle-futura'>Elevator pitch or “Why Should I Play It?”:</div>
                <div className='body' style={{fontStyle: 'italic'}}>Game written by Fedor @luoencz Ryzhenkov:</div>
            </div>
            <ReactMarkdown children={articleText}/>
        </div>
    </Column>
)

const Jack_In = () => (
    <div className="black-background subtitle-cygnito"
         style={{width: '100%', padding: '0.5rem 0rem', textAlign: 'center'}}>
        <span> &#62;&#62;&#62; Initiating Protocols: <span
            style={{color: '#C91F37'}}>Press</span> to Jack-In &#60;&#60;&#60; </span>
    </div>
)

export default Introduction;