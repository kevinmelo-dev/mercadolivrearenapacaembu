type Progress = {
    status: number;
}

export default function Status(props: Progress) {

    const containerStyle = {
        overflow: 'hidden'
    }

    const barStyle = {
        fontSize: 'clamp(11px, 0.75vw + 0.75rem, 11px)',
        backgroundColor: '#f9e74e',
        width: `${props.status}%`,
        padding: '0.125rem 0.75rem',
        color: '#000',
        borderRadius: '1rem'
    };

    return (
        <div className={`w-40 border-2 rounded-2xl border-mainYellow`} style={containerStyle}>
            <p className="text-secondaryYellow font-pacaembuMedium" style={barStyle}>
                {props.status}%
            </p>
        </div>
    )
}