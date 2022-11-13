import React from 'react'

export default function Alert(prop) {
    return (
        <div style={{ height: '50px' }}>
            {prop.alert && <div className={`alert alert-${prop.alert.type} fade show d-flex justify-content-between`} role="alert">
                <strong>{prop.alert.msg}</strong>
            </div>}
        </div>
    )
}
