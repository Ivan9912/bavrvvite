import dataAnimation from '../../../BBDD/dataAnimation.json'

export const Animation = () => {
    const srcData = dataAnimation[0].animation;
    return (
        <div className="classFooter3">
            <div className="classFooter">
                <div>
                    <img className="classFooter2" src={srcData[0]} alt={"animation"} />
                </div>
                <div>
                    <img className="classFooter2" src={srcData[0]} alt={"animation"} />
                </div>
                <div>
                    <img className="classFooter2" src={srcData[0]} alt={"animation"} />
                </div>
            </div>
            <img className="classFooter1" src={srcData[1]} alt={"animation"} />
        </div>
    )
}