export default function Section({title, children, ...props}: {title: string, children: React.ReactNode, [key: string]: React.HTMLAttributes<HTMLElement>}): JSX.Element {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}