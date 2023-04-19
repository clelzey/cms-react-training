export default function Detail({ tag, info }: detail) {
    return (
        <div>
            <b>{tag}:</b> {info}
        </div>
    );
}

interface detail {
    tag: string
    info: any
}