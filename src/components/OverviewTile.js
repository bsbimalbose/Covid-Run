import React from 'react'

export default function OverviewTile({label, count}) {
    return (
        <div className="overview-tile">
            <p className="label">{label}</p>
            <div className="count">{count}</div>
        </div>
    )
}
