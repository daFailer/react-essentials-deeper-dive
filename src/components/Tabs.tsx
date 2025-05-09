interface TabsProps {
    children: React.ReactNode,
    buttons: React.ReactNode,
    buttonsContainer?: any,
}

export default function Tabs({children, buttons, buttonsContainer = 'menu'}: TabsProps): JSX.Element {
    const ButtonsContainer = buttonsContainer;

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}