<script>
	import defaultLogo from './wordmark-gray-800.png';
	import { addBasePath } from '@evidence-dev/sdk/utils/svelte';
	export let logo;
	export let title;
</script>

{#if logo}
	<img src={logo} alt="Home" class="h-5 aspect-auto" href={addBasePath('/')} />
{:else if title}
	{title}
{:else}
	<img src={defaultLogo} alt="Home" class="h-5 aspect-auto" href={addBasePath('/')} />
{/if}
