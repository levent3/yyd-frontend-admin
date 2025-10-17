import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { Range, getTrackBackground } from 'react-range'

const DisabledDemo = () => {
    const [values3, setValues3] = useState([10]);
    return (
        <Col md={12}>
            <div style={{
                display: 'flex', justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <Range
                    values={values3} step={1} min={0} max={20}
                    onChange={(values3) => setValues3(values3)}
                    disabled={true}
                    renderTrack={({ props, children }) => (
                        <div onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%', alignItems: 'center', gap: '10px'
                            }}>
                            <output>0</output>
                            <div
                                ref={props.ref}
                                style={{
                                    height: '8px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: values3,
                                        colors: ['#54BA4A', '#ccc'],
                                        min: 0,
                                        max: 20
                                    }),
                                    alignSelf: 'center'
                                }}>{children}
                            </div>
                            <output>20</output>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '25px',
                                width: '25px',
                                borderRadius: '0',
                                backgroundColor: '#54BA4A',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA',
                            }}>
                            <div
                                style={{
                                    height: '17px',
                                    width: '17px',
                                    backgroundColor: isDragged ? '#fff' : '#fff'
                                }}
                            />
                        </div>
                    )}
                />
                <output style={{ marginTop: '12px' }} id='output'>
                    {values3[0]}</output>
            </div>
        </Col>
    )
}

export default DisabledDemo