export default function Detail({ tag, info }: detail) {
    return (
        <p>
            <b>{tag}:</b> {info}
        </p>
    );
}

interface detail {
    tag: string
    info: any
}