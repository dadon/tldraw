import * as React from 'react'
import type { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

const IFrameWarning = dynamic(() => import('components/IFrameWarning'), {
  ssr: false,
}) as any

const MultiplayerEditor = dynamic(() => import('components/MultiplayerEditor'), {
  ssr: false,
}) as any

interface RoomProps {
  id: string
}

export default function Room({ id }: RoomProps) {
  // if (typeof window !== 'undefined' && window.self !== window.top) {
  //   return <IFrameWarning url={`https://tldraw.com/r/${id}`} />
  // }

  return <MultiplayerEditor roomId={id} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id?.toString()

  return {
    props: {
      id,
    },
  }
}
