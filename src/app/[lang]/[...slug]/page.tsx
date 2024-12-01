import Container from "./../components/Container";
import Image from 'next/image';

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export default async function PageRoute({params}: Props) {
    return (
        <Container>
            <Image src={`/logo.png`} alt={'logo'} width="64" height="64" />
        </Container>
    )
}
