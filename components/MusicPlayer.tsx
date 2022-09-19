import { useEffect } from "react"
import { useState } from "react"
import ReactPlayer from "react-player"
import { PlayButton, PlayState } from "./PlayButton/PlayButton"
import cls from "classnames"
import { PlayAnimation } from "./PlayButton/PlayAnimation"

const playlist = [
  {
    title: "Freefall",
    artist: "KAYTRANADA",
    url: "https://www.youtube.com/watch?v=XzzqJb6Dsbs",
  },
  {
    title: "The Light",
    artist: "Common",
    url: "https://www.youtube.com/watch?v=OjHX7jf-znA",
  },
]

export const MusicPlayer = () => {
  const [play, setPlay] = useState(false)
  const [hasWindow, setHasWindow] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [showList, toggleList] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  const currentTrack = playlist[currentTrackIndex]

  return (
    <div className="relative">
      <div className="flex h-[50px] min-w-[250px] flex-row items-stretch rounded-lg border border-neutral-800">
        {hasWindow && <ReactPlayer url={currentTrack.url} playing={play} height={0} width={1} />}

        <PlayButton onClick={() => setPlay(!play)} state={play ? PlayState.Play : PlayState.Stop} />

        <div
          className="flex items-center border-l border-neutral-800 px-3"
          onClick={() => {
            toggleList(!showList)
          }}
        >
          <span className="text-orange-500">{currentTrack.title}</span>
          <span className="px-2 text-sm text-neutral-600">by</span>
          <span className="text-neutral-500">{currentTrack.artist}</span>
        </div>

        <div className="flex items-center border-l border-neutral-800 px-3 text-sm text-neutral-600">
          <span>{currentTrackIndex + 1}</span>
          <span className="px-2">of</span>
          <span>{`${playlist.length}`}</span>
        </div>
      </div>

      {showList && (
        <div className="absolute bottom-[60px] flex w-full flex-col space-y-2 rounded-lg border border-neutral-800 bg-black">
          {playlist.map((track, index) => (
            <div
              key={index}
              className={cls("flex flex-row items-center  border-b-neutral-600 p-3 text-left", {
                "bg-neutral-900": index === currentTrackIndex,
              })}
              onClick={() => {
                setCurrentTrackIndex(index)
                toggleList(false)
                setPlay(true)
              }}
            >
              <div className="p-4">{`${index + 1}.`}</div>
              <div className="ml-2 flex flex-col">
                <div>{track.title}</div>
                <div className="text-neutral-500">{track.artist}</div>
              </div>
              {index === currentTrackIndex && (
                <div className="m-3 ml-auto">
                  <PlayAnimation animate />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}