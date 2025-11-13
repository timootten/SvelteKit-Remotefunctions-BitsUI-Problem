<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { getTest } from './test.remote';

	const texts = await getTest('test1');

	let open = $state(false);
</script>

<h1>SvelteKit Remote Functions - Bits-UI Problem</h1>

<p>{texts}</p>

<!-- When removing this, the error disappears -->
<div>
	<Sheet.Root bind:open></Sheet.Root>
</div>
