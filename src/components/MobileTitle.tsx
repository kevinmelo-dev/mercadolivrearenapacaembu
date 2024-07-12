type Props = {
    text: string;
}

export default function MobileTitle(props: Props) {
    const customStyle = {
        fontSize: '0.6rem',
    };

    return (
        <div className={"w-28 border-2 rounded-2xl border-secondaryYellow p-0.5"}>
            <p className="text-secondaryYellow font-pacaembuMedium text-center" style={customStyle}>
                {props.text}
            </p>
        </div>
    )
}
