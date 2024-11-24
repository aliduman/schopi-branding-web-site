type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export default async function PageRoute({params}: Props) {
    return(
        <div className={'text-center'}>Page {params.lang}</div>
    )
}
