<script>
    import { onMount } from 'svelte';

    let body = '...loading...';

    async function clientLoad() {
        let resp = await fetch(`https://api.iconify.design/carbon.json?icons=sun`)
        body = JSON.stringify(await resp.json(), null, 4)
    }
    
    onMount(clientLoad)
</script>

<pre>{body}</pre>
