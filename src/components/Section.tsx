interface SectionProps {
    title: string,
    children: React.ReactNode,
    [key: string]: any
}

export default function Section({title, children, ...props}: SectionProps): JSX.Element {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}