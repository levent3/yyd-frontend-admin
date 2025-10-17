import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { Range, getTrackBackground } from 'react-range'

const LabelDemo = () => {
    const [values5, setValues5] = useState([10]);
    return (
        <Col md={12}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Range
                    values={values5} step={1.00}
                    min={0.00} max={20.00}
                    onChange={(values5) => setValues5(values5)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px', display: 'flex', width: '100%', alignItems: 'center', gap: '10px'
                            }}
                        >
                            <output>0 kg</output>
                            <div
                                ref={props.ref}
                                style={{
                                    height: '8px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: values5,
                                        colors: ['#16C7F9', '#ccc'],
                                        min: 0,
                                        max: 20
                                    }),
                                    alignSelf: 'center'
                                }}>{children}</div>
                            <output>20 kg</output>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div {...props} style={{
                            ...props.style,
                            height: '30px', width: '5px',
                            borderRadius: '30px', backgroundColor: '#16C7F9',
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA'
                        }}>
                            <div
                                style={{
                                    height: '0', width: '0',
                                    backgroundColor: isDragged ? '#16C7F9' : '#CCC'
                                }}
                            />
                        </div>
                    )}
                />
                <output style={{ marginTop: '12px' }} id='output'>
                    {values5[0]} kg</output>
            </div>
        </Col>
    )
}

export default LabelDemo