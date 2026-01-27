interface IProps {
    children: React.ReactNode;
}

function AboutUsLayout({ children }: IProps) {
    return <section>{children}</section>;
}

export default AboutUsLayout;