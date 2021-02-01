import React, { useEffect, useState } from 'react';
import Error from './Error';

const Loading = () => {
    const [cube1, setCube1] = useState("loading_cube_1");
    const [cube2, setCube2] = useState("loading_cube_2");
    const [cube3, setCube3] = useState("loading_cube_3");
    const [cube4, setCube4] = useState("loading_cube_4");
    const [updateCube, setUpdateCube] = useState(1);
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
        const timer = setTimeout(() => {
            if (updateCube === 1) {
                setCube4('loading_cube_4')
                setCube1('loading_cube_active1');
                setUpdateCube(2);
            } else if (updateCube === 2) {
                setCube1('loading_cube_1');
                setCube2('loading_cube_active2');
                setUpdateCube(3);
            } else if (updateCube === 3) {
                setCube2('loading_cube_2');
                setCube3('loading_cube_active3');
                setUpdateCube(4);
            } else if (updateCube === 4) {
                setCube3('loading_cube_3');
                setCube4('loading_cube_active4');
                setUpdateCube(1);
            }
            // counter to show error message when loading takes too long
            setCounter(counter + 1)
        }, 200);
        return () => clearTimeout(timer)
    }, [updateCube, counter])

    return (
        <>
            {
                counter <= 50 ?
                    <div className="loading_screen">
                        <div className={cube1}>
                        </div>
                        <div className={cube2}>
                        </div>
                        <div className={cube3}>
                        </div>
                        <div className={cube4}>
                        </div>
                        <h1>Loading...</h1>
                    </div>
                :
                    <div className="container">
                        <Error />
                    </div>
            }
        </>
    )
};
export default Loading;