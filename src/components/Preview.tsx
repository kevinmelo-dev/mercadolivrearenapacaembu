type Image = {
    url: string;
    height: number;
}

export default function Preview(props: Image) {

    const previewStyle = {
        height: `${props.height}vw`
    }

    return (
        <div className="mt-3 w-100 border-2 rounded-xl border-secondaryYellow">
            <div className={`relative w-full`} style={previewStyle}>
                <img src={props.url} alt="Preview" className="absolute inset-0 h-full w-full object-cover rounded-xl" />
            </div>
        </div>
    )
}