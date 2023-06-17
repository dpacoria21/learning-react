export const Quote = ({quote}) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <br />
            <footer className="blockquote-footer">Diego Ivan</footer>
        </blockquote>
    )
}