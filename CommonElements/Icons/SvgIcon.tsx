import React from 'react'

// get iconId ,class and other event by props and it will returns icon which you want  

const SvgIcon = (props: any) => {
    const { iconId, ...res } = props;
    return (
        <svg {...res}>
            <use href={`/assets/svg/icon-sprite.svg#${iconId}`}></use>
        </svg>
    )
}

export default SvgIcon