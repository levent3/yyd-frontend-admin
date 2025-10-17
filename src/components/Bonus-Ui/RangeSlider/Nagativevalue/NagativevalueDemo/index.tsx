import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { Range, getTrackBackground } from 'react-range';

const NagativevalueDemo = () => {
    const [values2, setValues2] = useState([-10]);
    return (
        <Col md={12}>
            <div
                style={{
                    display: 'flex', justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Range
                    values={values2} step={-1}
                    min={-20} max={0}
                    onChange={(values2) => setValues2(values2)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style, height: '36px',
                                display: 'flex', width: '100%', alignItems: 'center', gap: '10px'
                            }}>
                            <output>0</output>
                            <div
                                ref={props.ref}
                                style={{
                                    height: '8px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: values2,
                                        colors: ['#FF3364', '#ccc'],
                                        min: -20, max: -0
                                    }), alignSelf: 'center'
                                }}
                            >{children}</div>
                            <output>-20</output>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '25px',
                                width: '25px',
                                borderRadius: '30px',
                                backgroundColor: '#FF3364',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA'
                            }}
                        >
                            <div
                                style={{
                                    height: '17px', width: '17px', borderRadius: '30px',
                                    backgroundColor: isDragged ? '#fff' : '#fff'
                                }} /></div>
                    )}
                />
                <output style={{ marginTop: '12px' }} id='output'>
                    {values2[0]}</output>
            </div>
        </Col>
    )
}

export default NagativevalueDemo