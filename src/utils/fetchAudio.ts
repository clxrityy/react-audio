export default async function fetchAudio(src: string) {
    return await fetch(src, {
        method: 'GET',
        headers: {
            'Allow-Control-Allow-Origin': '*',
        },
        cache: 'no-store',
    }).then((res) => res.url)
}
