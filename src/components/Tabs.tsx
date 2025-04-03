interface TabsProps {
    children: React.ReactNode,
    [key: string]: any
}

export default function Tabs({children, buttons}: TabsProps): JSX.Element {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}