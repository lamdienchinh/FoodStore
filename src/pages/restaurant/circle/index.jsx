import React, { useState } from 'react';
import './CircleSelector.css';
import {calc_deg} from "../../../const"

const CircleSelector = () => {
    const [selected, setSelected] = useState(4);
    const [listIndex, setListIndex] = useState([4, 3, 2, 1]);
    const [showTwoLeaves, setShowTwoLeaves] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldDelayShow, setShouldDelayShow] = useState(true);
    const handleClick = (index) => {
        if (isAnimating) return; // Tránh xử lý nếu animation đang diễn ra
        setIsAnimating(true); // Bắt đầu animation
        setShowTwoLeaves(false); // Ẩn twoleaves
        setShouldDelayShow(true); // Kích hoạt delay khi ẩn
        let step = Math.abs(listIndex[4 - index] - selected);
        console.log("select", selected)
        console.log("index", index)
        console.log("step", step)
        let it4 = listIndex[0] + step;
        let it3 = listIndex[1] + step;
        let it2 = listIndex[2] + step;
        let it1 = listIndex[3] + step;
        if (it4 > 4) {
            it4 = it4 - 4
        }
        if (it3 > 4) {
            it3 = it3 - 4
        }
        if (it2 > 4) {
            it2 = it2 - 4
        }
        if (it1 > 4) {
            it1 = it1 - 4
        }
        let item4 = `${listIndex[0]}-${it4}`
        let item3 = `${listIndex[1]}-${it3}`
        let item2 = `${listIndex[2]}-${it2}`
        let item1 = `${listIndex[3]}-${it1}`
        console.log(item1)
        console.log(item2)
        console.log(item3)
        console.log(item4)
        setPreviousRotation([previousRotation[0] + calc_deg[item1], previousRotation[1] + calc_deg[item2], previousRotation[2] + calc_deg[item3], previousRotation[3] + calc_deg[item4]])
        console.log("Check", [previousRotation[0] + calc_deg[item1], previousRotation[1] + calc_deg[item2], previousRotation[2] + calc_deg[item3], previousRotation[3] + calc_deg[item4]])
        setListIndex([it4, it3, it2, it1]);

        setTimeout(() => {
            setIsAnimating(false); // Kết thúc animation

            if (shouldDelayShow) {
                setShowTwoLeaves(true); // Hiển thị lại twoleaves sau 2 giây
            }
        }, 2000);
    }
    const [previousRotation, setPreviousRotation] = useState([160, 190, 220, 360]);
    const elementStyle = {
        '--previous-rotation1': `${previousRotation[0]}deg`, // Áp dụng giá trị vào biến CSS
        '--previous-rotation2': `${previousRotation[1]}deg`, // Áp dụng giá trị vào biến CSS
        '--previous-rotation3': `${previousRotation[2]}deg`, // Áp dụng giá trị vào biến CSS
        '--previous-rotation4': `${previousRotation[3]}deg`, // Áp dụng giá trị vào biến CSS
    };
    return (
        <div className="aspect-square circle-container">
            <div className="aspect-square circle">
                <span className={`twoleaves ${showTwoLeaves ? 'visible' : 'hidden'}`}></span>
                <span className="leaf"></span>
                <span style={elementStyle} onClick={() => handleClick(4)} className={`item item4 size-${listIndex[0]} rotation-4`}></span>
                <span style={elementStyle} onClick={() => handleClick(3)} className={`item item3 size-${listIndex[1]} rotation-3`}></span>
                <span style={elementStyle} onClick={() => handleClick(2)} className={`item item2 size-${listIndex[2]} rotation-2`}></span>
                <span style={elementStyle} onClick={() => handleClick(1)} className={`item item1 size-${listIndex[3]} rotation-1`}></span>
            </div>
        </div>
    );
};

export default CircleSelector;