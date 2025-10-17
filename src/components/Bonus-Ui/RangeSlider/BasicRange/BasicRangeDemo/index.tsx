import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

const BasicRangeDemo = () => {
    const [values1, setValues1] = useState([10]);
    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <Range values={values1} step={1} min={0} max={20}
                onChange={(values1) => setValues1(values1)}
                renderTrack={({ props, children }) => (
                    <div onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px', display: 'flex', width: '100%', alignItems: 'center', gap: '10px'
                        }}>
                        <output>0</output>
                        <div ref={props.ref}
                            style={{
                                height: '8px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values: values1,
                                    colors: ['#7366FF', '#ccc'],
                                    min: 0,
                                    max: 20
                                }), alignSelf: 'center'
                            }} >{children}</div>
                        <output>20</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} style={{
                        ...props.style,
                        height: '25px', width: '25px', borderRadius: '30px',
                        backgroundColor: '#7366FF', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA'
                    }} >
                        <div style={{
                            height: '16px',
                            backgroundColor: isDragged ? '#4d8aff' : '#CCC'
                        }} />
                    </div>)} />
            <output style={{ marginTop: '12px' }} id='output'>
                {values1[0]}
            </output>
        </div>
    )
}

export default BasicRangeDemo