'use client';
import { Playlist } from '@/@types';
import React from 'react';
import { getRandomElementFromArray } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  playlist: Playlist;
}

const PlayListCard = ({ playlist }: Props) => {
  const { push } = useRouter();

  const { id, owner, playlistName, songList } = playlist;
  const songListLen = songList?.length;
  const imgSrc: string = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className="h-[240px] cursor-pointer">
      <section className="relative h-[136px]" onClick={onClickCard}>
        <Image src={imgSrc} fill alt="thumbnail" className="object-cover" />
      </section>
      <section>
        <div>{playlistName}</div>
        <div>{`${owner} - 트랙 ${songListLen}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
