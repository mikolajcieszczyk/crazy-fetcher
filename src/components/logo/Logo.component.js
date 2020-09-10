import React from 'react'

export default function Logo({title}) {
    return (
        <div>
            <div className="logo" data-testid="logo">{title}</div>
        </div>
    )
}
