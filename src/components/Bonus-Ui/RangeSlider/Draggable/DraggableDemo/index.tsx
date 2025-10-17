import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Range, getTrackBackground } from 'react-range'

const DraggableDemo = () => {
    const STEP = 1;
    const MIN = 0;
    const MAX = 20;
    const [values, setValues] = useState([5, 10]);
    return (
        <Col md={12}>
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={values => {
                    setValues(values);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '100%', alignItems: 'center', gap: '10px'
                        }}
                    >
                        <output>
                            {values[0]}
                        </output>
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values, colors: ['#ccc', '#FC4438', '#ccc'],
                                    min: MIN, max: MAX
                                }),
                                alignSelf: 'center'
                            }}>{children}</div>
                        <output>{values[1]}</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} style={{
                        ...props.style, height: '20px',
                        width: '20px', borderRadius: '0',
                        backgroundColor: '#FC4438', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA'
                    }} >
                        <div style={{
                            height: '14px', width: '14px', borderRadius: '0',
                            backgroundColor: isDragged ? '#fff' : '#fff'
                        }} />
                    </div>

                )}
            />
        </Col>
    )
}

export default DraggableDemo