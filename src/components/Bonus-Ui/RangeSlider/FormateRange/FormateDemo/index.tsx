import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { Range, getTrackBackground } from 'react-range'

const FormateDemo = () => {
    const [values4, setValues4] = useState([10.00]);
    return (
        <Col md={12}>
            <div
                style={{
                    display: 'flex', justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Range
                    values={values4} step={1.00}
                    min={0.00} max={20.00}
                    onChange={(values4) => setValues4(values4)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%', alignItems: 'center', gap: '10px'
                            }}>
                            <output>0.00</output>
                            <div
                                ref={props.ref}
                                style={{
                                    height: '5px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: values4,
                                        colors: ['#FFAA05', '#ccc'],
                                        min: 0,
                                        max: 20
                                    }),
                                    alignSelf: 'center'
                                }}
                            >{children} </div>
                            <output>20.00</output>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div {...props} style={{
                            ...props.style, height: '26px',
                            width: '26px', borderRadius: '4px',
                            backgroundColor: '#FFF', display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA'
                        }}>
                            <div
                                style={{
                                    height: '16px',
                                    width: '16px',
                                    borderRadius: '2px',
                                    backgroundColor: isDragged ? '#4d8aff' : '#FFAA05'
                                }}
                            />
                        </div>
                    )}
                />
                <output style={{ marginTop: '12px' }} id='output'>
                    {values4[0]}.00</output>
            </div>
        </Col>
    )
}

export default FormateDemo