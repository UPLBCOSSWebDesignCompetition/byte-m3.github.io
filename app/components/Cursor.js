"use client";

import { useState, useEffect, useRef } from "react";

function Cursor() {
    const [circleElements, setCircleElements] = useState([]);
    const circleRef = useRef([]);

    useEffect(() => {
        const colors = [
            "#ffffff"
        ];

        let circles = [];
        for (let i = 0; i < 20; i++) {
            circles.push(
                <div
                    className="circle"
                    style={{
                        backgroundColor: colors[i % colors.length],
                        opacity: 0,
                    }}
                    x={0}
                    y={0}
                    key={i}
                    ref={ (el) => circleRef.current.push(el) }
                ></div>
            );
        }
        setCircleElements(circles);

        const coords = { x: 0, y: 0 };
        
        window.addEventListener("mousemove", function(e){
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circleRef.current.forEach(function (circle, index) {
                if (!circle) {
                    return;
                }

                circle.style.opacity = 1;
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";
                circle.style.scale = (circleRef.current.length - index) / circleRef.current.length;
                circle.setAttribute("x", x);
                circle.setAttribute("y", y);

                const nextCircle = circleRef.current[index + 1] || circleRef.current[0];
                x += (nextCircle.getAttribute("x") - x) * 0.3;
                y += (nextCircle.getAttribute("y") - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();
    }, []);

    return (
        <>
            { circleElements }
        </>
    );
}

export default Cursor;