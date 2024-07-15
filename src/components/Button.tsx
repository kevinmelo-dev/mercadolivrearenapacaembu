type Button = {
    text: string;
    link: string;
}

export default function Button(props: Button) {

    const barStyle = {
        fontSize: '0.6rem',
        backgroundColor: '#f9e74e',
        padding: '0.125rem 0.75rem',
        color: '#000',
        borderRadius: '1rem'
    };

    return (
        <div className="w-3/5 mx-auto border-2 rounded-2xl border-mainYellow text-center" style={barStyle}>
            <a href={props.link} target="__blank" className="font-pacaembuBold">
                {props.text}
            </a>
        </div>
    )
}