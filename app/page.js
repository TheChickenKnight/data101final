import Clink from "@/components/ui/clink";
import Text from "@/components/ui/text";
import SteamIcon from "@/components/icons/SteamIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Home() {
  return (
    <div>
      <p className="text-9xl text-black dark:text-white"><strong>Chckn.Vercel</strong></p>
      <p className="text-black dark:text-white">Official website of Mark Christian (TheChickenKnight)</p>
      <a href="https://steamcommunity.com/profiles/76561198420907011" target="_blank"><SteamIcon className="inline mt-1 hover:fill-indigo-950 dark:hover:fill-zinc-300 hover:mt-0 duration-75"/></a>
      <a href="https://open.spotify.com/user/4s7g7m6go7nt6fcu1wi6ldqaz?si=ZKyJGMvYR2KIyihNpfiMbQ" target="_blank"><SpotifyIcon className="inline mt-1 ml-2 hover:fill-green-500 hover:mt-0 duration-0"/></a>
      <a href="https://github.com/TheChickenKnight" target="_blank"><GithubIcon className="inline mt-1 ml-2 hover:fill-black dark:hover:fill-white hover:mt-0 duration-0"/></a>
  </div>
  );
}
