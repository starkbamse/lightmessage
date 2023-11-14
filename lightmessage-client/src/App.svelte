<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import Voice from './Communications/Recorder/Voice.svelte';
    import VoiceDecoder from './VoiceDecoder.svelte';
    import Navbar from './components/Navbar.svelte';




</script>
<Navbar/>
<main>
  <!--
<Voice/>
<VoiceDecoder/>-->

<button class="btn btn-primary">Test</button>
</main>

<style>
main {
  font-family: "Inter", sans-serif;
}
</style>
