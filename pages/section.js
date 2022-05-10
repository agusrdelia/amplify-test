export default function Section({name, url, props}) {
	console.log(props);
    return (
        <>
            <p>Hola mundo</p>
            <p>Current url: {url}</p>
            <p>Query slug: {name}</p>
            {url.indexOf('/misc/') > -1 && (<p>type: fallback</p>)}
            {url.indexOf('/tag/') > -1 && (<p>type: afterFiles</p>)}
            {url.indexOf('/category/') > -1 && (<p>type: beforeFiles</p>)}
        </>
    )
}
export async function getServerSideProps( props ) {
	const {query, req} = props;
	const { name } = query;
	return {
		props: {
			name,
            url: req.url,
			props
		},
	}
}
