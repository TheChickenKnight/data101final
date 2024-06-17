'use client'

import Image from "next/image"
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import { useEffect, useState } from "react";

export default function Spotify() {
    const [artist, setArtist] = useState();
    const [name, setName] = useState();
    const [url, setURL] = useState();
    const [image, setImage] = useState();
    const [isPlaying, setIsPlaying] = useState();

    useEffect(() => {
        fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chcknknight&format=json&limit=1&api_key=7145b082192138a47e846b2f36069203").then(res => res.json())
            .then(async json => {
                const data = json.recenttracks.track[0];
                setArtist(data.artist['#text']);
                setName(data.name);
                setURL(data.url);
                setImage(data.image[3]['#text']);
                setIsPlaying(data['@attr']);
            });
    }, []);
    return (
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 min-w-[500px] w-fit h-1/6 rounded-3xl block relative m-4">
            <Image className="rounded-3xl p-3 whitespace-nowrap outline outline-white dark:outline-black" alt="spotify music cover" width="200" height="200" src={isPlaying ? image : "/not-playing.png"}></Image>
            <p className="whitespace-nowrap block absolute top-5 right-4 text-white text-lg">
                <strong className="text-white">{isPlaying ? name : "Not currently playing"}</strong>
                <br/>
                {isPlaying ? artist : ""}
            </p>
            <p className="absolute right-12 bottom-3 text-white">Spotify</p>
            <SpotifyIcon className="fill-white absolute right-2 bottom-2"/>
        </div>
    );
}